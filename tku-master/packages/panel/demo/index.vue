<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-panel title="标题" desc="描述信息" status="状态">
        <div>内容</div>
      </tk-panel>
    </demo-block>

    <demo-block title="高级用法">
      <tk-panel title="标题" desc="描述信息" status="状态">
        <div>内容</div>
        <div slot="footer">
          <tk-button size="small">内容</tk-button>
          <tk-button size="small" type="danger">内容</tk-button>
        </div>
      </tk-panel>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-panel {
  .tk-panel__footer {
    text-align: right;

    .tk-button {
      margin-left: 5px;
    }
  }

  .tk-panel__content {
    padding: 20px;
  }
}
</style>
