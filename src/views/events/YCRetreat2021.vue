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
        <div class="row row-15 align-items-center">
          <div class="col-md-10">
            <h2 class="text-divider">Hast du daran teilgenommen ? Gib uns bitte dein Feedback ? </h2>
            <p class="font-weight-medium">Teile deine Eindrücke mit uns
              <a href="#" onclick="fby.push(['showForm', '16188']);return false;">Feedback geben</a></p>
          </div>
        </div>
      </div>
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