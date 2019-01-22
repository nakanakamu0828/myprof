<template>
  <nav class="navbar is-primary" :class="{'is-fixed-top is-fadein': scrollY > 100}">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-block">
          <div class="font-leckerli-one navbar-brand__title">
            Nakamu
          </div>
          <div class="subtitle is-size-7"> 世界を旅して暮らしたい放浪エンジニア</div>
        </router-link>

        <span class="navbar-burger burger" :class="{'is-active': drawer}" @click="drawer = !drawer">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu" :class="{'is-active': drawer}">
        <div class="navbar-end">

          <div class="tabs is-centered m-b-0">
              <ul>
                  <li>
                    <a
                      to="/"
                      class="is-text-font-quicksand"
                      v-scroll-to="'body'"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="is-text-font-quicksand"
                      v-scroll-to="{
                        el: '#area-skills',
                        offset: -100,
                      }"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="is-text-font-quicksand"
                      v-scroll-to="{
                        el: '#area-works',
                        offset: -100,
                      }"
                    >
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="is-text-font-quicksand"
                      v-scroll-to="{
                        el: '#area-socials',
                        offset: -100,
                      }"
                    >
                      Socials
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="is-text-font-quicksand"
                      v-scroll-to="{
                        el: '#area-contents',
                        offset: -100,
                      }"
                    >
                      Contents
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="is-text-font-quicksand"
                      v-scroll-to="{
                        el: '#area-contact',
                        offset: -100,
                      }"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.nakamu.life"
                      class="is-text-font-quicksand"
                      target="_blank"
                    >
                      Blog
                      <sup>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"/></svg>
                      </sup>
                    </a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data: () => ({
    drawer: false,
    scrollY: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    toggleContactModal() {
      this.$store.dispatch('toggleContactModal');
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    .navbar-brand__title {
      font-size: 2rem;

      & + .subtitle {
        color: #fff;
      }
    }
  }

  .navbar-menu {
    & > .navbar-start, & > .navbar-end {
      .tabs {
        & > ul {
          border: none;

          & > li {
            & > a {
              color: #fff;
              border: none;

              position: relative;
              display: inline-block;

              &:before, &:after {
                position: absolute;
                top: 2rem;
                content: "";
                display: inline-block;
                width: 0;
                height: 2px;
                background: #fff;
                transition: .5s;
              }

              &:before {
                left: 50%;
              }
              &:after {
                right: 50%;
              }

              &:hover {
                font-weight: 600;

                &:before, &:after {
                  width: 50%;
                }
              }
            }

          }
        }
      }
    }
  }
}
</style>
