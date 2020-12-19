<template>
  <section class="service_section commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title red_color">{{ ServiceContent.sub_title }}</h4>
          <h2 class="sec_title white">{{ServiceContent.sec_title[0]}}<br>{{ServiceContent.sec_title[1]}}</h2>
          <p class="sec_desc color_aaa">
            {{ServiceContent.sec_desc[0]}}<br>{{ServiceContent.sec_desc[1]}}
          </p>
        </div>
      </div>
      <div class="row custom_column">
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-dev" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-web-design"></i>
                <h3>{{ServiceContent.service[0]}}</h3>
              </div>
              <div class="back">
                <i class="mei-web-design"></i>
                <h3>{{ServiceContent.service[0]}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-dema" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-computer-graphic"></i>
                <h3>{{ServiceContent.service[1]}}</h3>
              </div>
              <div class="back">
                <i class="mei-computer-graphic"></i>
                <h3>{{ServiceContent.service[1]}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-market" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development-1"></i>
                <h3>{{ServiceContent.service[2]}}</h3>
              </div>
              <div class="back">
                <i class="mei-development-1"></i>
                <h3>{{ServiceContent.service[2]}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-support" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development"></i>
                <h3>{{ServiceContent.service[3]}}</h3>
              </div>
              <div class="back">
                <i class="mei-development"></i>
                <h3>{{ServiceContent.service[3]}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="service-dev-app" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-app-development"></i>
                <h3>{{ServiceContent.service[4]}}</h3>
              </div>
              <div class="back">
                <i class="mei-app-development"></i>
                <h3>{{ServiceContent.service[4]}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Services",
      props:{
        ServiceContent:{
          type: Object
        }
      }
    }
</script>

<style scoped>

</style>
