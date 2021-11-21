require('esbuild')
  .build({
    entryPoints: ['./dist/index.js'],
    bundle: true,
    platform: 'node',
    outfile: './lib/handler.js',
    target: 'node12',
    minify: true
  })
  .catch(() => process.exit(1));
