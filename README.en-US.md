# markdown-preview-vue

vue markdown preview component

## Installation

```shell
npm i markdown-preview-vue -S

// or

yarn add markdown-preview-vue
```

## Usage
### Local Registration
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

### Global Registration
```javascript
// main.js
import Vue from 'vue'
import MarkdownPreview from 'markdown-preview-vue'

Vue.use(MarkdownPreview)
```
