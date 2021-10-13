<template>

<body>
      <header id="main-header" class="container">
      <div class="content-warp">
            <h1 class="categories-header">
                    <a class=" has-text-info" href="/">Bienvenido al mejor espacio para buscar empleos!</a>
            </h1>
            <br>
            <br>
            <br>
            <br>
            <br>
      </div>
      <section id="intro" class="content-warp">
                <p class="secondary-feature">
                    En este, tu entorno de empleos podras buscar y publicar empleos para 
                    facilitarte a tu y a los usuarios la comunicacion con empresas y 
                    personal capacitado para los puestos requeridos!
                </p>
      </section>
  </header>
</body>
</template>

<script>
export default {

}
</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #4d5154;
}
h1{
    font-family: "Neufile Grotesk Semi Bold", sans-serif;
    color: #4d5154;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
section{
    width: 950px;
    margin: 0 auto;
    font-size: 1.2rem;
}
.content-wrap {
    max-width: 950px;
    margin: 0 auto;
    color: black;
}
div {
    display: block;
}

.categories-header, h1 {
    height: 80px;
    margin: 126px auto -10px auto;
    padding: 20px 0;
    text-align: center;
    font-size: 4rem;
    color:black;
    line-height: 4.5rem;
}
#main-header #intro .secondary-feature {
    line-height: 1.6em;
    font-family: "Neufile Grotesk Light", sans-serif;
        background: #dde0f4;
}
</style>