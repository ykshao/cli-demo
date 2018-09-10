<template>
  <transition name="tk-dialog-bounce">
    <div v-show="value" :class="[b(), className]">
      <div v-if="title" v-text="title" :class="b('header', { isolated: !message && !$slots.default })" />
      <div :class="b('content')" v-if="message || $slots.default">
        <slot>
          <div v-if="message" v-html="message" :class="b('message', { 'has-title': title })" />
        </slot>
      </div>
      <div class="tk-hairline--top" :class="b('footer', { 'buttons': showCancelButton && showConfirmButton })">
        <tk-button
          v-show="showCancelButton"
          :loading="loading.cancel"
          size="large"
          :class="b('cancel')"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || '取消' }}
        </tk-button>
        <tk-button
          v-show="showConfirmButton"
          size="large"
          :loading="loading.confirm"
          :class="[b('confirm'), { 'tk-hairline--left': showCancelButton && showConfirmButton }]"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || '确认' }}
        </tk-button>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import TkButton from '../button';
import Popup from '../mixins/popup';

export default create({
  name: 'dialog',

  components: {
    TkButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});
</script>
