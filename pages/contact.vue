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
