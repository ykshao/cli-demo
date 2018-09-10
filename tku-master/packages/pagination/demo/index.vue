<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-pagination
        v-model="currentPage1"
        :total-items="24"
        :items-per-page="5"
        previous-text="上一页"
        next-text="下一页"
      />
    </demo-block>

    <demo-block title="简单模式">
      <tk-pagination
        v-model="currentPage2"
        :page-count="12"
        previous-text="上一页"
        next-text="下一页"
        mode="simple"
        size="small"
      />
    </demo-block>

    <demo-block title="显示省略号">
      <tk-pagination
        force-ellipses
        v-model="currentPage3"
        :total-items="125"
        :show-page-size="3"
        previous-text="上一页"
        next-text="下一页"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    };
  }
};
</script>

<style lang="postcss">
.demo-pagination {
  .tk-pagination {
    margin: 5px 0;
    width: 100%;
  }

  .tk-doc-demo-block {
    padding: 0 15px;
  }

  .tk-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
