<template>
  <section class="commonSection service_detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="serviceArea">
            <img :src="ServiceDetailContent.img_url[0]" alt="">
            <h2>{{ServiceDetailContent.serviceArea[0]}}</h2>
            <p>
              {{ServiceDetailContent.serviceArea[1]}}
            </p>
            <div class="row gaping">
              <div class="col-lg-6 col-sm-12 col-md-6">
                <img :src="ServiceDetailContent.img_url[1]" alt="">
              </div>
              <div class="col-lg-6 col-sm-12 col-md-6">
                <h3>{{ServiceDetailContent.serviceArea[2]}}</h3>
                <p>{{ServiceDetailContent.serviceArea[3]}} &amp; {{ServiceDetailContent.serviceArea[4]}}</p>
                <ul>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[0]}}</li>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[1]}}</li>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[2]}}</li>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[3]}}</li>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[4]}}</li>
                  <li><i class="fa fa-check-square"></i>{{ServiceDetailContent.fa[5]}}</li>
                </ul>
              </div>
            </div>
            <p>
              {{ServiceDetailContent.serviceArea[5]}}
            </p>
           
            <ul class="row">
                  <li class="col-sm-12">{{ServiceDetailContent.fa2[0]}}</li>
                  <li  class="col-sm-12">{{ServiceDetailContent.fa2[1]}}</li>
                  <li class="col-sm-12">{{ServiceDetailContent.fa2[2]}}</li>
                  <li class="col-sm-12">{{ServiceDetailContent.fa2[3]}}</li>
                  <li class="col-sm-12">{{ServiceDetailContent.fa2[4]}}</li>
            </ul>
             <p>
              {{ServiceDetailContent.serviceArea[6]}}
            </p>
            <p>
              {{ServiceDetailContent.serviceArea[7]}}
            </p>
            <p>
              {{ServiceDetailContent.serviceArea[8]}}
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 sidebar">
          <aside class="widget categories">
            <h3 class="widget_title">{{ServiceDetailContent.widget_title}}</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li><a href="/service-dev">{{ServiceDetailContent.meipaly_categorie_widget[0]}}</a></li>
                <li><a href="/service-dema">{{ServiceDetailContent.meipaly_categorie_widget[1]}}</a></li>
                <li><a href="/service-market">{{ServiceDetailContent.meipaly_categorie_widget[2]}}</a></li>
                <li><a href="/service-support">{{ServiceDetailContent.meipaly_categorie_widget[3]}}</a></li>
                <li><a href="/service-dev-app">{{ServiceDetailContent.meipaly_categorie_widget[4]}}</a></li>
                <!-- <li><a href="#">{{ServiceDetailContent.meipaly_categorie_widget[3]}} &amp; {{ServiceDetailContent.meipaly_categorie_widget[4]}}</a></li>
                <li><a href="#">{{ServiceDetailContent.meipaly_categorie_widget[5]}}</a></li> -->
              </ul>
            </div>
          </aside>
          <aside class="widget categories">
            <div class="meipaly_services_help">
              <h2>{{ServiceDetailContent.meipaly_services_help[0]}}</h2>
              <p>{{ServiceDetailContent.meipaly_services_help[1]}}</p>
              <h4>{{ServiceDetailContent.meipaly_services_help[2]}}</h4>
               <h4>{{ServiceDetailContent.meipaly_services_help[3]}}</h4>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import serviceDetailVue from '~/pages/service-detail.vue'
    export default {
      name: "ServiceDetail",
      props:{
        ServiceDetailContent:{
          type:Object
        }
      }
      
    }
</script>

<style scoped>

</style>
