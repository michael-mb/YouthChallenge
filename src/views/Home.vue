<template>
    <Header></Header>

    <IntroSlider/>

    <VisionSection/>

    <DepartementSection/>

    <QuoteSection/>

    <Footer></Footer>
</template>

<script>


import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteSection from "../components/QuoteSection";
import DepartementSection from "../components/department/DepartementSection";
import VisionSection from "../components/department/VisionSection";
import IntroSlider from "../components/IntroSlider";
export default {
  name: 'Home',
  components: {
    IntroSlider,
    VisionSection,
    DepartementSection,
    QuoteSection,
    Footer,
    Header
  },
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
  }
}
</script>
