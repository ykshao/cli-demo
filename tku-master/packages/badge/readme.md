## Badge 徽章

### 使用指南
``` javascript
import { Badge, BadgeGroup } from 'tku';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### 代码演示

#### 基础用法

通过在`tk-badge-group`上设置`active-key`属性来控制选中的`badge`

```html
<tk-badge-group :active-key="activeKey">
  <tk-badge title="标签名称" @click="onClick" />
  <tk-badge title="标签名称" @click="onClick" info="8" />
  <tk-badge title="标签名称" @click="onClick" info="99" />
  <tk-badge title="标签名称" @click="onClick" info="199" />
</tk-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| active-key | 选中`badge`的索引 | `String | Number` | `0` |

### Badge API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 内容 | `String` | `''` |
| info | 提示消息 | `String | Number` | `''` |
| url | 跳转链接 | `String` | - |
