# <!DOCTYPE> 声明
<!DOCTYPE> 声明位于HTML文档的顶部，用于指定文档的类型和版本。它不是HTML标签，而是一个文档类型声明。它的主要作用是告诉浏览器使用哪个HTML版本来解析文档。例如，常见的HTML5声明是
```
<!DOCTYPE html>
```
这告诉浏览器这是一个HTML5文档。正确的文档类型声明有助于确保浏览器正确解释和呈现网页。

# head 标签
**head** 标签位于HTML文档的头部，用于包含与文档相关的元信息（metadata），例如标题、字符集声明、链接到外部资源等。在**head** 标签中定义的信息不会在页面上直接显示给用户，而是提供给浏览器和搜索引擎等使用。常见的在**head** 中使用的元素包括：

- **title**：定义网页的标题，显示在浏览器标签页或窗口标题中。
- **meta**：用于设置字符集、描述、关键字等元数据。
- **link**：用于引入外部样式表（CSS文件）。
- **script**：引入JavaScript代码或外部脚本文件。

# body标签
**body**标签定义了HTML文档的主要内容区域，其中包含了在浏览器中显示给用户的实际页面内容，例如文本、图像、链接等。这些内容会在浏览器中进行渲染和显示。**body** 标签通常包括网页的结构和布局


综合起来，<!DOCTYPE> 声明用于声明文档类型和版本，**head** 标签包含文档的元信息，而**body** 标签则包含实际的可见内容。这三个标签在构建HTML文档中起着不同但关键的作用

# h5新特性
- 新增选择器 document.querySelector、document.querySelectorAll
- 拖拽释放(Drag and drop) API
- 媒体播放的 video 和 audio
- 本地存储 localStorage 和 sessionStorage
- 离线应用 manifest
- 桌面通知 Notifications
- 语意化标签 article、footer、header、nav、section
- 增强表单控件 calendar、date、time、email、url、search
- 地理位置 Geolocation
- 多任务 webworker
- 全双工通信协议 websocket
- 历史管理 history
- 跨域资源共享(CORS) Access-Control-Allow-Origin
- 页面可见性改变事件 visibilitychange
- 跨窗口通信 PostMessage
- Form Data 对象
- 绘画 canvas
