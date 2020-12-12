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
            sub_title:'welcome to smart meipaly web agency',
            sec_title:['We design digital products that','help grow businesses.'],
            sec_desc:['We are committed to providing our customers with exceptional service','while offering our employees the best training.'],
            row:[
              'Modern Design',
              'Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.',
              'Digital products',
              'Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.',
              'Marketing Strategy',
              'Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.'
              ],
            linkServiceDetail:'Descover more'
          },
          WhatWeDoTwoPage:{
            sub_title:'what we do',
            sec_title:'Let’s create something',
            sec_desc:
              [
                'We are committed to providing our customers with exceptional service while',
                'offering our employees the best training.' 
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
