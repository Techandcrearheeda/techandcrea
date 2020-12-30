<template>
  <div>
    <PageBanner pageTitle="Mentions légales" />
    <Mention :MentionContent='MentionPage'/>

    <!-- <ClientsTwo /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import Mention from "~/components/pages/Mention";
  import Map from "~/components/home2/Map";
 import ClientsTwo from "~/components/home2/ClientsTwo";
  export default {
    components: {
      Mention
    },
    head(){
      return {
        title: "Techandcrea | Mentions légales"
      }
    },
    data() {
        return {
          MentionPage:{
              sub_title: 'CONTACTEZ-NOUS',
              sec_title: 'écrivez-nous un message',
              sec_desc :['La raison d\'être d\'une entreprise est de créer et de garder un client '],
              common_btn:'Envoyer le message'
          },
      }
    }
  }
 
</script>
