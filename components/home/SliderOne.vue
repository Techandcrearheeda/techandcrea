<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel owl-carousel owl-theme">
      <div class="item slider-one__slider-1" style="background-image: url(/images/slider/4457.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">{{ slogan.title}}</p>
          <div class="slider-one__title tp-caption tp-resizeme">{{ slogan.subtile_part1 }} <br> {{ slogan.subtile_part2 }}</div>
          <nuxt-link to="/about" class="common_btn"><span>{{ slogan.callToAction }}</span></nuxt-link>
          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      <div class="item slider-one__slider-2" style="background-image: url(/images/slider/5469.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">{{ slogan.title }}</p>
          <div class="slider-one__title tp-caption tp-resizeme">{{ slogan.subtile_part1 }} <br> {{ slogan.subtile_part2 }}</div>
          <nuxt-link to="/about" class="common_btn"><span>{{ slogan.callToAction }}</span></nuxt-link>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
    </div>
  </section>
    <!-- /.slider-one__carousel -->
</template>

<script>
    export default {
      name: "SliderOne",
      props:{
        slogan: {
          type: Object
        }
      },
      mounted() {
        // Slider
        if ($(".slider-one__carousel").length) {
          var slideOneWrap = $(".slider-one");
          var slideOneCarousel = $(".slider-one__carousel").owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: true,
            nav: false,
            animateOut: "slideOutDown",
            animateIn: "fadeIn",
            active: true,
            smartSpeed: 1000,
            autoplay: 7000
          });
          slideOneWrap.find(".slide-one__left-btn").on("click", function (e) {
            slideOneCarousel.trigger("next.owl.carousel");
            e.preventDefault();
          });
          slideOneWrap.find(".slide-one__right-btn").on("click", function (e) {
            slideOneCarousel.trigger("prev.owl.carousel");
            e.preventDefault();
          });
        }
      }
    }
</script>

<style scoped>

</style>
