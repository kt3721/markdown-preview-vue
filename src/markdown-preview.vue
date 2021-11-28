<template>
  <div class="markdown-preview">
    <div
        class="markdown-body"
        v-html="content"
    />
  </div>
</template>

<script>
  import marked from 'marked'
  import domPurify from 'dompurify'
  import 'github-markdown-css'

  export default {
    name: 'MarkdownPreview',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        content: '' // 文档内容
      }
    },
    watch: {
      value: {
        immediate: true,
        handler () {
          this.update()
        }
      }
    },
    methods: {
      // 初始化
      init () {
        customHeading()

        this.isSetCustomHeading = true
      },

      // 更新文档
      update () {
        if (!this.isSetCustomHeading) {
          this.init()
        }

        this.content = markdownToHtml(this.value)

        this.autoScrollToAnchor()
      },

      // 自动滚动 到 锚点位置
      autoScrollToAnchor () {
        if (!location.hash) {
          return
        }

        this.$nextTick(() => {
          const dom = this.$el.querySelector(`a[href="${location.hash}"]`)

          if (dom) {
            dom.scrollIntoView()
          }
        })
      }
    }
  }

  // 自定义 h1~h6 标签内容，添加 锚点
  function customHeading () {
    marked.use({
      renderer: {
        heading: function renderHeading (text, level) {
          const anchorValue = getAnchorValue(text)
          const anchor = getAnchor(anchorValue)

          return `<h${level}>
                    ${anchor}
                    ${text}
                  </h${level}>`
        }
      }
    })
  }

  // markdown 转 HTML
  function markdownToHtml (text) {
    // markdown 转 html
    let html = marked(text)

    // html 处理异常标签、过滤XSS
    html = domPurify.sanitize(html)

    return html
  }

  // 获取 锚点值
  function getAnchorValue (text) {
    // text 中可能包含 html 标签，需要取出最内层的文字，作为 锚点值

    let div = document.createElement('div')
    div.innerHTML = text

    // 将 空格转换为 “-”，字母转换为小写，进行 URI 编码（避免 location.hash 与 锚点值 不一致）
    const value = encodeURI(div.innerText.replace(/\s/g, '-').toLocaleLowerCase())

    div = null

    return value
  }

  // 获取锚点
  function getAnchor (anchorValue) {
    return `<a class="anchor"
              aria-hidden="true"
              onclick="this.scrollIntoView()"
              href="#${anchorValue}">
              <svg class="octicon-link" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
              </svg>
            </a>`
  }
</script>

<style scoped>
  .markdown-preview {
    padding: 32px;
  }
</style>
