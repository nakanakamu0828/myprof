<template>
  <div id="top" class="home">
    <Header></Header>

    <section class="hero is-primary">
      <!-- Hero head: will stick at the top -->

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
      </div>
    </section>
    <section class="hero is-primary is-medium">
      <div class="container">
        <div class="box introduction">
          <div class="media">
              <div class="media-center">
                  <img src="../assets/img/profile.jpg" class="author-image" :alt="nickname">
              </div>
              <div class="media-content m-t-50 has-text-centered">
                  <h1 class="introduction__title" v-text="nickname"></h1>
                  <p class="introduction__subtitle">
                      Web Developer, Software Development & Mentor
                  </p>
              </div>
          </div>
          <div class="introduction__body">
            <div class="has-text-centered">
              <h2 class="title has-text-dark is-underline is-text-font-quicksand">Introduction</h2>
              <p class="subtitle has-text-dark is-7">自己紹介</p>
            </div>
            <div class="tags m-t-40 m-b-30 is-centered">
              <span class="tag is-primary is-medium is-rounded">Technology</span>
              <span class="tag is-primary is-medium is-rounded">Web Developer</span>
              <span class="tag is-primary is-medium is-rounded">Software Development</span>
              <span class="tag is-primary is-medium is-rounded">PHPer</span>
              <span class="tag is-primary is-medium is-rounded">Laraveler</span>
            </div>
            <div class="box is-bg-lightbule">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img src="../assets/img/profile.jpg" class="is-rounded" :alt="nickname">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content m-t-20">
                    <strong v-text="nickname"></strong>
                  </div>
                </div>
              </div>
              <blockquote style="margin-left:20px; margin-right:15px;" class="update-bubble">
                香港在住3年目になるWEBエンジニアのなかむです。
                現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアをしています。
                顧客は全て日本の企業になります。リモート開発にて各企業様の支援を行なっております。
              </blockquote>
            </div>
            <hr>
            <div class="is-clearfix"></div>
            <div class="has-text-centered">
              <h2 class="title has-text-dark is-underline is-text-font-quicksand">Skills</h2>
              <p class="subtitle has-text-dark is-7">スキル</p>
            </div>
            <div class="has-text-centered m-t-40">
              <img
                v-for="(skill, key, index) in skills"
                :key="index"
                v-bind:src="'https://icongr.am/devicon/' + skill + '.svg?size=50'"
                style="margin-right: .5rem;"
              >
            </div>
            <hr>
            <div class="is-clearfix"></div>
            <div class="has-text-centered">
              <h2 class="title has-text-dark is-underline is-text-font-quicksand">Recent works</h2>
              <p class="subtitle has-text-dark is-7">直近のお仕事</p>
            </div>

            <p class="is-size-6 has-text-centered m-t-40 m-b-20">
                日系企業に向けて業務委託や受託でWEBサービスの開発を行なっています。
            </p>

            <div class="columns features">

              <div class="column is-flex is-6"
                v-for="(work, key, index) in works"
                :key="index"
              >
                <div class="card is-shady">
                  <div class="card-image">
                    <figure class="image is-2by1">
                      <img :src="work.image_src" :alt="work.image_alt">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <h4 v-text="work.title"></h4>
                      <p v-html="work.description"></p>
                      <p v-if="work.skills">
                        <img
                          v-for="(skill, key, index) in work.skills"
                          :key="index"
                          v-bind:src="'https://icongr.am/devicon/' + skill + '.svg?size=30'" style="margin-right: .5rem;"
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-medium" style="margin-top: -10rem;">
      <div class="hero-body">
        <div class="container">
          <HomeSocials></HomeSocials>
          <HomePortfolio></HomePortfolio>

          <div class="box" style="margin-top: 10rem">
            <div class="has-text-centered">
              <h2 class="title has-text-dark is-underline has-text-centered is-text-font-quicksand">
                Let's Play Together.
              </h2>
              <p class="subtitle has-text-dark is-7">お仕事募集中。一緒にプログラミングしましょう</p>
            </div>

            <div class="columns" style="margin-top: 1.5rem;">
              <div class="column is-offset-3 is-6">
                <a
                  href="javascript:void(0)"
                  class="button is-info is-outlined is-medium is-fullwidth"
                  @click="toggleContactModal"
                >
                  ️✉️ お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    <ButtonPageTop />
    <ModalContact />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ButtonPageTop from '../components/Button/PageTop.vue';
import ModalContact from '../components/Modal/Contact.vue';

import HomeSocials from '../components/Home/Socials.vue';
import HomePortfolio from '../components/Home/Portfolio.vue';


/* eslint-disable global-require */
const profileImagePath = process.env.VUE_APP_BASE_URL + require('../assets/img/profile.jpg');
const smailImagePath = require('../assets/img/smail.png');
const jobSearchImagePath = require('../assets/img/jobsearch.jpg');
/* eslint-enable global-require */

export default {
  name: 'home',
  metaInfo: {
    title: 'プロフィール紹介',
    titleTemplate: '%s - Webデベロッパー「なかむ」',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { name: 'description', content: '香港在住のWebデベロッパー「なかむ」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nakanakamu0828' },
      { name: 'twitter:creator', content: '@nakanakamu0828' },
      { name: 'twitter:image', content: profileImagePath },
      { name: 'twitter:title', content: 'Webデベロッパー「なかむ」のプロフィール' },
      { name: 'twitter:description', content: '香港在住のWebデベロッパー「Nakamu」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },

      { name: 'og:title', content: 'Webデベロッパー「なかむ」のプロフィール' },
      { name: 'og:description', content: '香港在住のWebデベロッパー「Nakamu」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },
    ],
  },
  data: () => ({
    nickname: 'なかむ🇭🇰Webデベロッパー',
    skills: [
      'html5-original',
      'css3-original',
      'javascript-original',
      'jquery-original',
      'php-plain',
      'laravel-plain',
      'symfony-original',
      'zend-plain',
      'ruby-plain',
      'rails-plain-wordmark',
      'linux-original',
      'mysql-original',
      'redis-original',
      'nginx-original',
    ],
    works: [
      {
        image_src: smailImagePath,
        image_alt: 'SMail',
        title: '✉️一括メール配信サービス',
        description: 'SESマネージメント企業の営業メール配信システム。クライアントの管理からメールの一斉送信＆予約送信が可能なサービス。<br><br>',
        skills: [
          'html5-original',
          'css3-original',
          'javascript-original',
          'jquery-original',
          'php-plain',
          'laravel-plain',
          'mysql-original',
        ],
      },
      {
        image_src: jobSearchImagePath,
        image_alt: 'Job Search',
        title: '求職サイト（転職・派遣）',
        description: '派遣による就職を目指す方の求職サイト。給与や勤怠までトータルに管理できるWEBサービス<br>飲食、アパレル業種の転職者をターゲットとした転職サイト',
        skills: [
          'html5-original',
          'css3-original',
          'javascript-original',
          'jquery-original',
          'php-plain',
          'symfony-original',
          'mysql-original',
          'redis-original',
        ],
      },
    ],
  }),
  components: {
    Header,
    Footer,
    HomeSocials,
    ButtonPageTop,
    HomePortfolio,
    ModalContact,
  },
  methods: {
    toggleContactModal() {
      this.$store.dispatch('toggleContactModal');
    },
  },
};
</script>

<style lang="scss" scoped>

.author-image {
    position: absolute;
    top: -5rem;
    left: 50%;
    width: 10rem;
    height: 10rem;
    margin-left: -5rem;
    border: 3px solid #fff;
    border-radius: 50%;
    animation:show 1s both;
}
.media-center {
  display: block;
  margin-bottom: 1rem;
}

.introduction__title {
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.introduction__subtitle {
  margin-bottom: 3rem;
  font-weight: 600;
  font-size: 1.5rem;
}
.introduction__body {
  line-height: 1.4;

  h2 {
    font-size: 1.75em;
    font-weight: 600;
    line-height: 1.125;

    &:not(:first-child) {
      margin-top: 1.1428em;
    }
  }
}

.update-bubble {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  background: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, .2);
  color: #333;
  margin: 12px 0px 8px -10px;
  overflow-wrap: break-word;
  padding: 10px 15px;
  position: relative;

  &:after {
    border: 15px solid transparent;
    border-bottom-color: white;
    content: "";
    display: block;
    left: 30px;
    position: absolute;
    top: -27px;
    width: 0;
  }
}

@media screen and (min-width: 768px) {
  .introduction__body {
    margin: 0 6rem;
  }
}


@keyframes show {
  0% {
    transform:translate(0, -2em);
    opacity:0;
  }
  100% {
    transform:translate(0, 0);
    opacity:1;
    text-shadow:none;
  }
}

</style>
