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
