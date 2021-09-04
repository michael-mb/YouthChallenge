<template>
  <section class="section page-title bg-image context-dark" style="background-image: url(images/1920_496/contact.jpg);">
    <!--RD Navbar-->
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-xl-8">
          <h2 class="page-title-text">Kontact</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="section-md bg-100">
    <div class="container">
      <div class="row row-30 row-xl-55 justify-content-between align-items-center">
        <div class="col-sm-4 col-md-4">
          <div class="blurb blurb-info">
            <div class="blurb-header">
              <div class="blurb-icon linearicons-map2"></div>
              <div class="blurb-title h4">Addresse</div>
            </div>
            <div class="blurb-embed">
              <h6>Berner Strasse 107, <br>60437 Frankfurt</h6>
            </div>
          </div>
        </div>

        <div class="col-sm-4 col-md-4">
          <!-- Blurb info-->
          <div class="blurb blurb-info text-dark">
            <div class="blurb-header">
              <div class="blurb-icon linearicons-smartphone"></div>
              <div class="blurb-title h4">Handy</div>
            </div>
            <div class="blurb-embed"><a class="link link-inherit big2 font-weight-medium" href="tel:#">+49-15777688025</a>
            </div>
          </div>
        </div>

        <div class="col-sm-4 col-md-4">
          <!-- Blurb info-->
          <div class="blurb blurb-info">
            <div class="blurb-header">
              <div class="blurb-icon linearicons-envelope-open"></div>
              <div class="blurb-title h4">E-Mail</div>
            </div>
            <div class="blurb-embed">
              <h6><a href="mailto:#">info@cmgi-online.de</a></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>

</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "ContactView",
  components: {Footer, Header},
  beforeCreate() {
    if (window.localStorage.getItem('reloaded')) {
      window.localStorage.removeItem('reloaded');
    } else {
      window.localStorage.setItem('reloaded', '1');
      this.$router.go()
    }
  },
  mounted() {
    let header = document.getElementById("headerId")
    header.classList.remove("hidden")
  },
}
</script>

<style scoped>

</style>