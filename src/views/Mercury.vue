<template>
   <div class="planet-wrap">
      <div class="planet-main">
         <div class="planet-images">
            <planetImage :planetImage="planet[0].images" />

            <transition appear name="fade">
               <img
                  id="planet-geology"
                  src="../assets/geology-mercury.png"
                  alt="geology"
               />
            </transition>
         </div>

         <PlanetMainText :planetText="planet[0]" />
      </div>
      <PlanetInfo :planetInfo="planet[0]" />
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
