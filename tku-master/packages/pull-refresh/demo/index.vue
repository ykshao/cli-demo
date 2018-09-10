<template>
  <demo-section name="pull-refresh">
    <tk-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <demo-block title="基础用法">
        <p>刷新次数: {{ count }}</p>
      </demo-block>
    </tk-pull-refresh>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="postcss">
.demo-pull-refresh {
  .tk-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: 10px 0 0 15px;
  }
}
</style>
