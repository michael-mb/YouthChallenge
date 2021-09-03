<template>

  <section class="section-md pb-0">
    <div class="container container-wide">
      <h2 class="text-center" data-animate='{"class":"fadeIn"}'>Unsere Abteilungen</h2>
      <div class="owl-carousel owl-carousel-bordered owl-nav-lg" data-owl="{&quot;nav&quot;:true,&quot;margin&quot;:0}" data-autoplay="false" data-loop="false" data-items="1" data-md-items="2" data-xl-items="3" data-xxl-items="4" data-animate='{"class":"fadeInUpBig"}'>
        <DepartmentElem title="Youth Challenge Readers" description="YouthChallenge Readers ist eine Gruppe von jungen
         Menschen mit einer Leidenschaft für das Lesen und dem Ziel, christliche Literatur in Deutschland zu fördern."
                        image-link="images/423_324/yc_readers.jpg" page-link="/readers"/>
        <DepartmentElem title="Youth Challenge Teens" description="Teeneger bilden, die Christ lieben und Vorbild
         fürihreGeneration sind. Durch diese Teeneger ganze Familie in Christus (in Deutschland) gewinnen."
                        image-link="images/423_324/yc_teens.jpg" page-link="/teens"/>
        <DepartmentElem title="Youth Challenge University" description="Studenten für Jesus gewinnen, sie zu Jünger Jesus ausbilden,
         sodass sie ihre Kenntnisse und Wissen in ihren verschiedenen Bereichen benutzen, um das Evangelium zu verkünden und das Reich Gottes voranzutreiben."
                        image-link="images/423_324/yc_uni.jpg" page-link="/university"/>
        <DepartmentElem title="Youth Challenge Orphan" description="Youth Challenge Orphan & Widows ist eine Gemeinschaft von Menschen,
        die Waisen und Witwen in ihren materiellen Nöten, im Gebet und ähnlichem im Geiste der Liebe unterstützen"
                        image-link="images/423_324/yc_orphans.jpg" page-link="/orphans"/>
      </div>

      <!--div class="owl-carousel owl-carousel-bordered owl-nav-lg" data-owl="{&quot;nav&quot;:true,&quot;margin&quot;:0}" data-autoplay="false" data-loop="false" data-items="1" data-md-items="2" data-xl-items="3" data-xxl-items="4" data-animate='{"class":"fadeInUpBig"}'>
        <DepartmentElem title="Youth Challenge Praise" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_praise.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Magazine" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Dance" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_dance.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Media" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_media.jpg" page-link="#"/>
        <DepartmentElem title="Youth Challenge Sports" description="Make clean water easily accessible for the inhabitants of Africa and India."
                        image-link="images/423_324/yc_sport.jpg" page-link="#"/>
      </div-->
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