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
          <form class="contactFrom" id="contactForm">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" v-model="form.first" name="f_name" id="f_name" placeholder="Prénom">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="text" v-model="form.name" name="l_name" id="l_name" placeholder="Nom de famille">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form required" type="email" v-model="form.email" name="email" id="email" placeholder="Email">
              </div>
              <div class="col-lg-6 col-sm-6">
                <input class="input-form" type="text" name="phone" v-model="form.number" id="phone" placeholder="Numéro de téléphone">
              </div>
              <div class="col-lg-12 col-sm-12">
                <textarea class="input-form required" name="con_message" v-model="form.message" id="con_message" placeholder="Écrire un message"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" v-on:click="send_message" type="submit" id="con_submit"><span>{{ContactContent.common_btn}}</span></button>
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
      },
      data() {
        return {
          form: {
            first:'',
            name:'',
            email:'',
            number: '',
            message:''
          }
        }
      },
      methods: {
        send_message: function() {
          axios.post('https://v1.nocodeapi.com/vanjasoa/google_sheets/HJxMDjmENNubgmzi?tabId=Sheet1', [this.form.first, this.form.name, this.form.email, this.form.number, this.form.message])
            .then(function( response ){
                    // Handle success
                    alert('succes message send')
                }.bind(this));
        }
      }
    }
</script>

<style scoped>

</style>
