<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-button @click="showImagePreview">预览图片</tk-button>
    </demo-block>

    <demo-block title="指定初始位置">
      <tk-button @click="showImagePreview(1)">指定初始位置</tk-button>
    </demo-block>

    <demo-block title="手动关闭">
      <tk-button @click="showImagePreview(0, 1000)">手动关闭</tk-button>
    </demo-block>
  </demo-section>
</template>

<script>
import { ImagePreview } from '../../../packages';

export default {
  methods: {
    showImagePreview(position, timer) {
      const instance = ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ], typeof position === 'number' ? position : 0);

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-image-preview {
  .tk-button {
    margin-left: 15px;
  }
}
.tk-image-preview {
  img {
    pointer-events: none;
  }
}
</style>
