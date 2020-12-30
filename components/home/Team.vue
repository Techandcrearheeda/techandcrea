<template>
  <section class="commonSection team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{TeamContent.sub_title}}</h4>
          <h2 class="sec_title">{{TeamContent.sec_title}}</h2>
          <p class="sec_desc">
           {{TeamContent.sec_desc[0]}}<br>{{TeamContent.sec_desc[1]}}
          </p>
        </div>
      </div>
    </div>
    <div class="team_slider">
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/vanjasoa.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>{{TeamContent.team_social[0]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[1]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[2]}}</span></a>
            </div>
            <a href="#" class="common_btn"><span>{{TeamContent.common_btn}}</span></a>
          </div>
        </div>
        <div class="detail_TM">CallToAction
          <h5>{{TeamContent.detail_TM[0]}}</h5>
          <h6>{{TeamContent.specialities[0]}}</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/rheeda.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>{{TeamContent.team_social[0]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[1]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[2]}}</span></a>
            </div>
            <a href="#" class="common_btn"><span>{{TeamContent.common_btn}}</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>{{TeamContent.detail_TM[1]}}</h5>
          <h6>{{TeamContent.specialities[1]}}</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/2.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>{{TeamContent.team_social[0]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[1]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[2]}}</span></a>
            </div>
            <a href="#" class="common_btn"><span>{{TeamContent.common_btn}}</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>{{TeamContent.detail_TM[2]}}</h5>
          <h6>{{TeamContent.specialities[2]}}</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/irintsoa.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>{{TeamContent.team_social[0]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[1]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[2]}}</span></a>
            </div>
            <a href="#" class="common_btn"><span>{{TeamContent.common_btn}}</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>{{TeamContent.detail_TM[3]}}</h5>
          <h6>{{TeamContent.specialities[3]}}</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/gaelle.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>{{TeamContent.team_social[0]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[1]}}</span></a>
              <a href="#"><span>{{TeamContent.team_social[2]}}</span></a>
            </div>
            <a href="#" class="common_btn"><span>{{TeamContent.common_btn}}</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>{{TeamContent.detail_TM[4]}}</h5>
          <h6>{{TeamContent.specialities[4]}}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Team",
      props:{
        TeamContent:{
          type:Object
        }
      },
      mounted() {
        if ($('.team_slider').length > 0) {
          $('.team_slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '350px',
            responsive: [
              {
                breakpoint: 1600,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 991,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  centerMode: true,
                  centerPadding: '30px',
                  slidesToShow: 1
                }
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>

</style>
