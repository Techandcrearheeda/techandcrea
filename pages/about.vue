<template>
  <div>
    <PageBanner pageTitle="About Us" />
    <AboutAgency :AboutAgencyContent='AboutAgencyPage' />
    <!-- <TestimonialTwo /> -->
    <Team :TeamContent='TeamPage'/>
    <!-- <OurWork /> -->
    <WhyChooseUs :WhyChooseUsContent='WhyChooseUsPage'/>
    <CallToAction :CallToActionContent='CallToActionPage' />
  </div>
</template>
<script>
  import PageBanner from "~/components/pages/PageBanner";
  import AboutAgency from "~/components/home/AboutAgency";
  import TestimonialTwo from "~/components/home2/TestimonialTwo";
  import Team from "~/components/home/Team";
  import OurWork from "~/components/pages/OurWork";
  import WhyChooseUs from "~/components/home2/WhyChooseUs";
  import CallToAction from "~/components/home/CallToAction";
  export default {
    components: {
      PageBanner,
      AboutAgency,
      TestimonialTwo,
      Team,
      OurWork,
      WhyChooseUs,
      CallToAction
    },
    head(){
      return {
        title: "Techandcrea | About Us"
      }
    },
    data(){
      return {
        TeamPage:{
              sub_title:'meet the team',
              sec_title:'expert people',
              sec_desc :['We are committed to providing our customers with exceptional service while','offering our employees the best training.'],
              team_social:['Facebook','Twitter','Youtube'],
              detail_TM:['kevin smith','Jessica Brown','Mike Hardson','Rose Ford','John Albert'],
              specialities:['co founder','General Manager','Senior Designer','Marketing manager','Brand Officer'],           
              common_btn:'Learn more'
          },
          AboutAgencyPage:{
              sub_title:'welcom to smart techandcrea web agency',
              sec_title:'We are the Best Website agency in The World',
              sec_desc :'We are committed to providing our customers with exceptional service while offering our employees the best training.Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry s standard dummy text ever since the 1500s.',
              common_btn:'Learn More'
          },
          CallToActionPage:{
              sec_title:'Let s Get Your Project Started!',
              common_btn:'Contact with us'
          },
          WhyChooseUsPage:{
            sub_title:'our benefits',
            sec_title:'why choose us',
            sec_desc:'We are committed to providing our customers with exceptional service while<br> offering our employees the best training.',
            chooseUs_title:[
              'Latest technology',
              'awesome support',
              '1 click demo install'
            ],
            wh_choose:
              [
                'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                'Self-contained, state-of-the-art time clock',
                'Scalability of up to 500 employees per time clock',
                'The ability to connect up to 32 time clocks',
                'Employee self-enrollment',
                'Payroll integration',
                'Built-in backup camera to verify failed '
              ],
              
              wh_choose1:
              [
                'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                'Self-contained, state-of-the-art time clock',
                'Scalability of up to 500 employees per time clock',
                'The ability to connect up to 32 time clocks',
                'Employee self-enrollment',
                'Payroll integration',
                'Built-in backup camera to verify failed '
              ],
              wh_choose2:
              [
                'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                'Self-contained, state-of-the-art time clock',
                'Scalability of up to 500 employees per time clock',
                'The ability to connect up to 32 time clocks',
                'Employee self-enrollment',
                'Payroll integration',
                'Built-in backup camera to verify failed '
              ]    
          }
      }
    }
  }
</script>
