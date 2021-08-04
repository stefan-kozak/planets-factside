<template>
   <div class="planet-wrap">
      <div class="planet-main">
         <div class="planet-images">
            <planetImage :planetImage="planet[7].images" />

            <img
               id="planet-geology"
               src="../assets/geology-neptune.png"
               alt="geology"
            />
         </div>

         <PlanetMainText :planetText="planet[7]" />
      </div>
      <PlanetInfo :planetInfo="planet[7]" />
   </div>
</template>

<script>
import PlanetMainText from '@/components/PlanetMainText.vue'
import PlanetInfo from '@/components/PlanetInfo.vue'
import planetImage from '@/components/planetImage.vue'

export default {
   components: {
      PlanetMainText,
      PlanetInfo,
      planetImage,
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
@import 'planet';
</style>
