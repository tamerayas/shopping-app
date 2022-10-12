<template>
  <div class="card">
    <img :src="data.image" alt="Card" width="200" />
    <p>{{ data.name }}</p>
    <div class="card-footer">
      <span>{{ data.price }} {{ data.currency }}</span>
      <button class="card-footer-button" @click="addCart(data)">
        ADD BASKET
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "BaseCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/addToCart",
    }),
    addCart(data) {
      this.addToCart({ ...data, amount: 1 });
      this.$router.push({ path: "/my-cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  width: 350px;
  max-width: 350px;
  padding: 15px;

  &-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-button {
      color: #fff;
      background-color: #fb641b;
      width: 150px;
      height: 35px;
      border: 0px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>