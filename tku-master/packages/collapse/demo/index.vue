<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-collapse v-model="active1">
        <tk-collapse-item title="商城">提供多样店铺模板，快速搭建网上商城</tk-collapse-item>
        <tk-collapse-item title="零售">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</tk-collapse-item>
        <tk-collapse-item title="美业">线上拓客，随时预约，贴心顺手的开单收银</tk-collapse-item>
      </tk-collapse>
    </demo-block>

    <demo-block title="手风琴">
      <tk-collapse v-model="active2" accordion>
        <tk-collapse-item title="商城">提供多样店铺模板，快速搭建网上商城</tk-collapse-item>
        <tk-collapse-item title="零售">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</tk-collapse-item>
        <tk-collapse-item title="美业">线上拓客，随时预约，贴心顺手的开单收银</tk-collapse-item>
      </tk-collapse>
    </demo-block>

    <demo-block title="自定义标题内容">
      <tk-collapse v-model="active3">
        <tk-collapse-item>
          <div slot="title">商城<tk-icon name="question" /></div>
          提供多样店铺模板，快速搭建网上商城
        </tk-collapse-item>
        <tk-collapse-item title="零售">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</tk-collapse-item>
      </tk-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="postcss">
@import "../../../packages/tku-css/src/common/var.css";

.demo-collapse {
  .tk-collapse-item__content {
    font-size: 13px;
    line-height: 1.5;
    color: $gray-darker;
  }

  .tk-icon-question {
    color: $blue;
    vertical-align: -3px;
    margin-left: 5px;
    font-size: 15px;
  }
}
</style>
