<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-swipe :autoplay="3000">
        <tk-swipe-item>1</tk-swipe-item>
        <tk-swipe-item>2</tk-swipe-item>
        <tk-swipe-item>3</tk-swipe-item>
        <tk-swipe-item>4</tk-swipe-item>
      </tk-swipe>
    </demo-block>

    <demo-block title="图片懒加载">
      <tk-swipe :autoplay="3000">
        <tk-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" >
        </tk-swipe-item>
      </tk-swipe>
    </demo-block>

    <demo-block title="监听 change 事件">
      <tk-swipe @change="onChange">
        <tk-swipe-item>1</tk-swipe-item>
        <tk-swipe-item>2</tk-swipe-item>
        <tk-swipe-item>3</tk-swipe-item>
        <tk-swipe-item>4</tk-swipe-item>
      </tk-swipe>
    </demo-block>

    <demo-block title="纵向滚动">
      <tk-swipe :autoplay="3000" vertical class="demo-swipe--vertical">
        <tk-swipe-item>1</tk-swipe-item>
        <tk-swipe-item>2</tk-swipe-item>
        <tk-swipe-item>3</tk-swipe-item>
        <tk-swipe-item>4</tk-swipe-item>
      </tk-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.$toast('当前 Swipe 索引：' + index);
    }
  }
};
</script>

<style lang="postcss">
.demo-swipe {
  padding-bottom: 30px;

  .tk-swipe {
    cursor: pointer;

    &-item {
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 150px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: #fff;
      pointer-events: none;
    }
  }

  &--vertical {
    height: 200px;

    .tk-swipe-item {
      line-height: 200px;
    }
  }
}
</style>
