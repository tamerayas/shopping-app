<template>
  <div class="cart-item">
    <div class="cart-item-head">
      <img :src="data.image" :alt="data.name" width="150" />
      <div>{{ data.name }}</div>
      <div>{{ data.price }}</div>
    </div>
    <div>
      <div class="cart-footer">
        <button
          class="cart-item-button"
          @click="decrease(data.id)"
          :disabled="unit === 1"
					:class="{'disabled': unit === 1}"
        >
          -
        </button>
        <input class="cart-item-input" v-model="unit" />
        <button class="cart-item-button" @click="increase(data.id)">+</button>
      </div>
      <div class="remove">
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
      unit: 1,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  watch: {
    unit(newData) {
      console.log(newData);
      this.unit = Number(newData);
    },
  },
  methods: {
    increase() {
      this.unit += 1;
      this.increment(this.data.id);
    },
    decrease() {
      this.unit -= 1;
      this.increment(this.data.id);
    },
    ...mapMutations({
      increment: "cartStore/increment",
      decrement: "cartStore/decrement",
    }),
  },
  created() {
    this.unit = this.data.unit;
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  &-head {
    display: flex;
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