export default {
  goToPage(target) {
    if (this.$router.currentRoute.path !== target) {
     this.$router.push(target);
    }
  },
};