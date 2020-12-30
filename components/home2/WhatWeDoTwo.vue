<template>
  <section class="commonSection what_wedo_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{WhatWeDoTwoContent.sub_title}}</h4>
          <h2 class="sec_title">{{WhatWeDoTwoContent.sec_title}}</h2>
          <p class="sec_desc">
            {{WhatWeDoTwoContent.sec_desc[0]}}<br> {{WhatWeDoTwoContent.sec_desc[1]}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4" v-for="content in WhatWeDoTwoContent.row" :key="content.id">
          <div class="single_wedo">
            <img :src="content.img_src" alt=""/>
            <div class="overlay_wedo">
              <nuxt-link :to="content.link">{{content.name}}</nuxt-link>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="single_wedo">
            <img src="/images/home_1/7.jpg" alt=""/>
            <div class="overlay_wedo">
              <a href="/service-market">{{WhatWeDoTwoContent.row[1]}}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="single_wedo">
            <img src="/images/home_1/8.jpg" alt=""/>
            <div class="overlay_wedo">
              <a href="/service-dema">{{WhatWeDoTwoContent.row[2]}}</a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "WhatWeDoTwo",
      props:{
        WhatWeDoTwoContent:{
          type:Object
        }
      }
    }
</script>

<style scoped>

</style>
