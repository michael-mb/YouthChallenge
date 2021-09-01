<template>
  <!--RD Navbar-->
  <header class="section rd-navbar-wrap rd-navbar-wrap-absolute">
    <nav class="rd-navbar rd-navbar-creative">
      <div class="navbar-container">
        <div class="navbar-row navbar-row-left">
          <div class="navbar-cell">
            <div class="navbar-panel">
              <button class="navbar-switch linearicons-menu" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
              <!-- Logo-->
              <div class="logo"><a class="logo-link" href="/"><img class="logo-image-default" src="images/yc_logo_trans.png" alt="FundMe" width="50" height="50"/><img class="logo-image-inverse" src="images/yc_logo_trans.png" alt="FundMe" width="70" height="50"/></a></div>
            </div>
          </div>
          <div class="navbar-cell align-items-center">
            <button class="navbar-button navbar-switch-menu linearicons-menu" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-navigation-active","isolate":"[data-multi-switch]"}'></button>
          </div>
          <div class="navbar-cell">
            <ul class="navbar-navigation rd-navbar-nav">
              <li class="navbar-navigation-root-item"><a class="navbar-navigation-root-link" href="our-causes.html">Abteilungen</a>
                <ul class="navbar-navigation-dropdown rd-navbar-dropdown">
                  <li class="navbar-navigation-back">
                    <button class="navbar-navigation-back-btn">Back</button>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">Media</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">Praises</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">Magazine</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="/teens">Teens</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="/readers">Readers</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="/orphans">Orphans & Widows</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">Dance</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">University</a>
                  </li>
                  <li class="navbar-navigation-dropdown-item"><a class="navbar-navigation-dropdown-link" href="single-cause.html">YouthChallenge</a>
                  </li>
                </ul>
              </li>
              <li class="navbar-navigation-root-item"><a class="navbar-navigation-root-link" href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>
          <div class="navbar-cell navbar-spacer"></div>
        </div>
        <div class="navbar-row navbar-row-right">
          <div class="navbar-cell">
            <div class="navbar-subpanel">
              <div class="navbar-subpanel-item">
                <button class="navbar-button navbar-social-button mdi-dots-vertical" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-social-active","isolate":"[data-multi-switch]"}'></button>
                <div class="navbar-aside navbar-social d-flex align-items-center"><a class="navbar-social-text" href="#">
                  Folge uns</a>
                  <a class="navbar-social-icon icon icon-link mdi-instagram" href="https://www.instagram.com/youthchallenge_int/" target="_blank"></a>
                  <a class="navbar-social-icon icon icon-link mdi-whatsapp" href="https://chat.whatsapp.com/Cw3UUZDoYL24nhnsXN4YeP" target="_blank"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>