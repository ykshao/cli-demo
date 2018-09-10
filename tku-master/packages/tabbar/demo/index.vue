<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-tabbar v-model="active">
        <tk-tabbar-item icon="shop">标签</tk-tabbar-item>
        <tk-tabbar-item icon="chat" dot>标签</tk-tabbar-item>
        <tk-tabbar-item icon="records" info="5">标签</tk-tabbar-item>
        <tk-tabbar-item icon="gold-coin" info="20">标签</tk-tabbar-item>
      </tk-tabbar>
    </demo-block>

    <demo-block title="自定义图标">
      <tk-tabbar v-model="active2">
        <tk-tabbar-item icon="shop">
          <span>自定义</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </tk-tabbar-item>
        <tk-tabbar-item icon="chat">标签</tk-tabbar-item>
        <tk-tabbar-item icon="records">标签</tk-tabbar-item>
      </tk-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      active2: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  }
};
</script>

<style lang="postcss">
.demo-tabbar {
  .tk-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
