# 前端样式适配的几种策略

## 1.根据不同根据不同的分辨率，加载不同的CSS样式文件（可切换的固定布局）自适应布局
```
<script>
// 分辨率大于等于1680，大部分为1920的情况下，调用此css
if(window.screen.width >= 1680){
document.write('<link rel="stylesheet" href="css/index_1920.css">');
}
// 分辨率再在1600-1680的情况下，调用此css
else if(window.screen.width >= 1600){
document.write('<link rel="stylesheet" href="css/index_1600.css">');
}
// 分辨率小于1600的情况下，调用此css
else{
document.write('<link rel="stylesheet" href="css/index.css">');
}
</script>

可使用媒体查询
media queries :主要通过查询不同的宽度来执行不同的css代码，最终以达到界面的配置。
核心语法：
@media screen and(max-width:600px){
	/**
		*/
	html{
	 font-size:32px;
	}
}
```

## 2.rem布局
根据分辨率的宽度，计算当前屏幕的分辨率宽与设计图宽一个比例值
例如
设计图宽 1366
实际屏幕 1920
比例值 1920/1366

然后把这个比例值赋给body的font-size
- 第一步：给body设置font-size：XXpx; （XX是计算得出的）
- 第二步：对照设计图开发页面时: 设计图是多少px，写css写成多少rem即可


## 3.flex布局
flex+vw的布局方式/flex+百分比的布局方式