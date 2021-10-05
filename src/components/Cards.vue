<template>
  <div class="card" >
  <div class="card-image">
    <figure class="image is-1by1">
      <img src="@/assets/Tecno.jpg" alt="Placeholder image" >
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img src="@/assets/Tecno.jpg" style="width:50px;height:50px;" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">puesto</p>
        <p class="subtitle is-6">compañia</p>
      </div>
    </div>

    <div class="content">informacion del empleo 
      <br>
      <button class="button is-info is-light" @click="$router.push('vistaT')">Detalles</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style>

</style>