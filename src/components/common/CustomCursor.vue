<template>
  <div aria-hidden="true" :class="['custom-cursor', {dark:darkMode}, {'is-hover':isHovered}]">
    <div class="custom-cursor-circle" ref="customCursorCircle"></div>
    <div class="custom-cursor-dot" ref="customCursorDot"></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  props: {
    hoverTargets: {
      type: Array,
      default: () => ['.logo', '.work-list.en', '.work-list.kr', 'button', 'a'] // 기본값 설정
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scale: 1,
      mouseX: 0,
      mouseY: 0,
      isAnimating: false, // 애니메이션 상태
      isHovered: false, // 호버 상태
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("mousemove", this.onMouseMove);
    });
    
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      // 호버 상태 체크
      this.isHovered = this.hoverTargets.some(target => {
        return e.target.matches(target);
      })
      this.scale = this.isHovered ? 1.5 : 1;

      // 애니메이션 실행
      if (!this.isAnimating) {
        this.isAnimating = true;
        requestAnimationFrame(this.updatePosition);
      }
    },
    updatePosition() {
      const circle = this.$refs.customCursorCircle;
      const dot = this.$refs.customCursorDot;

      if (circle && dot) {
        const circleX = this.mouseX - circle.clientWidth / 2;
        const circleY = this.mouseY - circle.clientWidth / 2;
        circle.style.transform = `translate(${circleX}px, ${circleY}px) scale(${this.scale})`;
        
        const dotX = this.mouseX - dot.clientWidth / 2;
        const dotY = this.mouseY - dot.clientWidth / 2;
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      this.isAnimating = false;
    },
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

  &-circle {
    position: fixed;
    cursor: none;
    top: 0;
    left: 0;
    width: 35px;
    height: 35px;
    border: 2px solid #aaa;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.4s $ease;
    will-change: transform;

    .dark & {
      width: 25px;
      height: 25px;
      border-color: #666;
    }

    .dark.is-hover & {
      width: 35px;
      height: 35px;
      background-color: rgb(255 255 255 / 30%);
      border-color: #fff;
    }
  }

  &-dot {
    position: fixed;
    cursor: none;
    top: 1px;
    left: 1px;
    width: 4px;
    height: 4px;
    background-color: #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.2s $ease, background-color 0.2s $ease;
    will-change: background-color, transform;

    .is-hover & {
      width: 10px;
      height: 10px;
      background-color: #f63543;
    }

    .dark & {
      background-color: #f63543;
    }

    .dark.is-hover & {
      background-color: #fff;
    }
  }
}
</style>
