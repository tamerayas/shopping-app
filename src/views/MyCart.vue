<template>
  <span class="my-cart-header">MY CART</span> &nbsp;
  <span class="my-cart-header">({{ itemCount }})</span>
  <CartItem
    v-for="(item, index) in cart"
    :key="index"
    :data="item"
  />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "BaseCart",
  components: {
    CartItem
  },
  computed: {
    ...mapGetters({
      itemCount: "cartStore/itemCount",
    }),
    ...mapState({
      cart: store => store.cartStore.cart
    })
  },
};
</script>

<style lang="scss" scoped>
.my-cart {
  &-header {
    font-weight: bold;
  }
}
</style>