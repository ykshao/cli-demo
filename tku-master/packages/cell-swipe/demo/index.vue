<template>
  <div>
    <demo-section>
      <tk-notice-bar>建议在手机模式下浏览本示例</tk-notice-bar>
      <demo-block title="基础用法">
        <tk-cell-swipe :right-width="65" :left-width="65">
          <span slot="left">选择</span>
          <tk-cell-group>
            <tk-cell title="单元格" value="内容" />
          </tk-cell-group>
          <span slot="right">删除</span>
        </tk-cell-swipe>
      </demo-block>

      <demo-block title="异步关闭">
        <tk-cell-swipe :right-width="65" :left-width="65" :on-close="onClose">
          <span slot="left">选择</span>
          <tk-cell-group>
            <tk-cell title="单元格" value="内容" />
          </tk-cell-group>
          <span slot="right">删除</span>
        </tk-cell-swipe>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.$t('confirm')
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-cell-swipe {
  user-select: none;

  .tk-cell-swipe {
    &__left,
    &__right {
      color: #FFFFFF;
      font-size: 15px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
      background-color: #F44;
    }
  }
}
</style>
