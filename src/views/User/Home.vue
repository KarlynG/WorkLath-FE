<template>
  <div class="home center">
    <div v-for="(job, index) in allJobs" :key="index">
      <div class="box mt-5">
        <b-icon
          class="is-pulled-left"
          icon="view-dashboard"
          size="is-large"
          type="is-info"
        >
        </b-icon>
        <p class="subtitle is-3">&nbsp; {{ job.name }}</p>
        <div class="columns">
          <div class="column" v-for="(post, index) in job.posts" :key="index">
            <PostCard :post="post" />
          </div>
          <div class="column">
            {{job.id}}
            <AddPostCard :jobId="job.id" class="is-pulled-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AddPostCard from "@/components/CardsPostHome/add-post-card.vue";
import PostCard from "@/components/CardsPostHome/post-card.vue";
import { Component, Vue } from "vue-property-decorator";
import { PostService } from "@/core/services/post.service";
import { Job, Post } from "@/core/model";
import { JobService } from "@/core/services";

@Component({
  components: {
    AddPostCard,
    PostCard,
  },
})
export default class Home extends Vue {
  postService = new PostService();
  first3Post: Post[] = [];

  jobService = new JobService();
  allJobs: Job[] = [];

  async created() {
    let jobResult = await this.jobService.getAll();
    this.allJobs = jobResult.data.value;
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