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
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      this.$router.go()
    }
  },
  mounted() {
    let header = document.getElementById("headerId")
    header.classList.remove("hidden")
  }
}
</script>
