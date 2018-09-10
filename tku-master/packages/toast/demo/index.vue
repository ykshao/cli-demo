<template>
  <demo-section>
    <demo-block title="文字提示">
      <tk-button @click="showToast">文字提示</tk-button>
    </demo-block>

    <demo-block title="加载提示">
      <tk-button @click="showLoadingToast">加载提示</tk-button>
    </demo-block>

    <demo-block title="成功/失败提示">
      <tk-button @click="showSuccessToast">成功提示</tk-button>
      <tk-button @click="showFailToast">失败提示</tk-button>
    </demo-block>

    <demo-block title="高级用法">
      <tk-button @click="showCustomizedToast">高级用法</tk-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    text4: second => `倒计时 ${second} 秒`,

    showToast() {
      this.$toast('我是提示文案，建议不超过十五字~');
    },

    showLoadingToast() {
      this.$toast.loading({ mask: true, message: '加载中...' });
    },

    showSuccessToast() {
      this.$toast.success('成功文案');
    },

    showFailToast() {
      this.$toast.fail('失败文案');
    },

    showCustomizedToast(duration) {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: this.text4(3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.text4(second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="postcss">
.demo-toast {
  .tk-button {
    margin-left: 15px;
  }
}
</style>
