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
      </div>
    </div>

    <div class="content">
      <p> ver todos los empleos</p>
      <br>
      <button class="button is-info is-light" @click="$router.push('About')">Ver Empleos</button>
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