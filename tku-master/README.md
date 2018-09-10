## 快速上手

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

```js
import { Button, Cell } from 'tku';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'tku/lib/button';
import 'tku/lib/tku-css/base.css';
import 'tku/lib/tku-css/button.css';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Tku from 'tku';
import 'tku/lib/tku-css/index.css';

Vue.use(Tku);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件
