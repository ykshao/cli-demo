<template>
  <demo-section>
    <demo-block title="基础用法">
      <p class="page-desc">当即将滚动到元素底部时，会自动加载更多</p>
      <tk-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <tk-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <tk-cell v-for="item in list" :key="item" :title="item + ''" />
        </tk-list>
      </tk-pull-refresh>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? '0' + text : text);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

    onRefresh() {
      setTimeout(() => {
        this.list = [];
        this.finished = false;
        this.refreshing = false;
        window.scrollTo(0, 10);
      }, 1000);
    }
  }
};
</script>

<style lang="postcss">
.demo-list {
  .tk-cell {
    text-align: center;
  }

  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>
