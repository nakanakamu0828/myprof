<template>
  <div>
    <div class="has-text-centered">
      <h2 class="title is-underline is-white is-text-font-quicksand" style="margin-top: 5rem;">
        Contents
      </h2>
      <p class="subtitle has-text-white is-7">個人サイトや提供しているコンテンツ</p>
    </div>
    <div class="columns m-t-20">

      <div
        class="column is-flex is-4"
        v-for="(content, key, index) in contents"
        :key="index"
      >
        <div class="card">
          <div class="card-image">
            <a :href="content.link" target="_blank" class="image">
              <img :src="content.image_src" :alt="content.image_alt">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>
                <a :href="content.link" target="_blank">{{ content.title }}</a>
              </h4>
              <p>{{ content.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable global-require */
const blogImagePath = require('../../assets/img/nakamu_blog_banner.png');
/* eslint-enable global-require */

export default {
  name: 'Portfolio',
  props: {
  },
  data: () => ({
    contents: [
      {
        image_src: blogImagePath,
        image_alt: 'なかむ🇭🇰エンジニアブログ',
        title: 'なかむ🇭🇰エンジニアブログ',
        description: '今ままでのエンジニア経験を元にした技術ブログまとめまています',
        link: 'https://blog.nakamu.life/',
      },
    ],
  }),
};
</script>

<style scoped>
</style>
