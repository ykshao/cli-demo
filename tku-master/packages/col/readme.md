## Layout 布局

提供了`tk-row`和`tk-col`两个组件来进行行列布局

### 使用指南
``` javascript
import { Row, Col } from 'tku';

Vue.use(Row).use(Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<tk-row>
  <tk-col span="8">span: 8</tk-col>
  <tk-col span="8">span: 8</tk-col>
  <tk-col span="8">span: 8</tk-col>
</tk-row>

<tk-row>
  <tk-col span="4">span: 4</tk-col>
  <tk-col span="10" offset="4">offset: 4, span: 10</tk-col>
</tk-row>

<tk-row>
  <tk-col offset="12" span="12">offset: 12, span: 12</tk-col>
</tk-row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<tk-row gutter="20">
  <tk-col span="8">span: 8</tk-col>
  <tk-col span="8">span: 8</tk-col>
  <tk-col span="8">span: 8</tk-col>
</tk-row>
```

#### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<tk-row type="flex">
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
</tk-row>

<!-- 居中 -->
<tk-row type="flex" justify="center">
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
</tk-row>

<!-- 右对齐 -->
<tk-row type="flex" justify="end">
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
</tk-row>

<!-- 两端对齐 -->
<tk-row type="flex" justify="space-between">
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
</tk-row>

<!-- 每个元素的两侧间隔相等 -->
<tk-row type="flex" justify="space-around">
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
  <tk-col span="6">span: 6</tk-col>
</tk-row>
```

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - |
| tag | 自定义元素标签 | `String` | `div` |
| justify | Flex 主轴对齐方式，可选值为 end/center/space-around/space-between | `String` | `start` |
| align | Flex 交叉轴对齐方式，可选值为 center/bottom | `String` | `top` |

#### Column

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| span | 列元素宽度 | `String | Number` | - |
| offset | 列元素偏移距离 | `String | Number` | - |
| tag | 自定义元素标签 | `String` | `div` |
