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
          img_url: ['/images/demater.jpg','images/370x344.jpg'],
          serviceArea:[
            'Dématérialisations',
            'La dématérialisation consiste à transformer les données d’un support matériel à un support numérique à partir d’un système d’information. Il ne s’agit pas seulement de numériser un document, la dématérialisation s’intéresse à un processus complet. La dématérialisation ou gestion électronique des documents doit être accompagnée d’un logiciel de gestion de document. Son utilisation au sein d’une entreprise permet le bon échange de l’information,  en effet, la dématérialisation permet d\'économiser du temps, de capitaliser les données, de les cartographier, de les trier, de les traiter, de les analyser, de les conserver.',
            'Comment ça marche',
            'La transformation numérique peut être adoptée par toutes les entreprises de tous les domaines d\’activités confondues.',
            'Avant de se lancer dans un projet de dématérialisation, il est nécessaire de se poser la question de la cible et de la stratégie à mener. Néanmoins, il est évident que l’ensemble du sujet (capture, GED/Case Management, conservation, pilotage et monitoring) doit être abordé dans une analyse globale. Voici quelques avantages de la dématérialisation : ',
            'Prendre la décision pour tout transformer en numérique n’est pas toujours aussi simple, certaines entreprises ont peur de l’espionnage et du vol d’information. Pourtant, les logiciels bien conçus sont bien protégés, d’ailleurs, TechandCréa s’engage aux protections maximales des données de ses clients en mettant en place quelques règles :',
            'Vous l’aurez compris, la dématérialisation constitue un atout pour les entreprises, à elles de sauter le pas et de profiter des avantages de cette transformation digitale.',
            'Le choix de votre fournisseur de solution est primordial pour le succès de votre projet. ',
            'Nous vous accompagnons dans vos réflexions et vous aidons et nous restons à vos côtés durant le développement et après la mise en production de vos projets avec un suivi de qualité.'
          ],
          fa:[
            'Gagner en productivité et réduire le temps de traitement',
            'Réduire les couts de traitement ',
            'Rendre les données accessibles à distance avec une authentification sécurisée',
            'Réduire les risques d’oublis et d’erreurs',
            'Rendre la possibilité de la signature électronique',
            'Respecter l’environnement',
          ],
          fa2:[
            'Hiérarchiser l’accès aux données',
            'Restreindre et sécuriser au maximum l’accès aux données sensibles ',
            'Mettre les logiciels à jour régulièrement ',
            'Horodater et tracer la gestion des données',
            'Utiliser des logiciels de protection',
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
            'Madagascar : +261 32 53 699 31',
            'France: +33 6 16 05 09 85'
          ]
        }
      }
    }
  }
</script>
