<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-checkbox v-model="checkbox1">复选框</tk-checkbox>
    </demo-block>

    <demo-block title="禁用状态">
      <tk-checkbox :value="false" disabled>复选框</tk-checkbox>
      <tk-checkbox :value="true" disabled>复选框</tk-checkbox>
    </demo-block>

    <demo-block title="自定义图标">
      <tk-checkbox v-model="checkbox2">
        自定义图标
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
      </tk-checkbox>
    </demo-block>

    <demo-block title="Checkbox 组">
      <tk-checkbox-group v-model="result">
        <tk-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          复选框 {{ item }}
        </tk-checkbox>
      </tk-checkbox-group>
    </demo-block>

    <demo-block title="设置最大可选数">
      <tk-checkbox-group v-model="result2" :max="2">
        <tk-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          复选框 {{ item }}
        </tk-checkbox>
      </tk-checkbox-group>
    </demo-block>

    <demo-block title="与 Cell 组件一起使用">
      <tk-checkbox-group v-model="result3">
        <tk-cell-group >
          <tk-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="'复选框' + item"
            @click="toggle(index)"
          >
            <tk-checkbox ref="checkboxes" :name="item" />
          </tk-cell>
        </tk-cell-group>
      </tk-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="postcss">
.demo-checkbox {
  .tk-checkbox {
    margin: 10px 0 0 20px;
  }

  .tk-cell {
    .tk-checkbox {
      margin: 0;
    }
  }

  img {
    width: 20px;
    display: block;
  }
}
</style>
