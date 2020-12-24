<template>
  <div>
    <PageBanner pageTitle="Services" />
    <ServicesTwo :ServicesTwoContent='ServicesTwoPage' />
    <!-- <Services /> -->
    <WhatWeDoTwo :WhatWeDoTwoContent='WhatWeDoTwoPage'/>
    <!-- <Funfact /> -->
    <!-- <Clients /> -->
  </div>
</template>

<script>
  import PageBanner from "~/components/pages/PageBanner";
  import ServicesTwo from "~/components/home2/ServicesTwo";
  import Services from "~/components/home/Services";
  import WhatWeDoTwo from "~/components/home2/WhatWeDoTwo";
  import Funfact from "~/components/home/Funfact";
  import Clients from "~/components/home/Clients";
  export default {
    components: {
      PageBanner,
      ServicesTwo,
      Services,
      WhatWeDoTwo,
      Funfact,
      Clients,
    },
    data() {
        return {
          ServicesTwoPage:{
            sub_title:'Bienvenue à l\'agence tech and créa',
            sec_title:['NOUS CONCEVONS DES PRODUITS NUMÉRIQUES QUI','AIDE À DÉVELOPPER LES ENTREPRISES.'],
            sec_desc:['Démocratiser les dématérialisations, pour rendre accessibles ','et simplifier les procédures administratives mais aussi pour le respect de l\'environnement.'],
            row:[
              {name:'DESIGN MODERNE',description:'UI/UX design, Design thinking, Personna',linkServiceDetail:'DÉCOUVREZ PLUS',link:'service-dev',icone:'mei-settings'},
              {name:'PRODUITS NUMÉRIQUES',description:'App web, mobile, desktop, Framework Agile',linkServiceDetail:'DÉCOUVREZ PLUS',link:'service-dev-app',icone:'mei-pie-chart'},
              {name:'STRATÉGIE DE MARKETING',description:'Referencement SEO, SEA , campagne Google Ads',linkServiceDetail:'DÉCOUVREZ PLUS',link:'service-market',icone:'mei-transfer'},
              ]
          },
          WhatWeDoTwoPage:{
            sub_title:'CE QUE NOUS FAISONS',
            sec_title:'CRÉONS QUELQUE CHOSE',
            sec_desc:
              [
                'Créer des sites internet, static, dynamique, e-commerce,',
                'n\'a plus de secret pour nous.' 
                ],
            row:[
              {name:'web development',link:'/service-dev',img_src:'/images/home_1/6.jpg'},
              {name:'digital marketing',link:'/service-market',img_src:'/images/home_1/7.jpg'},
              {name:'product branding',link:'/service-dema',img_src:'/images/home_1/8.jpg'},
              ]

          }

        }
    },
    head(){
      return {
        title: "Techandcrea | Services"
      }
    }
  }
</script>
