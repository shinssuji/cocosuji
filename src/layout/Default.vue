<template>
  <section id="wrap">
    <!-- <h1 class="blind">신수지 퍼블리셔 포트폴리오</h1> -->
    <Header />
    <section id="container">
      <router-view />
    </section>
    <Footer />
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>