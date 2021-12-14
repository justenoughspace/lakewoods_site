<template>
  <div>
    <n-banner :section="section" />
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
      section: "NEWS",
    };
  },
};
</script>
