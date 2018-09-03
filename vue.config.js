const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  pwa: {
    name: 'なかむ🇭🇰プロフィール',
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // ★ Prerender SPA Plugin を登録
          new PrerenderSpaPlugin(
            // 出力先 dist や www など
            path.join(__dirname, 'dist'),
            // 生成したいページ
            ['/'],
          ),
        ],
      };
    }
    return null;
  },
};
