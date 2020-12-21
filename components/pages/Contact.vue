<template>
  <section class="commonSection ContactPage">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{ContactContent.sub_title}}</h4>
          <h2 class="sec_title">{{ContactContent.sec_title}}</h2>
          <p class="sec_desc">
            {{ContactContent.sec_desc[0]}}<br> {{ContactContent.sec_desc[1]}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-sm-12 col-md-10 col-md-offset-1">
          <form action="#" method="post" class="contactFrom" id="contactForm">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" name="f_name" id="f_name" placeholder="Prénom">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" name="l_name" id="l_name" placeholder="Nom de famille">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="email" name="email" id="email" placeholder="Email">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form" type="text" name="phone" id="phone" placeholder="Numéro de téléphone">
              </div>
              <div class="col-lg-12 col-sm-12">
                <textarea class="input-form required" name="con_message" id="con_message" placeholder="Écrire un message"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" type="submit" id="con_submit"><span>{{ContactContent.common_btn}}</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Contact",
      props:{
        ContactContent:{
          type:Object
        }
      }
    }
</script>

<style scoped>

</style>
