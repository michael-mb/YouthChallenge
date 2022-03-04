<template>
  <section class="section page-title bg-image context-dark" style="background-image: url(images/destiny-camp.jpg);background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0% 100%;">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-xl-8">
          <h2 class="page-title-text" style="color: orange">Youth Challenge Destiny Camp III 🔥 <br>
          15. - 17. April 2022</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="section-md bg-transparent">
    <div class="container">
      <div class="row row-25 row-xl-55 justify-content-between flex-md-row-reverse align-items-center">
        <div class="col-sm-6 col-lg-4 text-lg-right">
          <div class="image-block image-block-left"><img src="images/1920_496/yc_readers.jpg" alt="" width="321" height="333"/>
            <div class="image-block-embed">
              <div class="image-block-amount">5.Mose 28:13</div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-7">
          <h2 class="text-decorated text-decorated-large">Ein neuer Tag! Ein neuer Segen! </h2>
          <p class="font-weight-medium">
            Das verspricht dir Youth Challenge International beim Destiny Camp 3 vom 15. bis 17. April 2022.<br>
            Vier Herausforderungen haben wir daher eigens für dich vorbereitet: Es soll dein Sprungbrett für ein erfülltes Leben, voller Exzellenz sein.
            Hunderte von Challengers in Europa bereiten sich seit Monaten darauf vor und haben sich für dieses Event verabredet, um diesen Schritt gemeinsam mit dir zu gehen!
            Bist du bereit für großartige und lebensverändernde Überraschungen und Begegnungen?
            <br>
            Komm vorbei und überzeuge dich selbst!
            <br>
            Bad Homburg v. d. Höhe. Here we come!

            Wichtige Termine:</p><br>
          <ul>
            <li>➡ Freitag, 15/04/2022 - ab 14 Uhr </li>
            <li>➡ Samstag, 16/04/2022</li>
            <li>➡ Sonntag, 17/04/2022 - bis 14 Uhr</li>
          </ul>
        </div>
      </div>
    </div>
    <section class="section-md bg-transparent">
      <div class="container">
        <div class="row row-15 align-items-center">
          <div class="col-md-10">
            <h2 class="text-divider">Willst du teilnehmen ?</h2>
            <p class="font-weight-medium">Registriere dich auf dieser Plattform, damit wir uns besser organisieren können, um dich zu empfangen.</p>

            <div id="guestoo-registerForm"></div>
            <iframe border="0" src="https://app.guestoo.de/public/event/245de366-c541-4dcd-8efe-ac90898c383e/frame?hideCookieinfo=true&lang=de&scrollId=guestoo-registerForm"
                    id="guestooFrame" style="border: none;background-color: #fff;width: 100%;height: 700px;">
            </iframe>

          </div>
        </div>
      </div>
    </section>
  </section>

  <Footer/>
</template>
<script>
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default {
  name: "YCRetreat2021",
  components: {Footer, Header}
}
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
</style>