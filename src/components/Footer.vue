<template>
  <!-- Footer extended-->
  <footer class="footer-extended context-dark bg-900">
    <div class="container">
      <div class="row row-30">
        <div class="col-md-6">
          <!-- Logo-->
          <div class="logo footer-logo"><router-link class="logo-link" to="/"><img class="logo-image-default" src="images/yc_logo_trans.png" alt="FundMe" width="117" height="50"/><img class="logo-image-inverse" src="images/yc_logo_trans.png" alt="FundMe" width="117" height="50"/></router-link></div>
          <p>Youthchallenge ist eine Bewegung von jungen Christen mit einer Leidenschaft für Gott und dem Ziel, Deutschland mit dem Evangelium zu erobern</p>
          <a class="btn btn-primary" href="#">Mehr Erfahren</a>
        </div>

        <div class="col-md-6">
          <h4 class="footer-title">Quick Links</h4>
          <div class="row row-10 row-content">
            <div class="col-6 col-md-12 col-lg-6">
              <ul class="list list-sm">
                <li class="list-item"><a class="link link-inherit" href="about-us.html">Über uns</a></li>
                <li class="list-item"><router-link class="link link-inherit" to="/contact">Kontakt</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="divider footer-divider footer-divider-1"></div>
      <div class="row row-10">
        <div class="col-lg-6">
          <dl class="term-list term-list-inline">
            <dt>Office:</dt>
            <dd class="h6">Berner Strasse 107, 60437 Frankfurt </dd>
          </dl>
        </div>
        <div class="col-lg-6">
          <div class="group-10 group-x-50 d-flex flex-wrap">
            <div>
              <dl class="term-list term-list-inline">
                <dt>Tel: </dt>
                <dd><a class="link link-contrast" href="tel:#">+49-15777688025</a></dd>
              </dl>
            </div>
            <div>
              <dl class="term-list term-list-inline">
                <dt>E-mail: </dt>
                <dd><a class="link link-inherit" href="mailto:info@cmgi-online.de">info@cmgi-online.de</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="divider footer-divider"></div>
      <div class="row row-15">
        <div class="col-sm-8 col-lg-6">
          <div class="group-10 group-x-xl-40 d-flex align-items-center flex-wrap">
            <!-- Copyright-->
            <p class="rights"><span>&copy; 2021.&nbsp;</span><span>YouthChallenge</span><span>. All rights reserved.&nbsp;</span></p>
            <div>
              <div class="group-10 group-lg-30"><a class="icon icon-md icon-link mdi-whatsapp" href="https://chat.whatsapp.com/Cw3UUZDoYL24nhnsXN4YeP"></a><a class="icon icon-md icon-link mdi-instagram" href="https://www.instagram.com/youthchallenge_int/"></a></div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-lg-6 text-sm-right"><a class="link link-inherit" href="privacy-policy.html">Privacy Policy</a></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>