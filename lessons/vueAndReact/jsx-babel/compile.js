"use strict";

// 原生js 不支持 jsx语法
var hello = /*#__PURE__*/React.createElement("p", {
  className: "hello"
}, "hello,", /*#__PURE__*/React.createElement("span", null, "world"));
