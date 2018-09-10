<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-search placeholder="请输入商品名称" v-model="value" />
    </demo-block>

    <demo-block title="监听对应事件">
      <form action="/">
        <tk-search
          v-model="value"
          placeholder="请输入商品名称"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block title="自定义行动按钮">
      <tk-search
        v-model="value"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </tk-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  },

  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onCancel() {
      this.$toast('取消');
    }
  }
};
</script>

<style lang="postcss">
.demo-search {
  .tk-search__action div {
    padding: 0 10px;
  }
}
</style>
