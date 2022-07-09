import { defineConfig, Plugin } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact({
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: false }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
      ],
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    }
  })],
  esbuild: {
    keepNames: true
  }
})
