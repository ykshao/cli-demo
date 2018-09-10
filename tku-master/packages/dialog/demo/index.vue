<template>
  <demo-section>
    <demo-block title="消息提示">
      <tk-button @click="onClickAlert">Alert</tk-button>
      <tk-button @click="onClickAlert2">无标题 Alert</tk-button>
    </demo-block>

    <demo-block title="消息确认">
      <tk-button @click="onClickConfirm">Confirm</tk-button>
    </demo-block>

    <demo-block title="高级用法">
      <tk-button @click="show = true">高级用法</tk-button>
      <tk-dialog
        v-model="show"
        show-cancel-button
        :before-close="beforeClose"
      >
        <tk-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        />
        <tk-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </tk-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert'
    },
    'en-US': {
      title1: 'Alert dialog',
      title2: 'Confirm dialog',
      alert2: 'Alert without title'
    }
  },

  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗内容'
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: '弹窗内容'
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      });
    },

    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-dialog {
  .van-doc-demo-block > .tk-button {
    margin: 15px;
  }
}
</style>
