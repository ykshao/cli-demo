
import create from '../utils/create';
import { raf } from '../utils/raf';
import { on, off } from '../utils/event';
import scrollUtils from '../utils/scroll';
import Touch from '../mixins/touch';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type]) }, [_c('div', { ref: "wrap", class: [_vm.b('wrap', [_vm.position, { scrollable: _vm.scrollable }]), { 'tk-hairline--top-bottom': _vm.type === 'line' }] }, [_c('div', { ref: "nav", class: _vm.b('nav', [_vm.type]) }, [_vm.type === 'line' ? _c('div', { class: _vm.b('line'), style: _vm.lineStyle }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', { ref: "tabs", refInFor: true, staticClass: "tk-tab", class: {
          'tk-tab--active': index === _vm.curActive,
          'tk-tab--disabled': tab.disabled
        }, on: { "click": function click($event) {
            _vm.onClick(index);
          } } }, [_c('span', { ref: "title", refInFor: true, staticClass: "tk-ellipsis" }, [_vm._v(_vm._s(tab.title))])]);
    })], 2)]), _c('div', { ref: "content", class: _vm.b('content') }, [_vm._t("default")], 2)]);
  },

  name: 'tabs',

  mixins: [Touch],

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data: function data() {
    return {
      tabs: [],
      position: 'content-top',
      curActive: 0,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },


  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    }
  },

  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        scrollUtils.setScrollTop(this.scrollEl, scrollUtils.getElementTop(this.$el));
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(function () {
      _this.handlers(true);
      _this.scrollIntoView();
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handlers(true);
    });
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },


  methods: {
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;

      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind;

      // listen to window resize event
      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      }

      // listen to scroll event
      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      }

      // listen to touch event
      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;

        var action = swipeable ? on : off;

        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },


    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;

      var minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },


    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = scrollUtils.getScrollTop(this.scrollEl);
      var elTopToPageTop = scrollUtils.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'content-bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'page-top';
      } else {
        this.position = 'content-top';
      }
    },


    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      this.$nextTick(function () {
        if (!_this3.$refs.tabs || _this3.type !== 'line') {
          return;
        }

        var tab = _this3.$refs.tabs[_this3.curActive];
        var width = _this3.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        _this3.lineStyle = {
          width: width + 'px',
          transform: 'translateX(' + left + 'px)',
          transitionDuration: _this3.duration + 's'
        };
      });
    },


    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      this.curActive = active;
      this.$emit('input', active);
    },


    // emit event when clicked
    onClick: function onClick(index) {
      var _tabs$index = this.tabs[index],
          title = _tabs$index.title,
          disabled = _tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.$emit('click', index, title);
        this.setCurActive(index);
      }
    },


    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;


      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
    },


    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to) {
      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);
      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          raf(animate);
        }
      };
      animate();
    },


    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var title = _this4.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    }
  }
});