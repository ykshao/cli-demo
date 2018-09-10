<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-button @click="show1 = true">弹出 Actionsheet</tk-button>
      <tk-actionsheet v-model="show1" :actions="actions" />
    </demo-block>

    <demo-block title="带取消按钮的 Actionsheet">
      <tk-button @click="show2 = true">弹出带取消按钮的 Actionsheet</tk-button>
      <tk-actionsheet v-model="show2" :actions="actions" cancel-text="取消" @cancel="handleCancel" />
    </demo-block>

    <demo-block title="带标题的 Actionsheet">
      <tk-button @click="show3 = true">弹出带标题的 Actionsheet</tk-button>
      <tk-actionsheet v-model="show3" title="描述信息">
        <p>内容</p>
      </tk-actionsheet>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },

  computed: {
    actions() {
      return [
        { name: '选项', callback: this.onClick },
        { name: '选项', subname: '描述信息' },
        { name: '选项', loading: true },
        { name: '禁用选项', disabled: true }
      ];
    }
  },

  methods: {
    onClick(item) {
      this.$toast(item.name);
    },

    handleCancel() {
      this.$toast('取消');
    }
  }
};
</script>

<style lang="postcss">
.demo-actionsheet {
  .actionsheet-wx {
    color: #06bf04;
  }

  .tk-button {
    margin-left: 15px;
  }

  p {
    padding: 20px;
  }
}
</style>
