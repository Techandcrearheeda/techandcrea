<template>
  <div>
    <PageBanner pageTitle="Développement d'application " />
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
        title: "Techandcrea | Développement d'application"
      }
    },
    data() {
      return {
        CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
        ServiceDetailPage:{
          img_url: ['/images/app-dev-1.jpg','images/app-dev-2.jpeg'],
          serviceArea:[
            'Développement d\'application',
            'L\'application mobile permet d\'enrichir sa présence online, puisqu\'elle permet d\'être référencé sur les plateformes d\'applications telles que Play store ou App store. Avoir une application fait gagner en visibilité, et améliore l\'image de marque.',
            'Objectifs',
            'strategy',
            'Avoir une application, fait de votre entreprise, de votre marque ou de votre syndicat un acteur moderne et proche de son consommateur. Le lancement d’une application mobile fait davantage parler de vous que le lancement d’un nouveau site.',
            'Il est important d\'avoir une application mobile afin de pouvoir donner une image favorable à sa marque et à sa communication. Un utilisateur cherche d\'abord une marque dans l\'App store / Google Play. Par conséquent, vous perdez des utilisateurs si vous n\'êtes pas présent sur ces plateformes',
            'L’expérience utilisateur est constituée de tous les points qui font la qualité de l’expérience sur l’application.'
          ],
          fa:[
            'Améliorer l’offre de service au client',
            'Améliorer les processus de traitement des demandes clients',
            'Développer une stratégie d’évitement de contacts',
            'Amplifier l’intensité relationnelle avec le client.',
            'Détendre les consommateurs',
          ],
          widget_title:'Services',
          meipaly_categorie_widget:[
            'Développement web',
            'Dématérialisation de l’entreprise ',
            'Digital Marketing',
            'Service de Soutien',
            'Développement d\'application'
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
