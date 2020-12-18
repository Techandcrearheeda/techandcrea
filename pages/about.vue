<template>
  <div>
    <PageBanner pageTitle="À PROPOS" />
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
        title: "Techandcrea | À PROPOS"
      }
    },
    data(){
      return {
        TeamPage:{
              sub_title:'RENCONTRER L\'ÉQUIPE',
              sec_title:'expert people',
              sec_desc :['Nous nous engageons à fournir à nos clients un service exceptionnel tout en','offrant à nos employés la meilleure formation.'],
              team_social:['Facebook','Twitter','Youtube'],
              detail_TM:['kevin smith','Jessica Brown','Mike Hardson','Rose Ford','John Albert'],
              specialities:['co founder','General Manager','Senior Designer','Marketing manager','Brand Officer'],           
              common_btn:'Learn more'
          },
          AboutAgencyPage:{
              sub_title:'Bienvenue à l\'agence tech and créa',
              sec_title:'Solution numérique qui s\'adapte selon vos besoins',
              sec_desc :'L\'amour du développement, l\'envie forte d\'etre présent sur le marché, nous a conduit à créer Tech and Créa. Bien que notre société soit assez jeune, nous n\'avons pas peur d\'aller de l\'avant et de nous mettre en concurrence avec les grandes entreprises de développement, car nous pensons que nous avons tous les atouts pour se faire une place dans le monde du numérique.',
              common_btn:'Learn More'
          },
          CallToActionPage:{
              sec_title:'COMMENCONS VOTRE PROJET!',
              common_btn:'Contactez-nous'
          },
          WhyChooseUsPage:{
            sub_title:'NOS AVANTAGES',
            sec_title:'POURQUOI NOUS CHOISIR',
            sec_desc:'Aider les entreprises à développer leurs identités visuelles car dans le monde d\'aujourd\'hui: il est important de soigner son image.',
            chooseUs_title:[
              'Conception centrée sur l\'humain ',
              'Service de Soutien',
              'Livraison sécurisée'
            ],
            wh_choose:
              [
                'Pour chaque écran que nous concevons et construisons, la personne qui interagit avec cet écran est une priorité. Quels sont leurs besoins? Plus important encore, quels sont les comportements qui motivent ces besoins? En adoptant une approche de conception centrée sur l\'humain, nous sommes en mesure de mieux répondre et d\'anticiper les attentes des utilisateurs lorsqu\'ils interagissent avec votre entreprise et vos produits.',
                'Self-contained, state-of-the-art time clock',
                'Scalability of up to 500 employees per time clock',
                'The ability to connect up to 32 time clocks',
                'Employee self-enrollment',
                'Payroll integration',
                'Built-in backup camera to verify failed '
              ],
              
              wh_choose1:
              [
                'Le logiciel d’aujourd’hui n’est jamais vraiment terminé. Quelle que soit la solidité de votre logiciel, les bogues sont inévitables, tout comme les versions de correctifs et les mises à jour de nouvelles fonctionnalités. Un support post-livraison approprié garantit que votre logiciel reste sécurisé, maintenu et amélioré bien après son lancement.',
                'Self-contained, state-of-the-art time clock',
                'Scalability of up to 500 employees per time clock',
                'The ability to connect up to 32 time clocks',
                'Employee self-enrollment',
                'Payroll integration',
                'Built-in backup camera to verify failed '
              ],
              wh_choose2:
              [
                'Des protocoles de sécurité efficaces doivent trouver un équilibre entre la protection des données et des informations tout en créant un processus transparent pour les utilisateurs qui impose le moins de friction possible. Plus un processus de sécurité est fastidieux, plus quelqu\'un est susceptible de laisser un mot de passe ou un code clé important sur un post-it à son bureau. Cette simple erreur de jugement expose tout un système à un risque de violation.',
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
