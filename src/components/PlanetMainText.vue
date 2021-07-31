<template>
   <section class="main-text">
      <h1>{{ planetText.name }}</h1>
      <p>{{ planetText.overview.content }}</p>
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

      <div class="planet-menu">
         <a
            id="planet-overview-link"
            class="active"
            @click.prevent="planetOverview()"
            href=""
            ><p>01</p>
            <h1>OVERVIEW</h1></a
         >

         <a id="planet-internal-link" href="" @click.prevent="planetInternal()"
            ><p>02</p>
            <h1>INTERNAL STRUCTURE</h1></a
         >

         <a id="planet-geology-link" href="" @click.prevent="planetGeology()"
            ><p>03</p>
            <h1>Surface Geology</h1></a
         >
      </div>
   </section>
</template>

<script>
export default {
   props: ['planetText'],
   methods: {
      planetOverview() {
         // => DECLARING IMAGE FOR CHANGE
         let planetOverview = document.getElementById('planet-overview')

         // => DECLARING LINKS
         let planetInternalLink = document.getElementById(
            'planet-internal-link'
         )
         let planetOverviewLink = document.getElementById(
            'planet-overview-link'
         )
         let planetGeologyLink = document.getElementById('planet-geology-link')

         // => CHANGE IMAGE
         planetOverview.src = require('@/assets/' +
            this.planetText.images.planet)

         // => LINKS REMOVE ACTIVE CLASS
         planetInternalLink.classList.remove('active')
         planetGeologyLink.classList.remove('active')

         // => ADDING ACTIVE CLASS
         planetOverviewLink.classList.add('active')
      },

      planetInternal() {
         // => DECLARING IMAGE FOR CHANGE
         let planetOverview = document.getElementById('planet-overview')

         // => DECLARING LINKS
         let planetInternalLink = document.getElementById(
            'planet-internal-link'
         )
         let planetOverviewLink = document.getElementById(
            'planet-overview-link'
         )
         let planetGeologyLink = document.getElementById('planet-geology-link')

         // => CHANGE IMAGE
         planetOverview.src = require('@/assets/' +
            this.planetText.images.internal)

         // => LINKS REMOVE ACTIVE CLASS
         planetOverviewLink.classList.remove('active')
         planetGeologyLink.classList.remove('active')

         // => ADDING ACTIVE CLASS
         planetInternalLink.classList.add('active')
      },

      planetGeology() {
         // => GEOLOGY IMAGE
         let planetGeology = document.getElementById('planet-geology')

         // => LINKS
         let planetInternalLink = document.getElementById(
            'planet-internal-link'
         )
         let planetOverviewLink = document.getElementById(
            'planet-overview-link'
         )
         let planetGeologyLink = document.getElementById('planet-geology-link')

         // => LINKS REMOVE ACTIVE CLASS
         planetOverviewLink.classList.remove('active')
         planetInternalLink.classList.remove('active')

         // => ADDING ACTIVE CLASS
         planetGeologyLink.classList.add('active')

         // => PLANET GEOLOGY ACTIVE
         planetGeology.style.display = 'block'
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

   div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
   }

   h1 {
      margin: 0;
      font-size: 5em;
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

         &.active {
            background-color: #419ebb;
            border-color: #419ebb;
         }

         &:hover {
            background-color: #419ebb;
            border-color: #419ebb;
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
</style>
