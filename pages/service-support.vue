<template>
  <div>
    <PageBanner pageTitle="Support" />
    <ServiceDetail :ServiceDetailContent='ServiceDetailPage' />
    <CallToAction :CallToActionContent='CallToActionPage' />
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServiceDetail from "~/components/pages/ServiceDetail";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      ServiceDetail,
      CallToAction,

    },
    
    head(){
      return {
        title: "Techandcrea | support"
      }
    },
    data() {
      return {
        CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
        ServiceDetailPage:{
          serviceArea:[
            'Support',
            'Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            'planning',
            'strategy',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
          ],
          fa:[
            'Research beyond the business plan',
            'Marketing options and rates',
            'The ability to turnaround consulting',
            'Help companies into more profitable',
            'Customer engagement matters',
          ],
          widget_title:'Services',
          meipaly_categorie_widget:[
            'Website Development',
            'Dématérialisation de l’entreprise ',
            'Digital Marketing',
            'Service de Soutien',
            'App Development'
          ],
          meipaly_services_help:[
            'BESOIN D\'AIDE Techandcrea?',
            'Vous préférez parler à un humain plutôt que de remplir un formulaire? appelez le siège social et nous vous mettrons en contact avec un membre de l\'équipe qui pourra vous aider.',
            '+261 32 53 699 31'
          ]
        }
      }
    }
  }
</script>
