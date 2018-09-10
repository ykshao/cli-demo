<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-progress :percentage="50" />
    </demo-block>

    <demo-block title="置灰">
      <tk-progress inactive :percentage="50" />
    </demo-block>

    <demo-block title="样式定制">
      <tk-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
      <tk-progress pivot-text="红色" color="#f3594b" :percentage="50" />
      <tk-progress
        :percentage="75"
        pivot-text="紫色"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-progress {
  .tk-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
