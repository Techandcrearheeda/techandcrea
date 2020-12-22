<template>
  <div>
    <PageBanner pageTitle="Développement d'application web" />
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
        title: "Techandcrea | Développement d'application web"
      }
    },
    data() {
      return {
        CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
        ServiceDetailPage:{
          img_url: ['/images/webdev.png','/images/agile.jpg'],
          serviceArea:[
            'Développement logiciel',
            'Techandcrea est votre solution pour développer des interfaces web adaptées à votre image. Doté d\'une équipe complète, nous réalisons tout type de développement, qui va d\'un simple site statique à des sites dynamiques les plus compliqués ! Bien sûr, toute réalisation doit répondre à votre cahier des charges et vos exigences. Par ailleurs, pour mener à bien à tous les projets, nous travaillons en appliquant la méthode agile afin de contrôler, respecter les dates de livraison et surtout d\'améliorer continuellement les produits encours.',
            'Principes et objectifs',
            '',
            'Techandcrea vous accompagne dans toutes les étapes de votre projet et nous ferons de notre mieux pour analyser toutes vos problématiques jusqu’à votre entière satisfaction. Prenez connaissance de notre processus de prise en charge : ',
            'En utilisant des outils tels que le contrôle d\'accès basé sur les rôles avec authentification unique, nous nous assurons que les utilisateurs ont accès à ce dont ils ont besoin de manière efficace. Nous contrôlons l\'accès au code source d\'une manière très similaire. Nous prenons en compte la sécurité et la confidentialité à chaque étape du processus de développement - des applications uniques et autonomes à l\'infrastructure cloud. De plus, nos équipes de support peuvent surveiller votre système après le lancement, en gardant un œil sur tout modèle suspect. Si nous détectons une activité étrange, nous offrons des conseils sur les prochaines étapes pour minimiser tout dommage potentiel.',
            'Que nous soyons confrontés à un défi pour la première fois ou la centième fois, notre équipe propose, valide et met en œuvre les solutions les plus pertinentes pour le projet. De plus, nous gardons un œil vigilant sur la planification de nos capacités. Avec autant de projets en cours d’exécution à la fois, il est essentiel que nous nous assurions de disposer des bonnes personnes dotées des compétences adéquates pour répondre aux besoins de nos clients actuels et futurs.'
          ],
          fa:[
            'La compréhension globale de votre demande',
            'L\'expression de vos besoins et sa traduction en fonctionnalités techniques',
            'Le choix de la solution choisie CMS, framework, thème, module, hébergement',
            'Le recettage, la livraison',
            'Et enfin le service après-vente',
          ],
          widget_title:'Services',
          meipaly_categorie_widget:[
            'Développement de site internet',
            'Dématérialisation de l’entreprise ',
            'Marketing Digital',
            'Service de Soutien',
            'Développement d\'application'
          ],
          meipaly_services_help:[
            'BESOIN D\'AIDE?',
            'Vous préférez parler à un humain plutôt que de remplir un formulaire? appelez le siège social et nous vous mettrons en contact avec un membre de l\'équipe qui pourra vous aider.',
            'Madagascar : +261 32 53 699 31',
            'France     : +33 6 16 05 09 85'
          ]
        }
      }
    }
  }
</script>
