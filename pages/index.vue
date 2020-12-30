<template>
  <div>
    <SliderOne :slogan ='sloganPage' />
    <Services :ServiceContent='ServicePage' />
    <AboutAgency :AboutAgencyContent='AboutAgencyPage' />
    <WhatWeDo :WhatWeDoContent ='WhatWeDoPage' />
    <!-- <Portfolio /> -->
    <!-- <Funfact /> -->
    <Team :TeamContent='TeamPage'/>
    <!-- <Clients /> -->
    <!-- <Testimonial /> -->
    <!-- <BlogHome /> -->
    <CallToAction :CallToActionContent='CallToActionPage' />
  </div>
</template>

<script>
// import WhatWeDoVue from '~/components/home/WhatWeDo.vue'
  // import SliderOne from "~/components/home/SliderOne";
  // import Services from "~/components/home/Services";
  // import AboutAgency from "~/components/home/AboutAgency";
  // import WhatWeDo from "~/components/home/WhatWeDo";
  // import Portfolio from "~/components/home/Portfolio";
  // import Funfact from "~/components/home/Funfact";
  // import Team from "~/components/home/Team";
  // import Clients from "~/components/home/Clients";
  // import Testimonial from "~/components/home/Testimonial";
  // import BlogHome from "~/components/home/BlogHome";
  // import CallToAction from "~/components/home/CallToAction";
  // export default {
  //   components: {
  //     SliderOne,
  //     Services,
  //     AboutAgency,
  //     WhatWeDo,
  //     Portfolio,
  //     Funfact,
  //     Team,
  //     Clients,
  //     Testimonial,
  //     BlogHome,
  //     CallToAction,
  //   }
  // }

  export default {
    data() {
        return {
          sloganPage: {
            title: 'BIENVENUE À L\'AGENCE TECH AND CREA',
            subtile_part1: 'Transformation digitale',
            subtile_part2: 'Solution numérique',
            callToAction: 'DÉCOUVRIR PLUS'
          },
          ServicePage: {
            sub_title: 'SERVICES QUE NOUS OFFRONS',
            sec_title: ['Une équipe à votre écoute ','et attentive à votre demande'],
            sec_desc : ['Nous nous engageons à fournir à nos clients un service exceptionnel ','tout en offrant à nos employés la meilleure formation.'],
            service:[
                        'Développement web',
                        'Dématérialisation de l’entreprise ',
                        'Digital Marketing',
                        'Service de Soutien',
                        'Développement d\'application'
                    ]
          },
          AboutAgencyPage:{
              sub_title:'Bienvenue à l\'agence tech and créa',
              sec_title:'Nous visons la qualité',
              sec_desc :'L\'amour du développement, l\'envie forte d\'etre présent sur le marché, nous a conduit à créer Tech and Créa. Bien que notre société soit assez jeune, nous n\'avons pas peur d\'aller de l\'avant et de nous mettre en concurrence avec les grandes entreprises de développement, car nous pensons que nous avons tous les atouts pour se faire une place dans le monde du numérique',
              common_btn:'Pour en savoir plus'
          },
          WhatWeDoPage:{
              sub_title:['COMMENT TRAVAILLONS-NOUS','NE MANQUEZ PAS NOS DERNIÈRES MISES À JOUR'],
              sec_title:['EXPÉRIENCE NUMÉRIQUE','INSCRIVEZ-NOUS'],
              sec_desc :['Tous ceux qui travaillent sur votre projet sont pleinement investis dans sa réussite. Nous nous soucions autant de l\'apparence et des performances de votre logiciel que du problème qu\'il résout. Nous travaillons, apprenons et célébrons ensemble, mesurant le succès par la durée de nos partenariats à long terme.'],
              common_btn:'S\'abonner maintenant'
          },
          TeamPage:{
              sub_title:'RENCONTRER L\'ÉQUIPE',
              sec_title:'et leurs compétences',
              sec_desc :['Nous nous engageons à fournir à nos clients un service exceptionnel tout ',' en offrant à nos employés la meilleure formation.'],
              team_social:['Facebook','Twitter','Youtube'],
               detail_TM:['Vanjasoa Andriarinoro','Rheeda Laingoniaina','Fenohasina Rasoavarison','Ainjatovo Irintsoa','Gaelle Tiavina Rajaona'],
                   specialities:['Directeur Général / Développeur','Founder / Marketing Manager','Développeur','Commerciale','Avant vente'],   
             common_btn:'Learn more'
          },
          CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          }
        }
    }
  }
</script>
