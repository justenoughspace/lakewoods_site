<template>
  <div>
    <n-banner :section="section" :fontSize="fontSize" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    NBanner: Banner,
  },
  data() {
    return {
      section: "SHOWS",
      fontSize: "16px",
    };
  },
};
</script>
