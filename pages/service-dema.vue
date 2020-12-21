<template>
  <div>
    <PageBanner pageTitle="Dématérialisations" />
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
        title: "Techandcrea | dématérialisations"
      }
    },
    data() {
      return {
        CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
        ServiceDetailPage:{
          img_url: ['/images/770x426.png','images/370x344.jpg'],
          serviceArea:[
            'Dématérialisations',
            'La dématérialisation ou numérisation, qui consiste à virtualiser des documents papiers ou « physiques », devient un outil important de productivité dans les entreprises. En effet, la dématérialisation permet d\'économiser du temps, de la ressource humaine et donc de l\'argent.',
            'planning',
            'strategy',
            'Avant de se lancer dans un projet de dématérialisation, il est nécessaire de se poser la question de la cible et de la stratégie à mener. Néanmoins, il est évident que l’ensemble du sujet (capture, GED/Case Management, conservation, pilotage et monitoring) doit être abordé dans une analyse globale.',
            'Vous l’aurez compris, la dématérialisation constitue un atout pour les entreprises, à elles de sauter le pas et de profiter des avantages de cette transformation digitale.',
            'Le choix de votre fournisseur de solution est primordial pour le succès de votre projet : celui-ci doit pouvoir vous guider à chaque étape de votre projet et rester disponible car les interrogations ne manqueront pas de la part des équipes. '
          ],
          fa:[
            'La volumétrie et la typologie des documents',
            'Les activités métiers & Automatiser la capture ',
            'Les entités & Garantir l’authenticité ',
            'Les acteurs internes',
            'Les acteurs externes',
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
