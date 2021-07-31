<template>
   <section class="planet-info">
      <div class="info-card">
         <h5>Rotation time</h5>
         <h1>{{ planetInfo.rotation }}</h1>
      </div>
      <div class="info-card">
         <h5>revolution time</h5>
         <h1>{{ planetInfo.revolution }}</h1>
      </div>
      <div class="info-card">
         <h5>radius</h5>
         <h1>{{ planetInfo.radius }}</h1>
      </div>
      <div class="info-card">
         <h5>average temperature</h5>
         <h1>{{ planetInfo.temperature }}</h1>
      </div>
   </section>
</template>

<script>
export default {
   props: ['planetInfo'],
}
</script>

<style lang="scss" scoped>
.planet-info {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap: 2em;
   margin: 0 14%;
   margin-top: 1%;

   .info-card {
      border: 1px solid gray;
      padding: 0 2rem;
      text-transform: uppercase;

      h1 {
         font-size: 40px;
         margin: 1rem 0;
         font-family: 'Antonio', sans-serif;
         text-align: left;
      }
      h5 {
         text-align: left;
         color: darken(#fff, 50%);
         font-size: 11px;
         font-family: 'Spartan', sans-serif;
      }
   }
}
</style>
