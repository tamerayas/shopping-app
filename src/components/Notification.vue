<template>
  <div class="alert-wrap">
    <div class="alert" :class="[type]">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    message: String,
    type: String,
  },
  methods: {
    ...mapActions({
      setNotification: "notification/setNotification",
    }),
  },
};
</script>

<style lang="scss" scoped>
.alert-wrap {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: fit-content;
  animation-name: moveAlert;
  animation-duration: 2s;
  border: 1px solid inherit;

  .alert {
    padding: 7px;
    border-radius: 5px;
  }

  .success {
    border: 1px solid #c3e6cb;
    color: #155724;
    background-color: #d4edda;
  }

  .danger {
    border: 1px solid #f5c6cb;
    color: #721c24;
    background-color: #f8d7da;
  }
}
@keyframes moveAlert {
  0% {
    inset-inline-end: 1vw;
    inset-block-start: 0;
  }
  50% {
    inset-inline-end: 0.5vw;
    inset-block-start: 0;
  }
  100% {
    inset-inline-end: 0;
    inset-block-start: 0;
  }
}
</style>
