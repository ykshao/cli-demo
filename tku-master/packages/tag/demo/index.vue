<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-tag>标签</tk-tag>
      <tk-tag type="danger">标签</tk-tag>
      <tk-tag type="success">标签</tk-tag>
      <tk-tag type="primary">标签</tk-tag>
    </demo-block>

    <demo-block title="空心样式">
      <tk-tag plain>标签</tk-tag>
      <tk-tag plain type="danger">标签</tk-tag>
      <tk-tag plain type="primary">标签</tk-tag>
      <tk-tag plain type="success">标签</tk-tag>
    </demo-block>

    <demo-block title="圆角样式">
      <tk-tag mark>标签</tk-tag>
      <tk-tag mark type="danger">标签</tk-tag>
      <tk-tag mark type="primary">标签</tk-tag>
      <tk-tag mark type="success">标签</tk-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '空心样式',
      title3: '圆角样式'
    },
    'en-US': {
      title2: 'Plain style',
      title3: 'Mark style'
    }
  }
};
</script>

<style lang="postcss">
.demo-tag {
  .tk-tag + .tk-tag {
    margin-left: 10px;
  }

  .tk-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
