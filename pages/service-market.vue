<template>
  <div>
    <PageBanner pageTitle="Marketing digital" />
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
        title: "Techandcrea | Marketing digital"
      }
    },
    data() {
      return {
        CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
        ServiceDetailPage:{
          img_url: ['/images/digi-market-1.jpeg','images/digi-market-2.jpg'],
          serviceArea:[
            'Marketing digital',
            'Le marketing internet fédère un grand nombre de techniques et d\'outils au service d\'une stratégie web. Il est impensable aujourd\'hui exploiter une activité sur la toile avec succès sans de solides compétences dans ce jeune domaine, l\'e-marketing.',
            'planning',
            'strategy',
            'La transformation digitale consiste à repenser totalement sa stratégie internet pour s\'adapter au digital. Il s\'agit d\'une réflexion sur la forme comme le fond, un changement dans la manière d\'appréhender votre communication marketing et les outils utilisés.',
            'Vous pouvez même jouer avec et les mixer entre elles. C’est par exemple ce que nous faisons lorsque nous réalisons notre panorama de concurrence SEO. Celui-ci utilise s’appuie sur plusieurs méthodes que nous avons associées entre elles et qui nous permet aujourd’hui d’obtenir des résultats rapides et très concrets et acquisition et conversion.',
            'Mettre en place une stratégie digitale représente un coût pour les entreprises. Vous devez donc établir un budget, car celui-ci déterminera au moins en partie les moyens que vous utiliserez pour atteindre vos objectifs.'
          ],
          fa:[
            'Définissez vos clients cibles.',
            'Identifiez vos objectifs et les outils.',
            'Analysez vos médias existants.',
            'Analysez vos médias gagnés.',
            'Auditez vos médias payants.',
          ],
           fa2:[
          
          ],
          widget_title:'Services',
          meipaly_categorie_widget:[
             'Développement web',
            'Dématérialisation de l’entreprise ',
            'Marketing Digital',
            'Service de Soutien',
            'Développement d\'application'
          ],
          meipaly_services_help:[
            'BESOIN D\'AIDE?',
            'Vous préférez parler à un humain plutôt que de remplir un formulaire? appelez le siège social et nous vous mettrons en contact avec un membre de l\'équipe qui pourra vous aider.',
             'France     : +33 6 16 05 09 85',
            'Madagascar : +261 32 53 699 31'
          ]
        }
      }
    }
  }
</script>
