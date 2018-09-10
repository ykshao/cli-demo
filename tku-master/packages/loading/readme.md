## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'tku';

Vue.use(Loading);
```

### 代码演示

#### Circular

```html
<tk-loading color="black" />
<tk-loading color="white" />
```

#### Spinner

```html
<tk-loading type="spinner" color="black" />
<tk-loading type="spinner" color="white" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色，可选值为 `block` `white` | `String` | `black` |
| type | 类型，可选值为 `circular` `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |
