<template>
  <demo-section>
    <demo-block :title="'基本用法'">
      <tk-row>
        <tk-col span="8">span: 8</tk-col>
        <tk-col span="8">span: 8</tk-col>
        <tk-col span="8">span: 8</tk-col>
      </tk-row>

      <tk-row>
        <tk-col span="4">span: 4</tk-col>
        <tk-col span="10" offset="4">offset: 4, span: 10</tk-col>
      </tk-row>

      <tk-row>
        <tk-col offset="12" span="12">offset: 12, span: 12</tk-col>
      </tk-row>
    </demo-block>

    <demo-block :title="'在列元素之间增加间距'">
      <tk-row gutter="20">
        <tk-col span="8">span: 8</tk-col>
        <tk-col span="8">span: 8</tk-col>
        <tk-col span="8">span: 8</tk-col>
      </tk-row>
    </demo-block>

    <demo-block :title="'Flex 布局'">
      <tk-row type="flex">
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
      </tk-row>

      <tk-row type="flex" justify="center">
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
      </tk-row>

      <tk-row type="flex" justify="end">
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
      </tk-row>

      <tk-row type="flex" justify="space-between">
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
      </tk-row>

      <tk-row type="flex" justify="space-around">
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
        <tk-col span="6">span: 6</tk-col>
      </tk-row>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-col {
  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .tk-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
