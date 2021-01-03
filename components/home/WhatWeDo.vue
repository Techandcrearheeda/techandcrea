<template>
  <section class="commonSection what_wedo">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{WhatWeDoContent.sub_title[0]}}</h4>
          <h2 class="sec_title">{{WhatWeDoContent.sec_title[0]}}</h2>
          <p class="sec_desc">
            {{WhatWeDoContent.sec_desc[0]}}<br>{{WhatWeDoContent.sec_desc[1]}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="videoWrap">
            <img src="/images/home_1/3.jpg" alt="">
            <div class="play_video">
              <!--a class="video_popup" href="https://www.youtube.com/watch?v=XpM1fvHx8zg"><i class="fa fa-play"></i></a-->
              <!--h2>Watch Video</h2-->
              <iframe width="1170" height="550"
                  src="https://www.youtube.com/embed/XpM1fvHx8zg?autoplay=1&mute=1">
                  </iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-5 col-md-4">
          <h4 class="sub_title">{{WhatWeDoContent.sub_title[1]}}</h4>
          <h2 class="sec_title">{{WhatWeDoContent.sec_title[1]}}</h2>
        </div>
        <div class="col-lg-8 col-sm-7 col-md-8">
          <form action="" method="post" class="subscribefrom">
            <input type="email" placeholder="Entrer votre email" name="email">
            <button class="common_btn red_bg" type="submit" name="submit"><span>{{WhatWeDoContent.common_btn}}</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "WhatWeDo",
      props:{
        WhatWeDoContent:{
          type:Object
        }
      },
      mounted() {
        $('.video_popup').magnificPopup({
          type: 'iframe'
        });
      }
    }
</script>

<style scoped>

</style>
