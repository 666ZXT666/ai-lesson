## 层叠上下文

# 页面渲染规则


- 文档流
  body 开始 从上到下，从左到右

- 布局 Layout 
- 盒模型 盒子（本身）大小 
  box-sizing border + padding + content
  盒模型 标准盒模型 content-box  wd content
  IE盒模型 border-box
- 认标签，也可转变 display
  块级元素 inline
  行内元素 inline 不能用来做盒子 不能设置宽高 宽高由内容决定
  块级元素为何默认宽度是100% 
  html 是第一个BFC 元素， body 参与html的BFC
   页面显示由html负责 页面的布局 块级元素从上到下 行内元素从左到右

- display

- BFC Block Formatting Context 块级格式化上下文 
  - html是根元素，也是最大顶级的BFC
  - context 块级元素从上到下，行内元素从左到右

- 格式化上下文？ Formatting Context 我跟谁混
  - 为何弹性布局 打破了html BFC 的规则？
    - BFC 不是某个元素的特例，弹性布局，创立了一个新的BFC 
    - BFC 不受外界影响，全新的独立渲染区域 FFC Flex Formatting Context 
      flex-direction:row|column
  - GFC 网格布局 

# BFC

- html 是最大顶级的BFC
- block level box 垂直方向，一个接一个的放置，且宽度100%
- 盒子垂直方向的距离由margin 决定 ，同一个BFC 的相邻盒子margin 会重叠 大的说了算
- 每个元素的margin左边，与包含border的左边相接触，即使存在浮动也一样
- BFC 区域不会与float box 重叠
- 独立的渲染区域，不受外界影响
- 计算BFC的高度时，浮动元素也参与计算

- 触发新BFC
  - overflow: hidden 不为visible 水杯盛开水
