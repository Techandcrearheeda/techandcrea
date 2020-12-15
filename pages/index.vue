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
import WhatWeDoVue from '~/components/home/WhatWeDo.vue'
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
          homejson: [],
          sloganPage: {
            title: 'WELCOME TO TECHANDCREA AGENCY',
            subtile_part1: 'SMART WEB',
            subtile_part2: 'DESIGN AGENCY.',
            callToAction: 'DISCOVER MORE'
          },
          ServicePage: {
            sub_title: 'Services we are offering',
            sec_title: ['We design digital products that','help grow businesses.'],
            sec_desc : ['We are committed to providing our customers with exceptional service','while offering our employees the best training.'],
            service:[
                        'Website Development',
                        'Graphic Designin',
                        'Digital Marketing',
                        'SEO & Content Writing',
                        'App Development'
                    ]
          },
          AboutAgencyPage:{
              sub_title:'welcom to smart techandcrea web agency',
              sec_title:'We are the Best Website agency in The World',
              sec_desc :'We are committed to providing our customers with exceptional service while offering our employees the best training.Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry s standard dummy text ever since the 1500s.',
              common_btn:'Learn More'
          },
          WhatWeDoPage:{
              sub_title:['How do we works','don’t miss out our latest updates'],
              sec_title:['Digital Experience','Subscribe us'],
              sec_desc :['We are committed to providing our customers with exceptional service while','offering our employees the best training.'],
              common_btn:'Subscribe now'
          },
          TeamPage:{
              sub_title:'meet the team',
              sec_title:'expert people',
              sec_desc :['We are committed to providing our customers with exceptional service while','offering our employees the best training.'],
              team_social:['Facebook','Twitter','Youtube'],
              detail_TM:['kevin smith','Jessica Brown','Mike Hardson','Rose Ford','John Albert'],
              specialities:['co founder','General Manager','Senior Designer','Marketing manager','Brand Officer'],           
              common_btn:'Learn more'
          },
          CallToActionPage:{
              sec_title:'Let s Get Your Project Started!',
              common_btn:'Contact with us'
          },
        }
      },
      async fetch() {
        this.homejson = await $this.content('home').fetch()
      }
  }
</script>
