<template>
   <transition appear name="fade">
      <img
         id="planet-overview"
         :src="require('@/assets/' + planetImage.planet)"
         alt="planet"
      />
   </transition>
</template>

<script>
export default {
   props: ['planetImage'],
}
</script>
