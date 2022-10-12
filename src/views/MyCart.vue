<template>
  <div class="my-cart-wrap">
    <div class="my-cart-wrapper">
      <span class="my-cart-header">MY CART</span>&nbsp;
      <span class="my-cart-header">({{ itemCount }})</span>
    </div>

    <div class="cart-item-wrapper">
      <CartItem v-for="(item, index) in cart" :key="index" :data="item" />
    </div>
    <div v-if="cart.length === 0">
      <h2 class="cart-empty">Your cart is empty!</h2>
    </div>
    <div class="button-wrapper">
      <button @click="continueShopping">CONTINUE SHOPPING</button>
      <button :disabled="cart.length === 0" @click="submitOrder()">
        PLACE ORDER
      </button>
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
    app.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="scss" scoped>
.my-cart {
  &-wrap {
    max-width: 700px;
    width: 700px;
    margin-top: 20px;
  }

  &-wrapper {
    border: 1px solid #ccc;
    border-bottom: 0px;
    padding: 10px;
    text-align: left;
  }

  &-header {
    font-weight: bold;
    color: #212121;
  }
}

.cart-item-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.cart-empty {
  height: 150px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
}

.button-wrapper {
  display: flex;
  column-gap: 10px;
  justify-content: center;
  margin: 30px 0px 30px 0px;
  white-space: nowrap;

  :nth-child(1) {
    background-color: #fff;
    color: #2C273A;
    border: 1px solid #ccc;
  }

  button {
    color: #fff;
    background-color: #b96d00;
    min-width: 150px;
    height: 35px;
    border: 0px;
    border-radius: 3px;
    cursor: pointer;
    padding: 0 20px;
  }
}

.cart-empty {
  display: flex;
  top: 50%;
  left: 50%;
}
</style>