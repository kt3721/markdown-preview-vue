<template>
  <div class="App">
    <markdown-preview v-model="data" />
  </div>
</template>

<script>
  import MarkdownPreview from '../src/markdown-preview'
  import data from './data/vue-readme'

  export default {
    name: 'App',
    components: {
      MarkdownPreview
    },
    data() {
      return {
        data
      }
    }
  }
</script>
