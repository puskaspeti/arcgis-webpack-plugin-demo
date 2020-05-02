const ArcGISPlugin = require('@arcgis/webpack-plugin');

module.exports = {
  plugins: [new ArcGISPlugin()],
  node: {
    process: false,
    global: false,
    Buffer: false, // NOTE: ez a sor még a hivatalos példából is hiányzik, pedig nélküle eltörik az egész alkalmazás.
    fs: 'empty'
  }
};
