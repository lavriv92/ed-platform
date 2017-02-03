module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!src)/,
        'app.js': /^src/
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },
  paths: {
    watched: [ 'src' ]
  },
  plugins: {
    babel: {
      presets: ['es2015', 'react'],
    },
    postcss: {
      processors: [
        require('precss'),
        require('postcss-custom-properties'),
        require('postcss-css-variables'),
        require('postcss-cssnext')
      ]
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['src/initialize']
    }
  },
  server: {
    port: 8080,
    stripSlashes: true,
  }
};
