<template>
  <div class="cart-item">
    <div class="cart-item-head">
      <img :src="data.image" :alt="data.name" width="150" />
      <div class="cart-item-content">
        <div>{{ data.name }}</div>
        <div>{{ data.price }} {{ data.currency }} </div>
      </div>
    </div>
    <div class="cart-footer-wrapper">
      <div class="cart-footer">
        <button
          class="cart-item-button"
          @click="decrease(data.id)"
          :disabled="amount === 1"
          :class="{ disabled: amount === 1 }"
        >
          -
        </button>
        <input class="cart-item-input" v-model="amount" />
        <button class="cart-item-button" @click="increase(data.id)">+</button>
      </div>
      <div class="remove" @click="removeItem(data.id)">
        <span>REMOVE</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CartItem",
  data() {
    return {
      amount: 1,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  watch: {
    amount(newValue) {
      this.amount = Number(newValue);
    },
  },
  methods: {
    ...mapMutations({
      increment: "cart/increment",
      decrement: "cart/decrement",
      removeItem: "cart/removeItem",
    }),
    increase() {
      this.amount += 1;
      this.increment(this.data.id);
    },
    decrease() {
      this.amount -= 1;
      this.increment(this.data.id);
    },
  },
  created() {
    this.amount = this.data.amount;
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  padding: 40px;
  &-head {
    display: flex;
  }

  &-content {
    align-content: center;
    align-items: center;
    row-gap: 10px;
    margin: 10px;

    :nth-child(2) {
      margin-top: 100px;
    }
  }

  &-input {
    width: 30px;
    text-align: center;
  }

  &-button {
    border: 1px solid;
    border-radius: 50%;
    width: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .cart-footer {
    width: 150px;
    display: flex;
    justify-content: space-between;

    &-wrapper {
      display: flex;
      justify-content: space-between;
    }

    .disabled {
      cursor: not-allowed;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>