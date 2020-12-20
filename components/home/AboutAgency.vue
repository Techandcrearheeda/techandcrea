<template>
  <section class="commonSection ab_agency">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6 PR_79">
          <h4 class="sub_title">{{AboutAgencyContent.sub_title}}</h4>
          <h2 class="sec_title MB_45">{{AboutAgencyContent.sec_title}}</h2>
          <p class="sec_desc">
            {{AboutAgencyContent.sec_desc}}
          </p>
          <a class="common_btn red_bg" href="#"><span>{{AboutAgencyContent.common_btn}}</span></a>
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6">
          <div class="ab_img1">
            <img src="/images/home_1/2.jpg" alt=""/>
          </div>
          <div class="ab_img2">
            <img src="/images/home_1/1.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "AboutAgency",
      props:{
        AboutAgencyContent:{
          type: Object
        }
      },
    }
</script>

<style scoped>

</style>
