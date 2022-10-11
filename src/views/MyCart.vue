<template>
  <span class="my-cart-header">MY CART</span> &nbsp;
  <span class="my-cart-header">({{ itemCount }})</span>
  <div>
    <CartItem v-for="(item, index) in cart" :key="index" :data="item" />
    <div v-if="cart.length === 0">
      <h2 class="button-wrapper">Your cart is empty!</h2>
    </div>
    <div class="button-wrapper">
      <button @click="continueShopping">CONTINUE SHOPPING</button>
      <button @click="submitOrder()">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "BaseCart",
  components: {
    CartItem,
  },
  methods: {
    ...mapActions({
      submitOrder: "cart/submitOrder",
    }),
    continueShopping() {
      this.$router.push({ name: "ProductList" });
    },
  },
  computed: {
    ...mapGetters({
      itemCount: "cart/itemCount",
    }),
    ...mapState({
      cart: (store) => store.cart.cart,
    }),
  },
  mounted() {
    const app = document.getElementById("app");
    app.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style lang="scss" scoped>
.my-cart {
  &-header {
    font-weight: bold;
  }
}

.button-wrapper {
  display: flex;
  column-gap: 10px;
  justify-content: center;
  margin: 200px 0px 200px 0px;

  :nth-child(1) {
    background-color: #f0f0f0;
    color: #000000;
    border: 1px solid;
  }

  button {
    color: #fff;
    background-color: #b96d00;
    width: 150px;
    height: 35px;
    border: 0px;
    border-radius: 3px;
    cursor: pointer;
  }
}

.cart-empty {
  display: flex;
  top: 50%;
  left: 50%;
}
</style>