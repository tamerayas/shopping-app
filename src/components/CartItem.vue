<template>
  <div class="cart-item">
    <div class="cart-item-head">
      <img :src="data.image" :alt="data.name" width="150" height="150" />
      <div class="cart-item-content">
        <div class="cart-item-content-name">{{ data.name }}</div>
        <div class="cart-item-content-price">
          {{ data.price }} {{ data.currency }}
        </div>
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
      this.setAmount({ id: this.data.id, amount: this.amount });
    },
  },
  methods: {
    ...mapMutations({
      increment: "cart/increment",
      decrement: "cart/decrement",
      removeItem: "cart/removeItem",
      setAmount: "cart/setAmount"
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
  padding: 15px;
  border: 1px solid #ccc;

  &:not(:last-of-type) {
    border-bottom: 0px;
  }

  &-head {
    display: flex;
  }

  &-content {
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    row-gap: 35px;
    margin: 10px;
    flex-direction: column;

    &-name {
      text-align: left;
      max-height: 36px;
      height: 36px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #0e0e0e;
    }

    &-price {
      font-weight: bold;
      color: #492c34;
    }
  }

  &-input {
    width: 30px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 2px;

    &:focus,
    &:active {
      border: 1px solid #bcc;
      outline: 0px;
    }
  }

  &-button {
    border: 1px solid #bcc;
    border-radius: 50%;
    width: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fdfdfd;
  }

  .cart-footer {
    width: 150px;
    display: flex;
    justify-content: space-between;

    &-wrapper {
      display: flex;
      margin-top: 7px;
      column-gap: 35%;
    }

    .disabled {
      cursor: not-allowed;
    }
  }

  .remove {
    span {
      font-weight: bold;
      color: #0e0e0e;
      cursor: pointer;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>