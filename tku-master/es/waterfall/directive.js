import Utils from '../utils/scroll';
import { on, off } from '../utils/event';

var CONTEXT = '@@Waterfall';
var OFFSET = 300;

// 绑定事件到元素上
// 读取基本的控制变量
function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }
  this.el[CONTEXT].binded = true;

  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = Utils.getScrollEventTarget(this.el);

  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;
      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;

  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);

  this.scrollEventListener();
}

// 处理滚动函数
function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget;
  // 已被禁止的滚动处理
  if (this.disabled) return;

  var targetScrollTop = Utils.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = Utils.getVisibleHeight(scrollEventTarget);
  // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离
  var targetBottom = targetScrollTop + targetVisibleHeight;

  // 如果无元素高度，考虑为元素隐藏，直接返回
  if (!targetVisibleHeight) return;

  // 判断是否到了底
  var needLoadMoreToLower = false;
  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = Utils.getElementTop(element) - Utils.getElementTop(scrollEventTarget) + Utils.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }
  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({ target: scrollEventTarget, top: targetScrollTop });
  }

  // 判断是否到了顶
  var needLoadMoreToUpper = false;
  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = Utils.getElementTop(element) - Utils.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }
  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({ target: scrollEventTarget, top: targetScrollTop });
  }
}

// 绑定事件
function startBind(el) {
  var context = el[CONTEXT];

  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
}

// 确认何时绑事件监听函数
function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

export default function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }
      el[CONTEXT].cb[type] = binding.value;

      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];
      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
};