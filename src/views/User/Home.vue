<template>
  <div class="home center">
    <div class="box">
      <b-icon
        class="is-pulled-left"
        icon="view-dashboard"
        size="is-large"
        type="is-info"
      >
      </b-icon>
      <p class="subtitle is-3">&nbsp; Desarrollo</p>
      <div class="columns">
        <div class="column" v-for="(post, index) in first3Post" :key="index">
          <PostCard :post="post" />
        </div>
        <div class="column">
          <AddPostCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AddPostCard from "@/components/CardsPostHome/add-post-card.vue";
import PostCard from "@/components/CardsPostHome/post-card.vue";
import { Component, Vue } from "vue-property-decorator";
import {PostService} from "@/core/services/post.service";
import { Post } from "@/core/model";

@Component({
  components: {
    AddPostCard,
    PostCard,
  },
})
export default class Home extends Vue {
  postService = new PostService();
  postList:Post[] = [];
  first3Post:Post[] = [];

  async created(){
    let result = await this.postService.getAll();
    this.postList = result.data.value;
    this.first3Post = this.postList.slice(0, 3);
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
.center {
  margin: auto;
  width: 90%;
  padding: 10px;
}
</style>