<template>
  <div>
    <PageBanner pageTitle="Contact" />
    <Contact :ContactContent='ContactPage'/>
    <Map />
    <!-- <ClientsTwo /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import Contact from "~/components/pages/Contact";
  import Map from "~/components/home2/Map";
  import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    // transition: "intro",
    components: {
      Contact,
      PageBanner,
      Map,
      ClientsTwo,
    },
    head(){
      return {
        title: "Techandcrea | Contact"
      }
    },
    data() {
        return {
          ContactPage:{
              sub_title: 'CONTACTEZ-NOUS',
              sec_title: 'écrivez-nous un message',
              sec_desc :['La raison d\'être d\'une entreprise est de créer et de garder un client '],
              common_btn:'Envoyer le message'
          },
      }
    }
  }
 
</script>

// <style lang="scss">
// $t-duration: 800ms;
// $t-delay: 300ms;

// .intro-enter-active,
// .intro-leave-active {
//   transition-duration: $t-duration * 2;

//   &::before,
//   &::after {
//     content: "";
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 2;
//     display: block;
//     width: 100%;
//     height: 50%;
//     transition-property: opacity, transform;
//     transition-timing-function: ease-in-out;
//   }

//   &::before {
//     background-color: #2e2e2e;
//   }

//   &::after {
//     top: 50%;
//     background-color: #2e2e2e;
//   }
// }

// .intro-leave {
//   &::before,
//   &::after {
//     transform: scaleX(0);
//   }
// }

// .intro-leave-active {
//   &::before {
//     transition-duration: $t-duration;
//   }

//   &::after {
//     transition-duration: $t-duration - $t-delay;
//     transition-delay: $t-delay;
//   }
// }

// .intro-leave-to {
//   &::before,
//   &::after {
//     transform: scale(1);
//     transform-origin: left;
//   }
// }

// .intro-enter {
//   &::before,
//   &::after {
//     transform: scaleX(1);
//   }
// }

// .intro-enter-active {
//   &::before {
//     transition-duration: $t-duration;
//   }

//   &::after {
//     transition-duration: $t-duration - $t-delay;
//     transition-delay: $t-delay;
//   }
// }

// .intro-enter-to {
//   &::before,
//   &::after {
//     transform: scaleX(0);
//     transform-origin: right;
//   }
// }
// </style>
