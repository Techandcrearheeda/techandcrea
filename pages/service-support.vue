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
          img_url: ['/images/support.png','images/SAV.jpg'],
          serviceArea:[
            'Support',
            'Priorité à l\'interaction avec les clients. Ainsi, un bon service après-vente doit toujours répondre aux questions des clients. Avec une bonne écoute, ces derniers se sentiront considérés. Quel que soit le canal utilisé, mail, tchat, téléphone ou en magasin physique, le client doit se sentir important et priorisé.',
            'planning',
            'strategy',
            'Le service après-vente désigne un ensemble de service ayant pour objectif d\'assurer la mise en marche, la maintenance et la réparation si besoin, d\'un bien ou d\'un service qui a été vendu par une entreprise.',
            'Son sens de l\'écoute, sa disponibilité, sa réactivité et son engagement doivent lui permettre d\'apporter des réponses personnalisées aux questions et aux problématiques de la clientèle.',
            'Une gestion du SAV optimale garantit une bonne image pour l\'entreprise et permet de fidéliser les clients. La satisfaction des clients grâce à un service après-vente de qualité constitue un moyen efficace pour poursuivre la relation commerciale avec eux.'
          ],
          fa:[
            'Répondre aux clients (interaction avec les clients)',
            'La réactivité (réduire au maximum le temps de réponse.)',
            'Des interlocuteurs professionnels',
            'Focus sur la qualité de service',
            ' Offrir des cadeaux',
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
