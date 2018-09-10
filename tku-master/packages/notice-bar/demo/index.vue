<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-notice-bar
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </demo-block>

    <demo-block title="禁用滚动">
      <tk-notice-bar :scrollable="false" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" />
    </demo-block>

    <demo-block title="通告栏模式">
      <tk-notice-bar mode="closeable" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" />
      <tk-notice-bar mode="link" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" />
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-notice-bar {
  .tk-notice-bar:not(:first-of-type) {
    margin-top: 15px;
  }
}
</style>
