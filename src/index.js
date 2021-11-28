import MarkdownPreview from './markdown-preview.vue'

MarkdownPreview.install = function (Vue) {
    Vue.component(MarkdownPreview.name, MarkdownPreview)
}

export default MarkdownPreview
