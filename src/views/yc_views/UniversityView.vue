<template>
  <section class="section page-title bg-image context-dark" style="background-image: url(images/423_324/yc_uni.jpg);">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-xl-8">
          <h2 class="page-title-text">Youth Challlenge University</h2>
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
              <div class="image-block-amount">100000</div>
              <div class="image-block-title small text-uppercase">Studenten in 2065</div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-7">
          <h2 class="text-decorated text-decorated-large">Vision</h2>
          <p class="font-weight-medium">Studenten ( 100000)  für Jesus gewinnen, sie zu Jünger Jesus ausbilden, sodass
            sie ihre Kenntnisse und Wissen in ihren verschiedenen Bereichen benutzen, um das Evangelium zu verkünden und
            das Reich Gottes voranzutreiben. 10000 Ingenieure, 1000 Ärzte, 1000 Schriftsteller, 1000 Doktoren bis zum Jahr 2065
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-double">
    <section class="section-double-top section-md bg-100">
      <div class="container">
        <div class="row row-5 align-items-center">
          <div class="col-md-6 col-lg-8">
            <h2>Unsere Methoden</h2>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="text-primary text-divider text-divider-wide text-small">Vision</div>
          </div>
        </div>
        <div class="row row-30 row-offset-md">
          <div class="col-md-4">
            <!-- Blurb hover-->
            <div class="blurb blurb-icon-left blurb-icon-left-width-1">
              <div class="blurb-header">
                <div class="blurb-icon fl-bigmug-line-up104"></div>
                <div class="blurb-title h4">Evangelisation</div>
              </div>
              <div class="blurb-text">Evangelisation durch akademische Leistungen.</div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Blurb hover-->
            <div class="blurb blurb-icon-left blurb-icon-left-width-1">
              <div class="blurb-header">
                <div class="blurb-icon fl-bigmug-line-two317"></div>
                <div class="blurb-title h4">Förderung der akademische Bestleistung</div>
              </div>
              <div class="blurb-text">Junge Menschen zu ermutigen, ihr Bestes zu geben, um akademische Leistungen zu erbringen </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Blurb hover-->
            <div class="blurb blurb-icon-left blurb-icon-left-width-1">
              <div class="blurb-header">
                <div class="blurb-icon fl-bigmug-line-like51"></div>
                <div class="blurb-title h4">Nachhilfe - Ratschläge - Tipps</div>
              </div>
              <div class="blurb-text">Betreuung von Studenten durch Nachhilfe/ Ratschläge/ Tipps zum Erfolg im Studium und
                dafür sorgen, dass Studenten das akademische und das christliche Leben miteinander vereinbaren können.</div>
            </div>
          </div>
        </div>

        <div class="row row-30 row-offset-md">
          <div class="col-md-4">
            <!-- Blurb hover-->
            <div class="blurb blurb-icon-left blurb-icon-left-width-1">
              <div class="blurb-header">
                <div class="blurb-icon fl-bigmug-line-up104"></div>
                <div class="blurb-title h4">Zufluchtsort</div>
              </div>
              <div class="blurb-text">Ein Zufluchtsort für Studenten anbieten.</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="section-md bg-transparent">
      <div class="container">
        <div class="row row-15 align-items-center">
          <div class="col-md-5">
            <h2 class="text-divider">Ziele für dieses Jahr</h2>
          </div>
          <div class="col-md-7">
            <p>Für das Jahr 2021 haben wir die folgende Ziele:</p>
          </div>
        </div>
        <div class="row row-30 row-offset-lg">
          <div class="col-6 col-md-5">
            <!-- Counter-->
            <div class="counter counter-bordered">
              <div class="counter-value"><span data-counter="">12</span><span class="counter-icon fl-bigmug-line-two317"></span>
              </div>
              <div class="counter-title">Diskussionsrunden bis Ende des Jahres</div>
            </div>
          </div>
          <div class="col-6 col-md-5">
            <!-- Counter-->
            <div class="counter counter-bordered">
              <div class="counter-value">Betreuung<span class="counter-icon fl-bigmug-line-two317"></span>
              </div>
              <div class="counter-title">Dafür sorgen, dass Studenten das akademische und das christliche Leben miteinander vereinbaren können</div>
            </div>
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
  name: "UniversityView",
  components: {Header, Footer},
  beforeCreate() {
    if(sessionStorage.getItem('reloaded')) {
      sessionStorage.removeItem('reloaded');
    } else {
      sessionStorage.setItem('reloaded', '1');
      location.reload();
    }
  },
  mounted() {
    let header = document.getElementById("headerId")
    header.classList.remove("hidden")
  }
}
</script>

<style scoped>

</style>