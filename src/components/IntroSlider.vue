<template>
  <section class="intro intro-creative context-dark">
    <div class="intro-creative-left">
      <!-- Swiper slider-->
      <div class="swiper-double-container" data-swiper-double-container>
        <div class="swiper-container swiper-double-container-image" data-swiper-double-image data-animate='{"class":"fadeIn"}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image: url(images/727_930/youth_1.jpg)"></div>
            <div class="swiper-slide" style="background-image: url(images/727_930/praise.jpg)"></div>
            <div class="swiper-slide" style="background-image: url(images/727_930/youth_2.jpg)"></div>
          </div>
          <div class="swiper-buttons">
            <div class="swiper-button-next mdi-chevron-up"></div>
            <div class="swiper-button-prev mdi-chevron-down"></div>
          </div>
        </div>
        <div class="swiper-container swiper-double-container-content" data-swiper-double-content data-animate='{"class":"fadeInUpBig"}'>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-content">
                <h1>Jungen Menschen mit dem Evangelium erreichen</h1>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-content">
                <h1>Jünger für den Herrn Jesus aufbauen</h1>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-content">
                <h1>die ihm in allen Dingen vollkommenen Gehorsam leisten</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-creative-right" data-animate='{"class":"fadeInRightBig"}'>
      <div class="intro-creative-right-inner">
        <ul class="list list-sm">
          <li class="list-item">
            <h4 class="text-uppercase text-primary"><span class="font-weight-bold">Jugendliche in Jesus &nbsp;</span><span class="font-weight-normal">Unser Hauptziel</span></h4>
          </li>
          <li class="list-item"><a class="link link-inherit big2 font-weight-medium" href="tel:#">+49-15777688025</a></li>
          <li class="list-item"><a class="link link-inherit" href="mailto:info@cmgi-online.de">info@cmgi-online.de</a></li>
          <li class="list-item"><span>Berner Strasse 107, <br>60437 Frankfurt</span></li>
        </ul>
        <ul class="list list-divided">
          <li class="list-item">
            <!-- Blurb link-->
            <div class="blurb blurb-link">
              <div class="blurb-icon fl-bigmug-line-chat51"></div>
              <h4 class="blurb-title"><router-link to="/contact">Kontakt aufnehmen</router-link></h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSlider"
}
</script>

<style scoped>

</style>