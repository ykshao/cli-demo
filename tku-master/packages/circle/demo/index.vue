<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-circle
        v-model="currentRate1"
        :rate="rate"
        :speed="100"
        size="120px"
        :text="currentRate1.toFixed(0) + '%'"
      />
      <tk-circle
        v-model="currentRate2"
        color="#13ce66"
        fill="#fff"
        :rate="rate"
        size="120px"
        layer-color="#eee"
        :speed="100"
        :stroke-width="60"
        :clockwise="false"
        :text="currentRate2.toFixed(0) + '%'"
      />
      <div>
        <tk-button text="增加" type="primary" size="small" @click="add" />
        <tk-button text="减少" type="danger" size="small" @click="reduce" />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);

export default {
  data() {
    return {
      rate: 30,
      currentRate1: 0,
      currentRate2: 0
    };
  },

  methods: {
    add() {
      this.rate = format(this.rate + 20);
    },

    reduce() {
      this.rate = format(this.rate - 20);
    }
  }
};
</script>

<style lang="postcss">
.demo-circle {
  .tk-circle {
    margin-left: 15px;
  }

  .tk-button {
    margin: 15px 0 0 10px;

    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
