<template>
  <div class="jobTable">
    <div class="card center workshop-list">
      <div class="card-content has-text-centered">
        <h1 class="title">Ver todos los post</h1>
        <nav class="panel">
          <p class="panel-heading"></p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <b-autocomplete
                v-model="search"
                class="post-autocomplete"
                :data="filteredDataArray"
                placeholder="Buscar post"
                icon="magnify"
                clearable
                open-on-focus
              >
                <template #empty>No se encontraron resultados</template>
              </b-autocomplete>
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </p>
          </div>
          <p
            class="panel-block is-active has-text-centered"
            v-if="!posts.length"
          >
            No se encontraron resultados
          </p>
          <a
            class="panel-block is-active"
            v-else
            v-for="(post, index) in flteredPosts"
            :key="index"
          >
            <span @click="changeState()" class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ post.position }}
            <b-modal v-model="isCardModalActive" scroll="keep">
            <CardModalHome :post="flteredPosts[index]"  />
        </b-modal>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "@/core/model";
import { PostService } from "@/core/services";
import { Component, Vue } from "vue-property-decorator";
import CardModalHome from "@/components/CardsPostHome/modal-card.vue";

@Component({
  components: {
    CardModalHome
  },
})
export default class JobTable extends Vue {
  postService = new PostService();
  posts: Post[] = [];
  jobId = parseInt(this.$route.params.id);
  search = "";

  changeState(){
    this.isCardModalActive = !this.isCardModalActive;
  }
  isCardModalActive = false;

  async created() {
    this.$store.commit("hideNavbarAndFooter", false);
    let result = await this.postService.getPostByJobId(this.jobId);
    this.posts = result.data;
  }

  get filteredDataArray() {
    let result = this.posts.filter((option:any) => {
      return (option.position 
      .toString()
      .toLowerCase()
      .includes(this.search.toString().toLowerCase())
      );
    });
    let arrayOfLogs:string[] = []
    result.forEach((post:any )=> {
      arrayOfLogs.push(post.position);
    });
    return arrayOfLogs;
  }

  get flteredPosts() {
    if (this.search) {
      let result = this.posts.filter((post) => {
        return post.position
          ?.toString()
          .toLowerCase()
          .includes(this.search.toString().toLowerCase());
      });
      return result;
    } else {
      return this.posts;
    }
  }
}
</script>

<style>
</style>