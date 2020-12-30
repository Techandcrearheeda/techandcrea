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
          <form class="contactFrom" id="contactForm" v-on:submit.prevent="send_message">
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
              <div class="col-lg-2 col-sm-2">
                    <select class="form-control">
                      <option>+261</option>
                      <option>+33</option>
                    </select>
              </div>
              <div class="col-lg-4 col-sm-4">
                <input class="input-form col-lg-5 col-sm-5" type="text" name="phone" v-model="form.number" id="phone" placeholder="Numéro de téléphone">
              </div>
              
              <div class="col-lg-12 col-sm-12">
                <textarea class="input-form required" name="con_message" v-model="form.message" id="con_message" placeholder="Écrire un message"></textarea>
              </div>
            </div>
            <button class="common_btn red_bg" type="submit" id="con_submit"><span>{{ContactContent.common_btn}}</span></button>
            <div class="alert alert-success" v-if="stat_message" role="alert"> 
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              Message envoyé
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
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
            message:'',
            date:''
          },
          stat_message: false
        }
      },
      methods: {
        send_message: function(event) {
          const today = new Date();
          const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          const dateTime = date +' '+ time;
          this.form.date = dateTime;
          axios.post('https://api.apispreadsheets.com/data/5522/', {"data": this.form})
            .then(function( response ){
                    // Handle success
                    this.stat_message = true;
                    this.reset_form()
                }.bind(this));
        },
        reset_form: function(){
          this.form = []
        }
      }
    }
</script>
