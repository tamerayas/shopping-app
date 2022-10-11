<template>
  <div class="alert-wrap">
    <div class="alert" :class="[type]">
      <span >{{ message }}</span>
      <i @click="hideAlert"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    message: String,
    type: String,
  },
  methods: {
    ...mapActions({
      setNotification: "notification/setNotification",
    }),
    hideAlert() {
      this.setNotification({ status: false });
    },
  },
};
</script>

<style lang="scss" scoped>

  .alert-wrap {
    z-index: 10;
    top: 0;
    inset-inline-end: 0;
    position: absolute;
    background: transparent;
    animation-name: moveAlert;
    animation-duration: 2s;

    .alert {
      max-width: 100%;
    }

  }
  @keyframes moveAlert {
    0% {
      inset-inline-end: 1vw;
      inset-block-start: 0;
    }
    50% {
      inset-inline-end: .5vw;
      inset-block-start: 0;
    }
    100% {
      inset-inline-end: 0;
      inset-block-start: 0;
    }
  }
</style>
