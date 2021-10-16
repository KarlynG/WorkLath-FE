<template>
  <div class="card is-pointer card-style">
  <div class="card-image">
    <div v-if="!post.photoId">
      <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
    </div>
    <div v-else>
      <figure class="image is-4by3">
      <img :src="getImage(post.photoFileName)" alt="Placeholder image">
    </figure>
    </div>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{post.position}}</p>
        <p class="subtitle is-6">by: {{post.companyName}}</p>
      </div>
    </div>

    <div class="content">
      {{post.description}}
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Formulario from "@/components/Formulario.vue";
import { Post } from "@/core/model";
import { FileService } from "@/core/services";
@Component({
  components: {
    Formulario,
  },
})
export default class CardPostHome extends Vue {
  @Prop({default: '', required: true})
  post?:Post;

  fileService = new FileService();
  getImage(fileName: string) {
    return this.fileService.getPublicUrl(fileName, "image/png");
  }

}
</script>

<style >
.card-style {
  max-width: 20rem;
  min-height: 25rem;
  max-height: 25rem;
}
.is-pointer {
  cursor: pointer;
}
</style>