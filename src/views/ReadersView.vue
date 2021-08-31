<template>
    <section class="section page-title bg-image context-dark" style="background-image: url(images/1920_496/yc_readers.jpg);">
      <Header/>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-xl-8">
            <h2 class="page-title-text">Single Cause</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- About us-->
    <section class="section-md bg-transparent">
      <div class="container">
        <div class="row row-25 row-xl-55 justify-content-between flex-md-row-reverse align-items-center">
          <div class="col-sm-6 col-lg-4 text-lg-right">
            <div class="image-block image-block-left"><img src="images/1920_496/yc_readers.jpg" alt="" width="321" height="333"/>
              <div class="image-block-embed">
                <div class="image-block-amount">$100k</div>
                <div class="image-block-title small text-uppercase">already raised</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-7">
            <h2 class="text-decorated text-decorated-large">Affordable Health Care for Children and Adults</h2>
            <p class="font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
            <p class="font-weight-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- About us 2-->
    <section class="section-double">
      <section class="section-double-top section-md bg-100">
        <div class="container">
          <div class="row row-5 align-items-center">
            <div class="col-md-6 col-lg-8">
              <h2>Main Challenges</h2>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="text-primary text-divider text-divider-wide text-small">Problems</div>
            </div>
          </div>
          <div class="row row-30 row-offset-md">
            <div class="col-md-4">
              <!-- Blurb hover-->
              <div class="blurb blurb-icon-left blurb-icon-left-width-1">
                <div class="blurb-header">
                  <div class="blurb-icon fl-bigmug-line-up104"></div>
                  <div class="blurb-title h4">Healthcare Programs Require Insurance</div>
                </div>
                <div class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
              </div>
            </div>
            <div class="col-md-4">
              <!-- Blurb hover-->
              <div class="blurb blurb-icon-left blurb-icon-left-width-1">
                <div class="blurb-header">
                  <div class="blurb-icon fl-bigmug-line-two317"></div>
                  <div class="blurb-title h4">The Latest Medical Equipment</div>
                </div>
                <div class="blurb-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</div>
              </div>
            </div>
            <div class="col-md-4">
              <!-- Blurb hover-->
              <div class="blurb blurb-icon-left blurb-icon-left-width-1">
                <div class="blurb-header">
                  <div class="blurb-icon fl-bigmug-line-like51"></div>
                  <div class="blurb-title h4">Increasing the  Healthcare Level</div>
                </div>
                <div class="blurb-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-double-bottom section-md bg-transparent">
        <div class="container">
          <div class="row row-30">
            <div class="col-sm-4"><img class="img-single" src="images/single-cause-02-371x290.jpg" alt="" width="371" height="290"/>
            </div>
            <div class="col-sm-4"><img class="img-single" src="images/single-cause-03-371x290.jpg" alt="" width="371" height="290"/>
            </div>
            <div class="col-sm-4"><img class="img-single" src="images/single-cause-04-371x290.jpg" alt="" width="371" height="290"/>
            </div>
          </div>
        </div>
      </section>
      <!-- Counter icon-->
      <section class="section-md bg-transparent">
        <div class="container">
          <div class="row row-15 align-items-center">
            <div class="col-md-5">
              <h2 class="text-divider">Results of Our Work</h2>
            </div>
            <div class="col-md-7">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
          </div>
          <div class="row row-30 row-offset-lg">
            <div class="col-6 col-md-3">
              <!-- Counter-->
              <div class="counter counter-bordered">
                <div class="counter-value"><span data-counter="">500</span><span class="counter-icon fl-bigmug-line-two317"></span>
                </div>
                <div class="counter-title">Volunteers</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <!-- Counter-->
              <div class="counter counter-bordered">
                <div class="counter-value"><span data-counter="">87</span><span class="counter-icon fl-bigmug-line-two317"></span>
                </div>
                <div class="counter-title">Programs</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <!-- Counter-->
              <div class="counter counter-bordered">
                <div class="counter-value"><span data-counter="">25</span><span class="counter-unit">k</span><span class="counter-icon fl-bigmug-line-two317"></span>
                </div>
                <div class="counter-title">Children</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <!-- Counter-->
              <div class="counter counter-bordered">
                <div class="counter-value"><span data-counter="">4</span><span class="counter-icon fl-bigmug-line-two317"></span>
                </div>
                <div class="counter-title">Offices</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <Footer/>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "ReadersView",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>