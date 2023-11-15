import '@mdxeditor/editor/style.css'

// importing the editor and the plugin from their full paths
import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
import { linkPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin } from '@mdxeditor/editor'

function App() {
  return (
    <MDXEditor markdown='' plugins={[
      headingsPlugin(),
      listsPlugin(),
      linkPlugin(),
      quotePlugin(),
      markdownShortcutPlugin()
    ]} />
  )
}

export default App