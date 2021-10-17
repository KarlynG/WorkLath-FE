<template>
  <div class="home center">
    <div v-if="isLoading" class="box mt-5">
        <div class="columns">
          <div class="column">
            <LoadingHome />
          </div>
          <div class="column">
            <LoadingHome />
          </div>
          <div class="column">
            <LoadingHome />
          </div>
          <div class="column">
            <LoadingHome />
          </div>
        </div>
    </div>
    <div v-else v-for="(job, index) in allJobs" :key="index">
      <div class="box mt-5" style="min-height: 10rem;">
        <b-icon
          class="is-pulled-left"
          icon="view-dashboard"
          size="is-large"
          type="is-info"
        >
        </b-icon>
        <router-link class="subtitle is-3" :to="`/job/${job.id}`">&nbsp; {{ job.name }}</router-link>
        <div class="columns">
          <div class="column" v-for="(post, index) in job.posts" :key="index">
            <PostCard  :post="post" />
          </div>
          <div class="column" v-if="isLoggedIn">
            <AddPostCard :id="job.id" class="is-pulled-right jobId" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AddPostCard from "@/components/CardsPostHome/add-post-card.vue";
import PostCard from "@/components/CardsPostHome/post-card.vue";
import LoadingHome from "@/components/LoadingHome/loading-home.vue";
import { Component, Vue } from "vue-property-decorator";
import { PostService } from "@/core/services/post.service";
import { Job, Post } from "@/core/model";
import { JobService } from "@/core/services";

@Component({
  components: {
    AddPostCard,
    PostCard,
    LoadingHome
  },
})
export default class Home extends Vue {
  isLoading = true;
  postService = new PostService();
  first3Post: Post[] = [];

  jobService = new JobService();
  allJobs: Job[] = [];
  
  

  get isLoggedIn() {
    return this.$store.state.isLoggedIn;
  }

  async created() {
    this.$store.commit('hideNavbarAndFooter', false);
    let jobResult = await this.jobService.getAll();
    this.allJobs = jobResult.data.value;
    this.isLoading = false;

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