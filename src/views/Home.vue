<template>
  <div id="top" class="home">
    <header>
      <nav class="navbar is-primary" :class="{'is-fixed-top is-fadein': scrollY > 100}">
        <div class="container">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item is-block">
              <div class="logo is-header">
                Nakamu
                <!-- <img src="../assets/img/profile.jpg" alt="Placeholder image"> -->
              </div>
              <div class="subtitle is-size-7"> 世界を旅して暮らしたい放浪エンジニア</div>
            </router-link>


            <span class="navbar-burger burger" :class="{'is-active': drawer}" @click="drawer = !drawer">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu" :class="{'is-active': drawer}">
            <div class="navbar-end">
              <router-link to="/" class="navbar-item is-active is-text-font-quicksand">About</router-link>
              <!-- <router-link to="/socials" class="navbar-item">Socials</router-link> -->
              <a href="mailto:yuuki.nakamura.0828@gmail.com" target="_blank" class="navbar-item is-text-font-quicksand">
                Contact
              </a>

            </div>
          </div>
        </div>
      </nav>
    </header>
    <section class="hero is-primary" :class="{'m-t-5rem': scrollY > 100}">
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
                  <img src="../assets/img/profile.jpg" class="author-image" alt="Placeholder image">
              </div>
              <div class="media-content has-text-centered">
                  <h1 class="introduction__title">なかむ🇭🇰Laraveler</h1>
                  <p class="introduction__subtitle">
                      "LaravelやRailsを利用したWEB開発を得意とする。WEBプログラマーです。"
                  </p>
              </div>
          </div>
          <div class="introduction__body">
            <h2 class="has-text-centered is-underline is-text-font-quicksand">Introduction</h2>
            <p class="is-size-6 m-b-30">
                香港在住3年目になるWEBエンジニアのなかむです。現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアをしています。顧客は全て日本の企業になります。リモート開発にて各企業様の支援を行なっております。
            </p>
            <hr>
            <div class="is-clearfix"></div>
            <h2 class="has-text-centered is-underline is-text-font-quicksand">Skills</h2>
            <div class="has-text-centered">
              <img v-for="skill in skills" v-bind:src="'https://icongr.am/devicon/' + skill + '.svg?size=50'" style="margin-right: .5rem;">
            </div>
            <hr>
            <div class="is-clearfix"></div>
            <h2 class="has-text-centered is-underline is-text-font-quicksand">Recent works</h2>
            <p class="is-size-6 has-text-centered m-b-20">
                日系企業に向けて業務委託や受託でWEBサービスの開発を行なっています。
            </p>

            <div class="columns features">

              <div class="column is-6" v-for="work in works">
                <div class="card is-shady">
                  <div class="card-image">
                    <figure class="image is-2by1">
                      <img :src="work.image_src" :alt="work.image_alt" class="modal-button" data-target="modal-image2">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <h4 v-text="work.title"></h4>
                      <p v-html="work.description"></p>
                      <p v-if="work.skills">
                        <img v-for="skill in work.skills" v-bind:src="'https://icongr.am/devicon/' + skill + '.svg?size=30'" style="margin-right: .5rem;">
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
          <!-- <h2 class="title is-underline is-white has-text-centered is-text-font-quicksand" style="margin-top: 10rem;">
            Portfolio
          </h2>
          <div class="columns m-t-20">

            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click on image above</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus ultrices in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                    sed risus.</p>
                    <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus ultrices in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                    sed risus.</p>
                    <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                  </div>
                </div>
              </div>
            </div>

          </div> -->

          <div class="box" style="margin-top: 10rem">
            <h2 class="title has-text-dark is-underline has-text-centered is-text-font-quicksand">
              Let's Play Together.
            </h2>
            <p class="has-text-centered">
              お仕事の相談など問い合わせはメールからSNSからお願いいたします。
            </p>

            <div class="columns" style="margin-top: 1.5rem;">
              <div class="column is-offset-3 is-6">
                <a href="mailto:yuuki.nakamura.0828@gmail.com" target="_blank" class="button is-info is-outlined is-medium is-fullwidth">
                  ️✉️ お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer has-background-dark has-text-light">
      <div class="container is-fluid has-text-centered">
        <div class="buttons" style="justify-content: center;">
          <a href="https://twitter.com/nakanakamu0828" target="_blank" class="button is-circle is-medium">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/nakanakamu0828" target="_blank" class="button is-circle is-medium">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://medium.com/@nakamu" target="_blank" class="button is-circle is-medium">
            <i class="fab fa-medium-m"></i>
          </a>
          <a href="mailto:yuuki.nakamura.0828@gmail.com" target="_blank" class="button is-circle is-medium">
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <p>
          <small>Copyright © 2018.<br>Made with <a href="https://bulma.io/" target="_blank" class="has-text-light"><b>Bulma</b></a>, <a href="https://jp.vuejs.org/" target="_blank" class="has-text-light"><b>Vue.js</b></a>, and <a class="has-text-light" href="/madewith"><b>many more</b></a>.</small>
        </p>
        <a class="button is-light is-large is-rounded m-t-40" data-scroll="" href="#top">Back to top</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'Nakamuについての紹介ページ',
    titleTemplate: '%s - Nakamu!',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { name: 'description', content: '香港在住エンジニア「Nakamu」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },

      { name: "twitter:card", content: 'summary' },
      { name: "twitter:site", content: '@nakanakamu0828' },
      { name: "twitter:creator", content: '@nakanakamu0828' },
      { name: "twitter:image", content: process.env.VUE_APP_BASE_URL + require('../assets/img/profile.jpg') },
      { name: "twitter:title", content: 'Nakamuについての紹介ページ' },
      { name: "twitter:description", content: '香港在住エンジニア「Nakamu」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },

      { name: "og:title", content: 'Nakamuについての紹介ページ' },
      { name: "og:description", content: '香港在住エンジニア「Nakamu」のプロフィール紹介ページです。エンジニアとしての経歴やどんなスキルを持っているかなど自己紹介となります。' },
    ]
  },
  data: () => {
      return {
        scrollY: 0,
        drawer: false,
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
          'nginx-original'
        ],
        works: [
          {
            image_src: require('../assets/img/smail.png'),
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
            ]
          },
          {
            image_src: require('../assets/img/jobsearch.jpg'),
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
            ]
          }
        ]
      };
  },
  components: {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollY = window.scrollY;
    }
  }
};
</script>

<style lang="scss" scoped>
.m-t-5rem {
  margin-top: 5rem;
}
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
.media-content {
  margin-top: 3rem;
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
  font-size: 1.3rem;
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