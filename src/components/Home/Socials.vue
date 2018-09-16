<template>
  <div>
    <div class="has-text-centered">
      <h2
        class="title is-underline is-white is-text-font-quicksand"
        style="margin-top: 10rem;">
        Socials
      </h2>
      <p class="subtitle has-text-white is-7">ソーシャル</p>
    </div>
    <div class="columns is-centered is-multiline m-t-50 social-links">
      <div class="column is-4">
        <a href="https://twitter.com/nakanakamu0828" target="_blank" class="box has-text-centered has-text-white is-bg-twitter" style="padding: 3rem;">
          <i class="fab fa-twitter fa-3x"></i>
          <p class="subtitle m-t-10">
            Twitter
          </p>
        </a>
      </div>
      <div class="column is-4">
        <a href="https://github.com/nakanakamu0828" target="_blank" class="box has-text-centered has-text-white is-bg-github" style="padding: 3rem;">
          <i class="fab fa-github fa-3x"></i>
          <p class="subtitle m-t-10">
            GitHub
          </p>
        </a>
      </div>
      <div class="column is-4">
        <a href="https://medium.com/@nakamu" target="_blank" class="box has-text-centered has-text-white is-bg-medium" style="padding: 3rem;">
          <i class="fab fa-medium-m fa-3x"></i>
          <p class="subtitle m-t-10">
            Medium
          </p>
        </a>
      </div>
      <div class="column is-4">
        <a href="https://instagram.com/____nakamu____" target="_blank" class="box has-text-centered has-text-white is-bg-instagram" style="padding: 3rem;">
          <i class="fab fa-instagram fa-3x"></i>
          <p class="subtitle m-t-10">
            Instagram
          </p>
        </a>
      </div>
      <div class="column is-4">
        <a href="https://gitlab.com/nakamu" target="_blank" class="box has-text-centered has-text-white is-bg-gitlab" style="padding: 3rem;">
          <i class="fab fa-gitlab fa-3x"></i>
          <p class="subtitle m-t-10">
            Gitlab
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
  props: {
  },
};
</script>

<style lang="scss" scoped>

.social-links {
  & > div > a:hover {
      transform: scale(1.025);
      -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #b8b8b8;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #b8b8b8;
  }
}

</style>
