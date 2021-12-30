# markdown-preview-vue

[English Doc](./README.en-US.md)

vue markdown 预览组件

## 安装

```shell
npm i markdown-preview-vue -S

# 或

yarn add markdown-preview-vue
```

## 使用
### 局部注册
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

### 全局注册
```javascript
// main.js
import Vue from 'vue'
import MarkdownPreview from 'markdown-preview-vue'

Vue.use(MarkdownPreview)
```
