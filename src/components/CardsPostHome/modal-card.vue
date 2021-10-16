<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
          <div v-if="!post.photoId">
          <div class="media-left">
          <figure class="image is-128x128 is-1by1">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        </div>

        <div v-else>
        <div class="media-left">
          <figure class="image is-128x128 is-1by1">
            <img :src="getImage(post.photoFileName)" alt="Placeholder image" />
          </figure>
        </div>
        </div>
        <div class="media-content">
          <div class="content">
            <h4>{{post.position}} - {{post.schedule}}</h4>
          </div>

          <p>
            {{post.description}}
            <a href="">{{post.url}}</a>
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="content">
            <p class="title is-4">{{post.companyName}}</p>
            <p class="subtitle is-6">{{post.location}}</p>
            <a href="">{{post.url}}</a>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h5>Como aplicar?</h5>
            <p>Envia tu curriculum a Enrique@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Post } from "@/core/model";
import { PostService } from "@/core/services";
import { FileService } from "@/core/services";
@Component({
  components: {
    
  },
})
export default class CardModalHome extends Vue {
  postservice = new PostService();
  

 @Prop({ default: "", required: true })
  post?: Post;

fileService = new FileService();
  getImage(fileName: string) {
    return this.fileService.getPublicUrl(fileName, "image/png");
  }
  
}
</script>

<style>
.card-style {
  max-width: 20rem;
  min-height: 25rem;
  max-height: 25rem;
}
.is-pointer {
  cursor: pointer;
}
</style>
