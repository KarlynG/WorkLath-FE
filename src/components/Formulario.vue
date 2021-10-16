<template>
  <div class="container is-max-desktop">
    <h1>Publicar nuevo empleo</h1>
    <div class="columns">
      <div class="columns is-two-fifths">
        <div class="field">
          <label class="label">Categoria</label>
          <div class="control">
            <div class="select">
              <select disabled>
                <option :value="0">{{ postCategory }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <label class="label">Horario</label>
        <b-radio v-model="postModel.horario" name="name" native-value="Flint">
          Full time
        </b-radio>
        <b-radio v-model="postModel.horario" name="name" native-value="Silver">
          Part time
        </b-radio>
        <b-radio v-model="postModel.horario" name="name" native-value="Jack">
          Freelance
        </b-radio>
      </div>
    </div>

    <div class="field">
      <label class="label">Compañia</label>
      <div class="control">
        <input
          v-model="postModel.companyName"
          label="Name"
          class="input is-info"
          type="text"
          placeholder="Compañia"
        />
      </div>
    </div>

    <b-field>
      <b-upload v-show="!successUpload" @input="selectFile" drag-drop expanded>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Arrastre un archivo o click para seleccionar</p>
          </div>
        </section>
      </b-upload>
      <b-image
        class="image-is-350x210"
        v-show="successUpload"
        :src="imageUrl"
        alt="A random image"
      ></b-image>
    </b-field>
    <b-field class="file">
      <b-upload @input="selectFile" expanded>
        <b-button type="is-primary" expanded v-if="uploading" loading
          >Subiendo...</b-button
        >
        <a v-else class="button is-primary is-fullwidth">
          <b-icon icon="upload"></b-icon>
          <span>Cargar foto</span>
        </a>
      </b-upload>
    </b-field>
    <div>
      <div class="field">
        <label class="label">URL</label>
        <div class="control">
          <input
            class="input is-info"
            type="text"
            placeholder="URL"
            v-model="postModel.url"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Posición</label>
        <div class="control">
          <input
            class="input is-info"
            type="text"
            placeholder="Posición"
            v-model="postModel.position"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Localización</label>
        <div class="control">
          <input
            class="input is-info"
            type="text"
            placeholder="Localización"
            v-model="postModel.location"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Descripción</label>
        <div class="control">
          <textarea
            class="textarea is-info"
            placeholder="Textarea"
            v-model="postModel.description"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-info" @click="createJob()">Enviar</button>
        </div>
        <div class="control">
          <button class="button is-info is-light" expanded>Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Post } from "@/core/model/post.model";
import { FileService, PostService } from "@/core/services";

@Component
export default class FormJob extends Vue {
  @Prop({ default: "", required: true })
  postCategory = "";

  postService = new PostService();
  postModel = new Post();

  //Upload file section
  uploading = false;
  successUpload = false;
  errorUpload = false;
  fileService = new FileService();
  imageUrl = require("@/assets/logo.png");

  async selectFile(selected: File) {
    try {
      this.uploading = true;
      const document = await this.fileService.upload(selected);
      this.postModel.photo = document.data;
      this.imageUrl = this.fileService.getPublicUrl(
        this.postModel.photo.fileName,
        this.postModel.photo.contentType
      );
      this.successUpload = true;
    } catch (error) {
      this.errorUpload = true;
      this.imageUrl = require("@/assets/logo.png");
      this.operationFailed("Error al enviar foto al servidor");
    } finally {
      this.uploading = false;
    }
  }

  operationFailed(message = "Operación fallída!", duration = 4000) {
    this.$buefy.toast.open({
      message: message,
      type: "is-danger",
      position: "is-top-right",
      duration: duration,
    });
  }

  async createJob() {
    let result = await this.postService.post(this.postModel);
    this.$emit("add", false);
    this.$buefy.toast.open({
      message: "Se agrego el post!",
      type: "is-success",
    });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 40px;
}
.checkbox {
  padding-left: 10px;
}

h1 {
  font-size: 2em;
  margin-bottom: 5px;
}
div .field {
  margin-top: 20px;
}
.columns {
  padding-left: 3%;
}
.column {
  padding-left: 5%;
}
</style>