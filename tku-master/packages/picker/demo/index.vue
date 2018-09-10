<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-picker :columns="column1" @change="onChange1" />
    </demo-block>

    <demo-block title="禁用选项">
      <tk-picker :columns="column2" />
    </demo-block>

    <demo-block title="展示顶部栏">
      <tk-picker
        show-toolbar
        title="标题"
        :columns="column1"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </demo-block>

    <demo-block title="多列联动">
      <tk-picker :columns="columns" @change="onChange2" />
    </demo-block>

    <demo-block title="加载状态">
      <tk-picker :columns="columns" loading />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      area: '标题',
      title2: '禁用选项',
      title3: '展示顶部栏',
      title4: '多列联动',
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [ { text: '杭州', disabled: true }, { text: '宁波' }, { text: '温州' } ],
      column3: { 浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'], 福建: ['福州', '厦门', '莆田', '三明', '泉州'] },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`
    },
    'en-US': {
      area: 'Title',
      title2: 'Disable Option',
      title3: 'Show Toolbar',
      title4: 'Multi Columns',
      column1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
      column2: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' }
      ],
      column3: {
        Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
        Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas']
      },
      toastContent: (value, index) => `Value: ${value}, Index：${index}`
    }
  },

  data () {
    return {
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      }
    }
  },

  computed: {
    columns() {
      const column = this.column3
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ];
    }
  },

  methods: {
    toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`,
    onChange1(picker, value, index) {
      this.$toast(this.toastContent(value, index));
    },
    onChange2(picker, values) {
      picker.setColumnValues(1, this.column3[values[0]]);
    },
    onConfirm(value, index) {
      this.$toast(this.toastContent(value, index));
    },
    onCancel() {
      this.$toast('取消');
    }
  }
};
</script>
