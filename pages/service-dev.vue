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
          serviceArea:[
            'Développement logiciel agile ',
            'Le développement logiciel agile permet aux équipes de livrer rapidement, de collaborer souvent et d\'améliorer continuellement leur produit. Nous adoptons une approche légèrement modifiée de la méthodologie Agile qui maximise ces avantages tout en utilisant un modèle offshore hybride.',
            'planning',
            '',
            'En tirant parti des méthodologies de développement Agile, des outils de conception centrés sur l\'humain et des meilleures pratiques en matière de sécurité et de gestion des risques, nous aidons les organisations à répondre à leurs besoins de manière fiable et efficace.',
            'En utilisant des outils tels que le contrôle d\'accès basé sur les rôles avec authentification unique, nous nous assurons que les utilisateurs ont accès à ce dont ils ont besoin de manière efficace. Nous contrôlons l\'accès au code source d\'une manière très similaire. Nous prenons en compte la sécurité et la confidentialité à chaque étape du processus de développement - des applications uniques et autonomes à l\'infrastructure cloud. De plus, nos équipes de support peuvent surveiller votre système après le lancement, en gardant un œil sur tout modèle suspect. Si nous détectons une activité étrange, nous offrons des conseils sur les prochaines étapes pour minimiser tout dommage potentiel.',
            'Que nous soyons confrontés à un défi pour la première fois ou la centième fois, notre équipe propose, valide et met en œuvre les solutions les plus pertinentes pour le projet. De plus, nous gardons un œil vigilant sur la planification de nos capacités. Avec autant de projets en cours d’exécution à la fois, il est essentiel que nous nous assurions de disposer des bonnes personnes dotées des compétences adéquates pour répondre aux besoins de nos clients actuels et futurs.'
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
            'Graphic Designing',
            'Digital Marketing',
            'SEO',
            'Content Writting',
            'App Development'
          ],
          meipaly_services_help:[
            'BESOIN D\'AIDE Techandcrea?',
            'Vous préférez parler à un humain plutôt que de remplir un formulaire? appelez le siège social et nous vous mettrons en contact avec un membre de l\'équipe qui pourra vous aider.',
            '666 888 000'
          ]
        }
      }
    }
  }
</script>
