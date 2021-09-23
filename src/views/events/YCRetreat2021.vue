<template>
  <section class="section-xs service-section service-section-fullwidth bg-image context-dark text-center" style="background-image: url(images/bg-coming-soon-01-1920x930.jpg)">
    <div class="service-section-header">
      <div class="container">
        <!-- Logo-->
        <div class="logo"><router-link class="logo-link" to="/"><img class="logo-image-default" src="images/yc_logo_trans.png" alt="FundMe" width="117" height="50"/><img class="logo-image-inverse" src="images/yc_logo_trans.png" alt="FundMe" width="117" height="50"/></router-link></div>
      </div>
    </div>
    <div class="service-section-body">
      <div class="container">
        <div class="row row-30 row-xl-55 justify-content-center">
          <div class="col-md-10 col-lg-8">
            <h2>Coming Soon</h2>
            <p class="font-weight-medium">Our website is under construction, we are working very hard to give you the best experience on our website. Subscribe to us to be notified of our launch.</p>
            <!-- Countdown-->
            <div class="countdown justify-content-center" data-countdown='{"to":"2022-12-31"}'>
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
          <!--div class="col-md-10 col-lg-6">
            <form class="form-inline rd-mailform rd-form group-15 justify-content-center px-xl-4" data-form-output="form-coming-soon" data-form-type="subscribe" method="post" action="components/rd-mailform/rd-mailform.php">
              <div class="form-inline-group">
                <input class="form-control" type="email" name="email" placeholder="Your E-mail*" data-constraints="@Email @Required">
              </div>
              <button class="btn">Subscribe</button>
            </form>
            <div class="form-output snackbar snackbar-primary" id="form-coming-soon"></div>
          </div-->
        </div>
      </div>
    </div>
    <div class="service-section-footer">
      <div class="container">
        <!-- Copyright-->
        <p class="rights"><span>&copy; 2020&nbsp;</span><span>FundMe</span><span>. All rights reserved.&nbsp;</span><a class="link link-inherit rights-link" href="privacy-policy.html">Privacy Policy</a></p>
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

</style>