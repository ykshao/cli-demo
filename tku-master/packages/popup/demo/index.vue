<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-button @click="show1 = true">弹出 Popup</tk-button>
      <tk-popup v-model="show1">内容</tk-popup>
    </demo-block>

    <demo-block title="弹出位置">
      <tk-button @click="show2 = true;">底部弹出</tk-button>

      <tk-popup v-model="show2" position="bottom">
        <tk-picker
          show-toolbar
          :columns="['杭州', '宁波', '温州', '嘉兴', '湖州']"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </tk-popup>

      <tk-button @click="show3 = true">顶部弹出</tk-button>
      <tk-popup v-model="show3" position="top" :overlay="false">
        内容
      </tk-popup>

      <tk-button @click="show4 = true">右侧弹出</tk-button>
      <tk-popup v-model="show4" position="right">
        <tk-button @click="show4 = false">关闭弹层</tk-button>
        <tk-button @click="show5 = true">右侧弹出</tk-button>
        <tk-popup v-model="show5" position="right">
          <tk-button @click="show5 = false">关闭弹层</tk-button>
        </tk-popup>
      </tk-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      this.$dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      });
    }
  }
};
</script>

<style lang="postcss">
.demo-popup {
  .tk-button {
    margin: 10px 0 10px 15px;
  }

  .tk-popup {
    width: 60%;
    padding: 20px;
    box-sizing: border-box;

    &--bottom {
      width: 100%;
      padding: 0;
      border-radius: 0;
    }

    .tk-tabs__content {
      height: 156px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .tk-tab__pane:not(:first-child) {
      padding: 10px;
      line-height: 1.4;
      color: #666;
    }

    &--top {
      color: #fff;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &--left,
    &--right {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
