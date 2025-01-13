<template>
    <div v-if="isLoading" class="loading-screen">
        <h2 class="loading-text text-split">Waiting...</h2>
        <div aria-hidden="true" class="loading-background"></div>
    </div>
</template>
<script>
import { EventBus } from '@/assets/js/eventBus';
export default {
    name: 'LoadingScreen',
    data() {
        return {
            isLoading: false,
            animationKey: 0
        }
    },
    created() {
        EventBus.$on('toggle-loading', this.startLoadingAnimation);
    },
    beforeDestroy() {
        EventBus.$off('toggle-loading', this.startLoadingAnimation);
    },
    mounted() {
    },
    methods: {
        startLoadingAnimation(nextRoute) {
            this.isLoading = true;

            this.$nextTick(() => {
                this.runAnimation(nextRoute);
            })
        },
        runAnimation(nextRoute) {
            // 로딩 텍스트 분리
            const textElements = document.querySelectorAll('.loading-text');
                textElements.forEach((ele) => {
                const text = ele.textContent;
                ele.textContent = '';

                text.split('').forEach((char) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    ele.appendChild(span);
                })
            });

            // 로딩 TIMELINE
            const introtl = this.$gsap.timeline({
                defaults: {
                    ease: 'expo.inOut',
                    duration: 1,
                },
                onComplete: () => {
                    EventBus.$emit('animateion-complete', nextRoute);
                    this.isLoading = false;
                }
            });
            introtl
            .to('.loading-background', {
                duration: 0.7,
                scaleY: 1,
                transformOrigin: 'top center',
            })
            .to('.loading-text span', {
                duration: 0.8,
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
            })
            .to('.loading-text span', {
                duration: 0.7,
                delay: 1,
                y: -70,
                stagger: 0.1
            }, '-=0.3')
            .to('.loading-background', {
                duration: 0.8,
                scaleY: 0,
                transformOrigin: 'bottom center',
            });
        
        },
    }
}
</script>
