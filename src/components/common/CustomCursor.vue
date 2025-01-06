<template>
  <div aria-hidden="true" class="custom-cursor">
    <div class="custom-cursor__circle" :style="circleStyle" ref="customCursorCircle"></div>
    <div class="custom-cursor__dot" :style="dotStyle" ref="customCursorDot"></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  props: {
    targets: {
      type: Array,
      default: () => ['.logo', '.work-list.en', '.work-list.kr', 'button', 'a'] // 기본값 설정
    },
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    circleDarkColor: String,
    circleDarkColorHover: String,
    dotDarkColor: String,
    dotDarkColorHover: String,
    hoverSize: Number,
    darkMode: Boolean
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      // 커서 스타일 초기 세팅
      circleStyle: {
        transform: 'translate(-50%, -50%) scale(1)',
        backgroundColor: this.circleColor || '#000',
      },
      dotStyle: {
        transform: 'translate(-50%, -50%)',
        backgroundColor: this.dotColor || '#000',
      },
      isAnimating: false, // 애니메이션 제어
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("mousemove", this.customCursor);
    });
    
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.customCursor);
  },
  methods: {
    customCursor(e) {
      // cursor 좌표 업데이트
      this.x = e.clientX;
      this.y = e.clientY;

      if (!this.isAnimating) {
        this.isAnimating = true;
        requestAnimationFrame(this.updateCursorPosition);
      }

      // cursor 호버, 셀렉트 타겟
      const isHoverTarget = this.targets.some(target =>
        e.target.matches(target)
      );
      if (isHoverTarget) {
        this.scale = this.hoverSize;
        this.circleStyle.backgroundColor = this.darkMode ? this.circleDarkColorHover : this.circleColorHover;
        this.dotStyle.backgroundColor = this.darkMode ? this.dotDarkColorHover : this.dotColorHover;
      } else {
        this.scale = 1;
        this.circleStyle.backgroundColor = this.darkMode ? this.circleDarkColor : this.circleColor;
        this.dotStyle.backgroundColor = this.darkMode ? this.dotDarkColor : this.dotColor;
      }

      if (!this.isAnimating) {
        this.isAnimating = true;
        requestAnimationFrame(this.updateCursorPosition);
      }
    },
    updateCursorPosition() {
      // cursor 이동
      const circle = this.$refs.customCursorCircle;
      const dot = this.$refs.customCursorDot;

      if (circle) {
        this.circlePosX = this.x - circle.clientWidth / 2;
        this.circlePosY = this.y - circle.clientWidth / 2;

        circle.style.setProperty('--scale', this.scale);
        circle.style.transform = `translate(${this.circlePosX}px, ${this.circlePosY}px) scale(${this.scale})`;
      }
      if (dot) {
        this.dotPosX = this.x - dot.clientWidth / 2;
        this.dotPosY = this.y - dot.clientHeight / 2;
        dot.style.transform = `translate(${this.dotPosX}px, ${this.dotPosY}px)`;
      }
      
      this.isAnimating = false; // 애니메이션 완료
    }
  }
};
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

.custom-cursor {
  cursor: none;
  pointer-events: none;
  position: relative;
  z-index: 999;
}
.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // transform: translate(-100%, -100%);
  transform: translate(-50%, -50%) scale(var(--scale, 1));
  transition: scale 0.4s $ease, background-color 0.2s $ease;

  // transition: scale 0.4s $ease;
  transition: transform 0.4s $ease, background-color 0.2s $ease;
  will-change: background-color;
}

.custom-cursor__dot {
  position: fixed;
  cursor: none;
  top: 1px;
  left: 1px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #2f2f2f;
  transform: translate(-50%, -50%);
  // transition: scale 0.4s $ease;
  // transition: transform 0.1s $ease, background-color 0.2s $ease;
  transition: transform 0.1s $ease, background-color 0.2s $ease;
  will-change: background-color;
}
</style>
