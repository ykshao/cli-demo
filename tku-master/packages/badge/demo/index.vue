<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-badge-group :active-key="activeKey">
        <tk-badge title="标签名称" @click="onClick" />
        <tk-badge title="标签名称" @click="onClick" info="8" />
        <tk-badge title="标签名称" @click="onClick" info="99" />
        <tk-badge title="标签名称" @click="onClick" info="199" />
      </tk-badge-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="postcss">
.demo-badge {
  .tk-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

    &::after {
      display: none;
    }
  }

  .tk-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
