<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="demo-uploader-container">
        <tk-uploader :max-size="102400" @oversize="logContent('oversize')" :before-read="beforeRead(1)">
          <tk-icon name="photograph" />
        </tk-uploader>
      </div>
    </demo-block>

    <demo-block title="设置 input 属性">
      <div class="demo-uploader-container">
        <tk-uploader accept="image/gif, image/jpeg" multiple :max-size="36000" @oversize="logContent">
          <tk-icon name="photograph" />
        </tk-uploader>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    logContent(file) {
      console.log(file);
    },

    beforeRead(index) {
      return file => {
        console.log(index, file);
      };
    }
  }
};
</script>

<style lang="postcss">
.demo-uploader {
  &-container {
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>
