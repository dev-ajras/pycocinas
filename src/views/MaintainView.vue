<template>
  <div class="view-container">
    <WorkOnProgress />
    <h4>Placares y cocinas lomas se encuentra en construccion!</h4>
    <WspLink />
  </div>
</template>

<script lang="ts">
import WorkOnProgress from "../components/maintain-components/WorkOnProgress.vue";
import WspLink from "../components/maintain-components/WspLink.vue";
export default {
  components: { WorkOnProgress, WspLink },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h4 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
