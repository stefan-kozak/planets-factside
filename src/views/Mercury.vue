<template>
   <div class="planet-wrap">
      <div class="planet-main">
         <div class="planet-images">
            <img
               id="planet-overview"
               :src="require('@/assets/' + currentImage)"
               alt="planet"
            />

            <img
               id="planet-geology"
               src="../assets/geology-mercury.png"
               alt="geology"
            />
         </div>

         <PlanetMainText :planetText="planet[0]" />
      </div>
      <PlanetInfo :planetInfo="planet[0]" />
   </div>
</template>

<script>
import PlanetMainText from '@/components/PlanetMainText.vue'
import PlanetInfo from '@/components/PlanetInfo.vue'

export default {
   data() {
      return {
         currentImage: 'planet-mercury.svg',
      }
   },
   components: {
      PlanetMainText,
      PlanetInfo,
   },
   props: ['planet'],
   methods: {
      test(event) {
         console.log(event)
      },
   },
}
</script>

<style lang="scss" scoped>
.planet-wrap {
   width: 100%;
   display: flex;
   margin-top: 1%;
   flex-direction: column;
   justify-content: space-between;
   align-self: center;
}

.planet-main {
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   .planet-images {
      position: relative;
      width: 25%;
      margin-left: 25%;
      align-self: center;

      #planet-geology {
         display: none;
         position: absolute;
         bottom: 54%;
         width: 40%;
         transform: rotate(151deg);
         right: 61%;
      }
   }
}
</style>
