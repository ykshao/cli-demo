<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://vue.docschina.org/images/logo.png" >
      <span>Tku</span>
    </h1>
    <h2 class="zanui-desc">轻量、可靠的移动端 Vue 组件库</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';

export default {
  data() {
    return {
      docConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    navList() {
      return this.docConfig.nav || [];
    }
  }
};
</script>

<style lang="postcss">
@import '../../../packages/tku-css/src/common/var.css';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid $blue;
  border-radius: 3px;
  color: $blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}
</style>
