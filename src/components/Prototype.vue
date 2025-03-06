<template>
  <div>
    <div class="prototype-wrap" v-for="(content, i) in contents" :key="i">
        <h3 :class="{'heading-detail':i==0}">{{content.title.tit}}</h3>
        <p>{{content.title.subtxt}}</p>
        <div class="prototype-img-box">
            <ol class="img-box">
                <li v-for="(img, index) in content.img" :key="index">
                    <strong>{{img.title}}</strong>
                    <div class="bg-iphone">
                        <img :src="`../images/img_phone_statusbar.webp`" alt="phone statusbar" class="img-status" aria-hidden="true">
                        <!-- 화면 삽입 -->
                        <video v-if="isVideo(img.src)" autoplay loop muted playsinline>
                          <source :src="`../images/${img.src}`" type="video/mp4">
                        </video>
                        <img :src="`../images/${img.src}`" :alt="img.title" :style="`max-width:${img.width ? img.width : null}`" v-else>
                        <!-- // -->
                        <img :src="`../images/img_phone_indicator.webp`" alt="phone indicatior" class="img-indicator" aria-hidden="true">
                    </div>
                </li>
            </ol>
        </div>
        <p>{{content.descript}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    contents: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      
    };
  },
  mounted() {

  },
  beforeDestroy() {
  },
  methods: {
    isVideo(src) {
        return src.toLowerCase().endsWith('mp4');
    }
  }
};
</script>
