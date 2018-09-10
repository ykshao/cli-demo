<template>
  <demo-section>
    <demo-block title="按钮类型">
      <tk-button type="default">默认按钮</tk-button>
      <tk-button type="primary">主要按钮</tk-button>
      <tk-button type="danger">危险按钮</tk-button>
    </demo-block>

    <demo-block title="朴素按钮">
      <tk-button type="default" plain>默认按钮</tk-button>
      <tk-button type="primary" plain>主要按钮</tk-button>
      <tk-button type="danger" plain>危险按钮</tk-button>
    </demo-block>

    <demo-block title="按钮尺寸">
      <tk-button size="large">大号按钮</tk-button>
      <tk-button size="normal">普通按钮</tk-button>
      <tk-button size="small">小型按钮</tk-button>
      <tk-button size="mini">迷你按钮</tk-button>
    </demo-block>

    <demo-block title="禁用状态">
      <tk-button disabled>禁用状态</tk-button>
    </demo-block>

    <demo-block title="加载状态">
      <tk-button loading />
      <tk-button loading type="primary" />
    </demo-block>

    <demo-block title="自定义按钮标签">
      <tk-button tag="a" href="https://www.51talk.com" target="_blank">
        按钮
      </tk-button>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-button {
  .tk-button {
    user-select: none;

    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .tk-loading {
      margin: 0 18px;
    }
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
