<template>

  <section class="section-md pb-0">
    <div class="container container-wide">
      <h2 class="text-center" data-animate='{"class":"fadeIn"}'>Unsere Abteilungen</h2>
      <div class="owl-carousel owl-carousel-bordered owl-nav-lg" data-owl="{&quot;nav&quot;:true,&quot;margin&quot;:0}" data-autoplay="false" data-loop="false" data-items="1" data-md-items="2" data-xl-items="3" data-xxl-items="4" data-animate='{"class":"fadeInUpBig"}'>
        <DepartmentElem title="Youth Challenge University" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_uni.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Praise" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_praise.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Magazine" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Readers" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_readers.jpg" page-link="#"/>
      </div>

      <div class="owl-carousel owl-carousel-bordered owl-nav-lg" data-owl="{&quot;nav&quot;:true,&quot;margin&quot;:0}" data-autoplay="false" data-loop="false" data-items="1" data-md-items="2" data-xl-items="3" data-xxl-items="4" data-animate='{"class":"fadeInUpBig"}'>
        <DepartmentElem title="Youth Challenge Dance" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_dance.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Media" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_media.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Sports" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_sport.jpg" page-link="#"/>
      </div>
    </div>
  </section>
</template>

<script>
import DepartmentElem from "./DepartmentElem";
export default {
  name: "DepartementSection",
  components: {DepartmentElem}
}
</script>

<style scoped>

</style>