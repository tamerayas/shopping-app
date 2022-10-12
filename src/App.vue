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
      notification: (store) => store.notification.notification,
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
  color: #0e0e0e;
  display: flex;
  justify-content: center;
}

body,
html {
  margin: 0px;
  padding: 0px;
}

* {
  box-sizing: border-box;
}
</style>
