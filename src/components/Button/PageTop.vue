<template>
    <a
      id="page-top"
      class="button is-info is-large is-circle"
      :class="{'is-hidden': scrollY < 200}"
      v-scroll-to="'body'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
    </a>
</template>

<script>
export default {
  props: [],
  data: () => ({
    scrollY: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
#page-top {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    border-radius: 50%;
    font-size: 2rem;
    padding-left: 0;
    padding-right: 0;

    animation:fadein 1s both;

    &.is-hidden {
        animation:fadeout 1s both;
    }
}

@media screen and (max-width: 1088px) {
  #page-top {
    right: 1rem;
    bottom: 1rem;
  }
}

@keyframes fadein {
0% {
  opacity:0;
}
100% {
  opacity:1;
}
}

@keyframes fadeout {
0% {
  opacity:1;
}
100% {
  opacity:0;
}
}
</style>
