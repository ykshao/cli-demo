<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      mainActiveIndex: 0,
      activeId: 1001,
      group1: "所有城市",
      group2: "浙江",
      group3: "江苏",
      city1: [
        {
          text: "杭州",
          id: 1001
        },
        {
          text: "温州",
          id: 1002
        },
        {
          text: "宁波",
          id: 1003
        },
        {
          text: "义乌",
          id: 1004
        }
      ],
      city2: [
        {
          text: "无锡",
          id: 1011
        },
        {
          text: "常州",
          id: 1012
        },
        {
          text: "莆田",
          id: 1013
        },
        {
          text: "三明",
          id: 1014
        }
      ]
    };
  },

  computed: {
    items() {
      return [
        {
          text: this.group1,
          children: [...this.city1, ...this.city2]
        },
        {
          text: this.group2,
          children: this.city1
        },
        {
          text: this.group3,
          children: this.city2
        }
      ];
    }
  },

  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      console.log(data);
      this.activeId = data.id;
    }
  }
};
</script>
