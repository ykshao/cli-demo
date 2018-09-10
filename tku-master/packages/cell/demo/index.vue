<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-cell-group>
        <tk-cell title="单元格" value="内容" />
        <tk-cell title="单元格" value="内容" label="描述信息" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="只设置value">
      <tk-cell-group>
        <tk-cell value="内容" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="展示图标">
      <tk-cell-group>
        <tk-cell title="单元格" icon="location" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="展示箭头">
      <tk-cell-group>
        <tk-cell title="单元格" is-link />
        <tk-cell title="单元格" is-link value="内容" />
        <tk-cell title="单元格" is-link arrow-direction="down" value="内容" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="高级用法">
      <tk-cell-group>
        <tk-cell value="内容" icon="shop" is-link>
          <template slot="title">
            <span class="tk-cell-text">单元格</span>
            <tk-tag type="danger">标签</tk-tag>
          </template>
        </tk-cell>
        <tk-cell title="单元格" icon="location" is-link />
        <tk-cell title="单元格">
          <tk-icon slot="right-icon" name="search" class="tk-cell__right-icon" />
        </tk-cell>
      </tk-cell-group>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-cell {
  .tk-cell-text {
    margin-right: 5px;
  }

  .tk-cell-text,
  .tk-tag--danger {
    vertical-align: middle;
  }
}
</style>
