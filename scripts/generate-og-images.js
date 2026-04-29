const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const STATIC_DIR = path.join(__dirname, '..', 'public', 'static')
const PATTERN = /^(blog-|og-).*\.svg$/

async function main() {
  const files = fs.readdirSync(STATIC_DIR).filter((f) => PATTERN.test(f))

  let generated = 0
  let skipped = 0

  for (const file of files) {
    const svgPath = path.join(STATIC_DIR, file)
    const pngPath = path.join(STATIC_DIR, file.replace(/\.svg$/, '.png'))

    const svgStat = fs.statSync(svgPath)
    const pngStat = fs.existsSync(pngPath) ? fs.statSync(pngPath) : null

    if (pngStat && pngStat.mtimeMs >= svgStat.mtimeMs) {
      skipped++
      continue
    }

    const svg = fs.readFileSync(svgPath)
    const meta = await sharp(svg).metadata()
    const width = meta.width || 1200

    await sharp(svg, { density: Math.round((300 * width) / 1200) })
      .resize(width, meta.height)
      .png({ compressionLevel: 9 })
      .toFile(pngPath)

    generated++
    console.log(`  generated ${path.basename(pngPath)} (${width}×${meta.height})`)
  }

  console.log(`og-images: ${generated} generated, ${skipped} up-to-date`)
}

main().catch((err) => {
  console.error('og-image generation failed:', err)
  process.exit(1)
})
