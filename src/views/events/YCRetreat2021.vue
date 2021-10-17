<template>
  <section class="section-xs service-section service-section-fullwidth bg-image context-dark text-center" style="background-image: url(images/destiny-camp.jpg)">
    <div class="overlay">
      <div class="service-section-header">
        <div class="container">
          <!-- Logo-->
          <div class="logo"><router-link class="logo-link" to="/"><img class="logo-image-default" src="images/yc_logo_trans.png" alt="FundMe" width="300" height="150"/><img class="logo-image-inverse" src="images/yc_logo_trans.png" alt="FundMe" width="300" height="150"/></router-link></div>
        </div>
      </div>
      <div class="service-section-body">
        <div class="container">
          <div class="row row-30 row-xl-55 justify-content-center">
            <div class="col-md-10 col-lg-8">
              <h1>Coming Soon</h1>
              <p class="font-weight-medium">In wenigen Tagen findet unsere Auszeit statt, also verpassen Sie nicht die Gelegenheit, daran teilzunehmen.</p>
              <!-- Countdown-->

              <div class="countdown justify-content-center" data-countdown='{"to":"2022-04-15"}'>
                <div class="countdown-block countdown-block-days">
                  <svg class="countdown-circle" x="0" y="0" width="120" height="120" viewbox="0 0 120 120" data-progress-days="">
                    <circle class="countdown-circle-bg" cx="60" cy="60" r="58"></circle>
                    <circle class="countdown-circle-fg clipped" cx="60" cy="60" r="58"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-days="">00</div>
                    <div class="countdown-title">days</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-hours">
                  <svg class="countdown-circle" x="0" y="0" width="120" height="120" viewbox="0 0 120 120" data-progress-hours="">
                    <circle class="countdown-circle-bg" cx="60" cy="60" r="58"></circle>
                    <circle class="countdown-circle-fg clipped" cx="60" cy="60" r="58"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-hours="">00</div>
                    <div class="countdown-title">hours</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-minutes">
                  <svg class="countdown-circle" x="0" y="0" width="120" height="120" viewbox="0 0 120 120" data-progress-minutes="">
                    <circle class="countdown-circle-bg" cx="60" cy="60" r="58"></circle>
                    <circle class="countdown-circle-fg clipped" cx="60" cy="60" r="58"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-minutes="">00</div>
                    <div class="countdown-title">minutes</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-seconds">
                  <svg class="countdown-circle" x="0" y="0" width="120" height="120" viewbox="0 0 120 120" data-progress-seconds="">
                    <circle class="countdown-circle-bg" cx="60" cy="60" r="58"></circle>
                    <circle class="countdown-circle-fg clipped" cx="60" cy="60" r="58"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-seconds="">00</div>
                    <div class="countdown-title">seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-section-footer">
        <div class="container">
          <!-- Copyright-->
          <p class="rights"><span>&copy; 2021&nbsp;</span><span>Youth-challenge</span><span>. All rights reserved.&nbsp;</span><a class="link link-inherit rights-link" href="privacy-policy.html">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "YCRetreat2021",
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