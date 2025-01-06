<template>
  <section id="wrap">
    <section id="container">
      <transition name="routing-fade" appear>
        <router-view :work="work" :darkMode="darkMode" />
      </transition>
    </section>
  </section>
</template>
<script>
import { workContent } from '@/data/workData.js';
export default {
  components: {
    // CustomCursor
  },
  data() {
    return {
      workContent,
      name: this.$router.currentRoute.name,
      work: '',
      darkMode: ''
    }
  },
  watch: {
    $route() {
      
    }
  },
  created() {},
  mounted() {
    this.workHandle();
  },
  destroyed() {
    
  },
  methods: {
    workHandle() {
      this.work = workContent[this.name];
      this.darkMode = this.work.dark;
    }
  }
};
</script>