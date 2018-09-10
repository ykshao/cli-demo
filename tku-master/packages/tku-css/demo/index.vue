<template>
  <demo-section>
    <demo-block title="文字省略">
      <div class="tk-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>
    </demo-block>

    <demo-block title="1px 边框">
      <div class="tk-hairline--top" />
    </demo-block>

    <demo-block title="动画">
      <tk-switch-cell v-model="show" title="切换动画" :border="false" />
      <tk-row>
        <transition name="tk-fade">
          <tk-col span="8" v-show="show">Fade</tk-col>
        </transition>

        <transition name="tk-slide-bottom">
          <tk-col span="8" v-show="show">Slide Bottom</tk-col>
        </transition>
      </tk-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="postcss">
.demo-tku-css {
  .tk-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .tk-hairline--top {
    height: 30px;
    background-color: #fff;

    &::after {
      top: 15px;
    }
  }

  .tk-col {
    height: 50px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    background-color: #39a9ed;
  }

  .tk-switch-cell {
    margin-bottom: 15px;
  }
}
</style>
