import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    svgLoader(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })
  ]
};