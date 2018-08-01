<template>
  <div>
    <h2 class="title is-underline is-white has-text-centered is-text-font-quicksand" style="margin-top: 10rem;">
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

    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
  },
};
</script>

<style scoped>
</style>
