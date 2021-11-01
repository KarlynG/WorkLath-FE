<template>
  <div class="card is-pointer card-style">
    <div class="card-image">
      <figure class="image is-4by3">
        <p class="image">
          <b-skeleton></b-skeleton>
        </p>
      </figure>
    </div>
    <div class="card-content position-card-loading">
      <div class="media">
        <div class="media-content">
          <p class="title is-4"><b-skeleton width="20%" animated></b-skeleton></p>
          <p class="subtitle is-6"><b-skeleton width="50%" animated></b-skeleton></p>
        </div>
      </div>
      <div class="content">
          <b-skeleton width="90%" animated></b-skeleton>
          <b-skeleton width="90%" animated></b-skeleton>
          </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CardPostHome extends Vue {}
</script>

<style>
.image .b-skeleton .b-skeleton-item{
    height: 16rem;
    margin-top: -16rem;
}
.position-card-loading{
    margin-top: -2rem;
}
</style>