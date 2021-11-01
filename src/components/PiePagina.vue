<template>
  <footer class="my-footer has-text-white" id="copyright">
	Copyright 2020-<span id="current-year">2021</span>, <a href="#" target="_blank" rel="noopener noreferrer">Group 5. ITLA</a>. All right reserved.
</footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PiePagina extends Vue {
}
</script>

<style lang="scss">
.my-footer {
  background: #2c2d35;
  width: 100%;
  position: fixed;
  bottom: 0;
	padding: 15.5px 10px;
	z-index: 20;
	font-size: .7rem;
  transition: 0.2s all ease-out;
}
a {
  color: #167df0;
}
</style>
