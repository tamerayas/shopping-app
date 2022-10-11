<template>
  <Notification
    v-if="notification?.status"
    :message="notification.message"
    :type="notification.type"
  />
  <router-view />
</template>

<script>
import Notification from "@/components/Notification.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Notification,
  },
  computed: {
    ...mapState({
      notification: (store) => store.notification.notification
    }),
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
