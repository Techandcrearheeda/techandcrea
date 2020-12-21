<template>
  <section class="service_section_2 commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{ServicesTwoContent.sub_title}}</h4>
          <h2 class="sec_title">{{ServicesTwoContent.sec_title[0]}}<br> {{ServicesTwoContent.sec_title[1]}}</h2>
          <p class="sec_desc">
            {{ServicesTwoContent.sec_desc[0]}}<br> {{ServicesTwoContent.sec_desc[1]}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{ServicesTwoContent.row[0]}}</h3>
            <p>
              {{ServicesTwoContent.row[1]}}
            </p>
            <div class="iconWrap">
              <i class="mei-settings"></i>
            </div>
            <nuxt-link to="/service-dev">{{ServicesTwoContent.linkServiceDetail}}</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{ServicesTwoContent.row[2]}}</h3>
            <p>
              {{ServicesTwoContent.row[3]}}
            </p>
            <div class="iconWrap">
              <i class="mei-pie-chart"></i>
            </div>
            <nuxt-link to="/service-dev-app">{{ServicesTwoContent.linkServiceDetail}}</nuxt-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="icon_box_2 text-center">
            <h3>{{ServicesTwoContent.row[4]}}</h3>
            <p>
              {{ServicesTwoContent.row[5]}}
            </p>
            <div class="iconWrap">
              <i class="mei-transfer"></i>
            </div>
            <nuxt-link to="/service-market">{{ServicesTwoContent.linkServiceDetail}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ServicesTwo",
      props:{
        ServicesTwoContent:{
          type:Object
        }
      }
    }
</script>

<style scoped>

</style>
