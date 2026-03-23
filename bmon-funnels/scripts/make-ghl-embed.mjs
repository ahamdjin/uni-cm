import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

const distIndexPath = path.join(distDir, 'index.html')
const distIndexHtml = await readFile(distIndexPath, 'utf8')

const jsMatch = distIndexHtml.match(/<script[^>]*type="module"[^>]*src="([^"]+\.js)"[^>]*><\/script>/i)
const cssMatch = distIndexHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/i)

if (!jsMatch) throw new Error(`Could not find a built JS <script type="module" src="..."> in ${distIndexPath}`)
if (!cssMatch) throw new Error(`Could not find a built CSS <link rel="stylesheet" href="..."> in ${distIndexPath}`)

const jsRel = jsMatch[1].replace(/^\//, '')
const cssRel = cssMatch[1].replace(/^\//, '')

const jsPath = path.join(distDir, jsRel)
const cssPath = path.join(distDir, cssRel)

const [js, css] = await Promise.all([readFile(jsPath, 'utf8'), readFile(cssPath, 'utf8')])

const inlineHtml = distIndexHtml
  .replace(cssMatch[0], `<style>\n${css}\n</style>`)
  .replace(jsMatch[0], `<script type="module">\n${js}\n</script>`)

const snippetLinks = [...new Set(
  [...distIndexHtml.matchAll(/<link[^>]+href="https:\/\/fonts\.(googleapis|gstatic)\.com[^"]*"[^>]*>/gi)]
    .map((match) => match[0]),
)]
  .join('\n')

const formEmbedMatch = inlineHtml.match(/<script[^>]+src="https:\/\/link\.bmon\.ai\/js\/form_embed\.js"[^>]*><\/script>/i)
const formEmbedScript = formEmbedMatch?.[0] ?? '<script defer src="https://link.bmon.ai/js/form_embed.js"></script>'

const rootMatch = inlineHtml.match(/<div\s+id="([^"]+)"\s*><\/div>/i)
const rootId = rootMatch?.[1] ?? 'bmon-funnels-root'

const snippetHtml = [
  '<!--',
  '  GoHighLevel embed snippet (generated).',
  '  Paste into a Custom HTML element OR split into header/footer custom code as needed.',
  '-->',
  snippetLinks,
  `<div id="${rootId}"></div>`,
  `<style>\n${css}\n</style>`,
  `<script type="module">\n${js}\n</script>`,
  formEmbedScript,
  '',
].filter(Boolean).join('\n')

await Promise.all([
  writeFile(path.join(distDir, 'ghl-embed.html'), inlineHtml, 'utf8'),
  writeFile(path.join(distDir, 'ghl-snippet.html'), snippetHtml, 'utf8'),
])

// eslint-disable-next-line no-console
console.log('Wrote dist/ghl-embed.html and dist/ghl-snippet.html')
