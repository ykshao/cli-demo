<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-tabs v-model="active">
        <tk-tab :title="'选项' + index" v-for="index in tabs" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="横向滚动">
      <tk-tabs>
        <tk-tab v-for="index in 8" :title="'选项' + index" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="禁用标签">
      <tk-tabs @disabled="onClickDisabled">
        <tk-tab v-for="index in 4" :title="'选项' + index" :disabled="index === 2" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="样式风格">
      <tk-tabs type="card">
        <tk-tab v-for="index in 4" :title="'选项' + index" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="点击事件">
      <tk-tabs @click="onClick">
        <tk-tab v-for="index in 4" :title="'选项' + index" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="粘性布局">
      <tk-tabs :active="active" sticky>
        <tk-tab :title="'选项' + index" v-for="index in tabs" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="自定义标签">
      <tk-tabs :active="active">
        <tk-tab v-for="index in 2" :key="index">
          <div slot="title">
            <tk-icon name="more-o" />{{ '选项' }}
          </div>
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>

    <demo-block title="滑动切换">
      <tk-tabs :active="active" swipeable>
        <tk-tab :title="'选项' + index" v-for="index in tabs" :key="index">
          内容 {{ index }}
        </tk-tab>
      </tk-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + ' 已被禁用');
    },

    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style lang="postcss">
.demo-tab {
  margin-bottom: 300px;

  .tk-tab .tk-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .tk-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .tk-tabs--card .tk-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .tk-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .tk-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .tk-doc-demo-block:last-child {
    .tk-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>
