<template>
  <section class="commonSection chooseUs">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{WhyChooseUsContent.sub_title}}</h4>
          <h2 class="sec_title">{{WhyChooseUsContent.sec_title}}</h2>
          <p class="sec_desc">
            {{WhyChooseUsContent.sec_desc}}
          </p>
        </div>
      </div>
      <div id="tabs">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <ul class="chooseUs_title">
              <li><a href="#tes_tab_1" data-toggle="tab">{{WhyChooseUsContent.chooseUs_title[0]}}</a></li>
              <li class="active"><a href="#tes_tab_2" data-toggle="tab">{{WhyChooseUsContent.chooseUs_title[1]}}</a></li>
              <li><a href="#tes_tab_3" data-toggle="tab">{{WhyChooseUsContent.chooseUs_title[2]}}</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="tab-content clearfix">
            <div class="tab-pane fade" id="tes_tab_1">
              <div class="col-lg-7 col-sm-7 col-md-7">
                <div class="wh_choose">
                  <p>
                    {{WhyChooseUsContent.wh_choose[0]}}
                  </p>
                  <ul>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[1]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[2]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[3]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[4]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[5]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose[6]}}</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-5 col-sm-5 col-md-5">
                <div class="chose_img">
                  <img src="/images/home_1/c1.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div class="tab-pane fade in active" id="tes_tab_2">
              <div class="col-lg-5 col-sm-5 col-md-5">
                <div class="chose_img">
                  <img src="/images/home_1/c2.jpg" alt=""/>
                </div>
              </div>
              <div class="col-lg-7 col-sm-7 col-md-7">
                <div class="wh_choose">
                  <p>
                   {{WhyChooseUsContent.wh_choose1[0]}}
                  </p>
                  <ul>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[1]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[2]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[3]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[4]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[5]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose1[6]}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tes_tab_3">
              <div class="col-lg-7 col-sm-7 col-md-7">
                <div class="wh_choose">
                  <p>
               {{WhyChooseUsContent.wh_choose2[0]}}
                  </p>
                  <ul>
                   <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[1]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[2]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[3]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[4]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[5]}}</li>
                    <li><i class="fa fa-check-square"></i>{{WhyChooseUsContent.wh_choose2[6]}}</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-5 col-sm-5 col-md-5">
                <div class="chose_img">
                  <img src="/images/home_1/c3.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "WhyChooseUs",
      props:{
        WhyChooseUsContent:{
          type:Object
        }
      }

    }
</script>

<style scoped>

</style>
