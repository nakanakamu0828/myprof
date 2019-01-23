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
            <HomeSkills />
            <hr>
            <HomeWorks />
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-medium" style="margin-top: -10rem;">
      <div class="hero-body">
        <div class="container">
          <HomeSocials></HomeSocials>
          <HomePortfolio></HomePortfolio>

          <div id="area-contact" class="box" style="margin-top: 10rem">
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
import HomeSkills from '../components/Home/Skills.vue';
import HomeWorks from '../components/Home/Works.vue';
import HomePortfolio from '../components/Home/Portfolio.vue';


/* eslint-disable global-require */
const profileImagePath = process.env.VUE_APP_BASE_URL + require('../assets/img/profile.jpg');
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
    script: [
      { type: 'text/javascript', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true},
      { type: 'text/javascript', innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: \'ca-pub-9693505561732401\', enable_page_level_ads: true});' },
    ],
  },
  data: () => ({
    nickname: 'なかむ🇭🇰Webデベロッパー',
  }),
  components: {
    Header,
    Footer,
    HomeSocials,
    HomeSkills,
    HomeWorks,
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
  font-size: 1.5rem;
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
  .introduction__title {
    font-size: 2rem;
  }
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
