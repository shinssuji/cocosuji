<template>
  <section>
    <section class="detail-main">
      <h1>{{work.title}}</h1>
      <p>{{work.do}}</p>
    </section>
    <section class="detail-info">
      <p>{{work.performance}}</p>
      <ul>
        <li v-for="(data, i) in work.info" :key="i">
          <span>{{data.tit}}</span>
          <span>{{data.text}}</span>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    work: {
      Type: Array
    }
    // scrollH: {
    //   Type: Number
    // }
  },
  data() {
    return {
      // works
    }
  },
  watch: {
    // scrollH: {
    //     deep: true,
    //     handler() {
    //     }
    // }
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>