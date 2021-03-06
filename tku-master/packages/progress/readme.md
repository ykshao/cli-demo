## Progress 进度条

### 使用指南
``` javascript
import { Progress } from 'tku';

Vue.use(Progress);
```

### 代码演示

#### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<tk-progress :percentage="50" />
```


#### 置灰

```html
<tk-progress inactive :percentage="50" />
```


#### 样式定制

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

```html
<tk-progress
  pivot-text="橙色"
  color="#f2826a"
  :percentage="25"
/>

<tk-progress
  pivot-text="红色"
  color="#f3594b"
  :percentage="50"
/>

<tk-progress
  :percentage="75"
  pivot-text="紫色"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| inactive | 是否置灰 | `Boolean` | `false` |
| percentage | 进度百分比 | `Number` | `false` |
| show-pivot | 是否显示进度文字 | `Boolean` | `true` |
| color | 进度条颜色 | `String` | `#38f` |
| text-color | 进度条文字颜色 | `String` | `#fff` |
| pivot-text | 文字显示 | `String` | 百分比文字 |
| pivot-color | 文字背景色 | `String` | 与进度条颜色一致 |
