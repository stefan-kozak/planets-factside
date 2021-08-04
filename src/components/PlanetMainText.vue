<template>
   <section v-cloak class="main-text">
      <div class="main-text-content">
         <transition appear name="fade">
            <h1>{{ planetText.name }}</h1>
         </transition>

         <transition appear name="fade">
            <p>{{ activeText }}</p>
         </transition>
         <div>
            <p>Source:</p>
            <a target="_blank" :href="planetText.overview.source"
               >Wikipedia
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
               >
                  <path
                     d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"
                  />
               </svg>
            </a>
         </div>
      </div>
      <div class="planet-menu">
         <a
            id="planet-overview-link"
            :class="[
               { active: activeLink === 'overview' },
               activeLink === 'overview' ? planetName : '',
            ]"
            @click.prevent="showPlanetCurrent('overview', planetText.name)"
            href=""
            ><p>01</p>
            <h1>OVERVIEW</h1></a
         >

         <a
            id="planet-internal-link"
            href=""
            :class="[
               { active: activeLink === 'internal' },
               activeLink === 'internal' ? planetName : '',
            ]"
            @click.prevent="showPlanetCurrent('internal', planetText.name)"
            ><p>02</p>
            <h1>INTERNAL STRUCTURE</h1></a
         >

         <a
            id="planet-geology-link"
            :class="[
               { active: activeLink === 'geology' },
               activeLink === 'geology' ? planetName : '',
            ]"
            href=""
            @click.prevent="showPlanetCurrent('geology', planetText.name)"
            ><p>03</p>
            <h1>Surface Geology</h1></a
         >
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         activeLink: 'overview',
         activeText: this.planetText.overview.content,
         planetName: window.location.hash.slice(2),
         isActive: true,
      }
   },
   props: ['planetText'],
   methods: {
      showPlanetCurrent(type, planet) {
         // COMMENT WHAT
         const planetGeology = document.getElementById('planet-geology')
         const planetOverview = document.getElementById('planet-overview')

         function changeImage(structure) {
            planetOverview.classList.add('fade-leave-active', 'fade-leave-to')

            setTimeout(function changeImageSource() {
               planetOverview.src = require('../assets/planet-' +
                  planet.toLowerCase() +
                  structure +
                  '.svg')

               planetOverview.classList.remove('fade-leave-to')
            }, 400)
         }

         if (type === 'overview') {
            changeImage('')

            this.activeLink = 'overview'
            this.activeText = this.planetText.overview.content
         } else {
            planetGeology.style.opacity = 0
         }

         if (type === 'internal') {
            changeImage('-internal')

            this.activeLink = 'internal'
            this.activeText = this.planetText.structure.content
         } else {
            planetGeology.style.opacity = 0
         }

         if (type === 'geology') {
            planetGeology.style.opacity = 1

            this.activeLink = 'geology'
            this.activeText = this.planetText.geology.content
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.main-text {
   width: 30%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin: 0 5%;
   min-height: 33.44rem;

   .main-text-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
   }

   h1 {
      margin: 0;
      font-size: 4rem;
      color: #fff;
      width: min-content;
      font-family: 'Antonio', sans-serif;
   }

   p {
      text-align: justify;
      width: 70%;
      line-height: 1.6rem;
      font-family: 'Spartan', sans-serif;
   }

   a {
      color: darken(#fff, 40%);
      display: flex;
      text-decoration: underline;
      flex-direction: row;
      align-items: center;
      margin-left: 0.5rem;
      font-family: 'Spartan', sans-serif;

      svg {
         margin-left: 0.3rem;
      }
   }

   .planet-menu {
      display: flex;
      flex-direction: column;
      width: 70%;
      align-self: flex-start;
      margin-top: 2%;

      a {
         display: flex;
         flex-direction: row;
         align-items: center;
         width: 100%;
         text-decoration: none;
         margin-bottom: 4%;
         margin-left: 0;
         padding: 0.5rem 0;
         border: 1px solid gray;
         font-family: 'Spartan', sans-serif;
         transition: 0.3s ease;

         &:hover {
            background-color: darken(#fff, 55%);
            border-color: darken(#fff, 55%) !important;
            transition: 0.3s ease;
         }
      }

      p {
         color: darken(#fff, 20%);
         width: 7%;
         padding: 0 1rem;
         margin: 0;
         text-align: center;
         font-weight: bold;
         font-family: 'Spartan', sans-serif;
      }

      h1 {
         font-size: 1em;
         width: max-content;
         text-transform: uppercase;
         font-family: 'Spartan', sans-serif;
      }
   }
}

// *****
// RESPONSIVE
// *****

// MOBILE
@media only screen and (min-width: 320px) {
}

// TABLET
@media only screen and (min-width: 768px) {
   .planet-main {
      flex-direction: column;
   }

   .main-text {
      width: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0px 14%;
      min-height: auto;

      .main-text-content {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;

         p {
            width: 100%;
         }
      }

      .planet-menu {
         align-self: center;
         justify-self: flex-end;
      }
   }
}

// DESKTOP
@media only screen and (min-width: 1440px) {
}
</style>
