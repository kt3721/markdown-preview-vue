# markdown-preview-vue

markdown 预览组件

## 安装

```shell
npm i markdown-preview-vue -S
```

## 使用
### 局部引入
```vue
<template>
  <div class="App">
    <markdown-preview v-model="data" />
  </div>
</template>

<script>
  import MarkdownPreview from 'markdown-preview-vue'

  export default {
    name: 'App',
    components: {
      MarkdownPreview
    },
    data() {
      return {
        data: '# markdown-preview'
      }
    }
  }
</script>
```

### 全局引入
```javascript
// main.js
import Vue from 'vue'
import MarkdownPreview from 'markdown-preview-vue'

Vue.use(MarkdownPreview)
```
