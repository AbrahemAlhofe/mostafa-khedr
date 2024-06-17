import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import handlebars from 'vite-plugin-handlebars';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ['creative-file']: resolve(__dirname, 'creative-file.html'),
      },
    },
  },
  plugins: [
    svgLoader(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })
  ]
};