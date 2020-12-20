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
              'DESIGN MODERNE',
              'UI/UX design, Design thinking, Personna',
              'PRODUITS NUMÉRIQUES',
              'App web, mobile, desktop, Framework Agile',
              'STRATÉGIE DE MARKETING',
              'Referencement SEO, SEA , campagne Google Ads'
              ],
            linkServiceDetail:'DÉCOUVREZ PLUS'
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
              'web development',
              'digital marketing',
              'product branding'
              
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
