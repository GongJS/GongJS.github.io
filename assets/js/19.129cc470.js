(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{183:function(t,s,a){t.exports=a.p+"assets/img/BFC-1.c86be96e.jpg"},184:function(t,s,a){t.exports=a.p+"assets/img/BFC-2.7aad7e7a.jpg"},185:function(t,s,a){t.exports=a.p+"assets/img/BFC-孙子.358ae27d.jpg"},186:function(t,s,a){t.exports=a.p+"assets/img/BFC-哥哥.d444895f.jpg"},187:function(t,s,a){t.exports=a.p+"assets/img/BFC-弟弟.6765f0da.jpg"},274:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("下列方式会创建块格式化上下文：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("用 BFC 包住浮动元素。(这不是清除浮动，clearfix 才是用来清除浮动)"),n("a",{attrs:{href:"http://js.jirengu.com/rarab/2/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线编辑"),n("OutboundLink")],1)]),t._v(" "),t._m(4),n("p",[t._v("当子元素浮动的时候，父元素会出现坍塌的情况：\n"),n("img-wrapper",[n("img",{attrs:{src:a(183)}})]),t._v("\n当我们给父元素加上"),n("code",[t._v("display:inline-block;")]),t._v("的时候，这时候父元素触发了 BFC,能把子元素给包裹住(类似清除浮动)\n"),n("img-wrapper",[n("img",{attrs:{src:a(184)}})]),t._v("\n按照 BFC 基本概念的定义，只要我们给父元素加上"),n("code",[t._v("position:absolute;overflow:hidden;")]),t._v("等等，只要触发了父元素的 BFC,不管子元素如何浮动，都能被父元素包裹住，也就是说 BFC 会触发父元素重新计算自身的高度,但是不会影响内部元素。")],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("还需要注意的是，父元素只能包裹子元素，不能包裹孙子元素：")]),t._v(" "),t._m(7),n("img-wrapper",[n("img",{attrs:{src:a(185)}})]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[n("a",{attrs:{href:"http://js.jirengu.com/fetew/1/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线编辑"),n("OutboundLink")],1)]),t._v(" "),t._m(10),n("img-wrapper",[n("img",{attrs:{src:a(186)}})]),t._v(" "),n("p",[t._v("从图中可以看出，"),n("code",[t._v("gege")]),t._v("和"),n("code",[t._v("didi")]),t._v("有部分元素重叠了，这时候我们给"),n("code",[t._v("didi")]),t._v("加上"),n("code",[t._v("display:flow-root;")]),t._v("触发 BFC,再看看效果：\n"),n("img-wrapper",[n("img",{attrs:{src:a(187)}})]),t._v("\n重叠的部分就分开了，也是就是说利用 BFC 可以做一个两栏的自适应页面，左边宽度固定，右边自适应。")],1)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("块格式化上下文（Block Formatting Context，BFC）")]),this._v(" 是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("根元素或包含根元素的元素")]),t._v(" "),a("li",[t._v("浮动元素（元素的 float 不是 none）")]),t._v(" "),a("li",[t._v("绝对定位元素（元素的 position 为 absolute 或 fixed）")]),t._v(" "),a("li",[t._v("行内块元素（元素的 display 为 inline-block）")]),t._v(" "),a("li",[t._v("表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）")]),t._v(" "),a("li",[t._v("表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）")]),t._v(" "),a("li",[t._v("匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、")]),t._v(" "),a("li",[t._v("table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）")]),t._v(" "),a("li",[t._v("overflow 值不为 visible 的块元素")]),t._v(" "),a("li",[t._v("display 值为 flow-root 的元素")]),t._v(" "),a("li",[t._v("contain 值为 layout、content 或 strict 的元素")]),t._v(" "),a("li",[t._v("弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）")]),t._v(" "),a("li",[t._v("网格元素（display 为 grid 或 inline-grid 元素的直接子元素）")]),t._v(" "),a("li",[t._v("多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）\ncolumn-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"bfc-使用场景-爸爸管儿子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-使用场景-爸爸管儿子","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 使用场景-爸爸管儿子")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px solid red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".clearfix::after")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("如果只是为了触发父元素的 BFC,推荐用"),s("code",[this._v("display:flow-root;")]),this._v("这样不会给父元素带来额外的属性，不过需要考虑该属性的兼容性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("在触发了 BFC 的父元素内部，子元素之间的 margin 会合并")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v(".parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flow-root"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".child")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".sunzi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".clearfix::after")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("block"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),a("span",{attrs:{class:"token string"}},[t._v('"parent"')]),t._v(">\n    <div class="),a("span",{attrs:{class:"token string"}},[t._v('"child"')]),t._v(">\n      <div class="),a("span",{attrs:{class:"token string"}},[t._v('"sunzi"')]),t._v("></div>\n    </div>\n  </div>\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("这里为了演示效果，把"),a("code",[t._v("child")]),t._v("的高度写死了，如果把"),a("code",[t._v("child")]),t._v("的"),a("code",[t._v("height:100px;")]),t._v("去掉，child 就能包裹住"),a("code",[t._v("sunzi")]),t._v("元素,因为"),a("code",[t._v("child")]),t._v("有"),a("code",[t._v("float:left;")]),t._v("属性，所以作为父元素它本身也触发了 BFC,可以包裹住浮动的子元素。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"bfc-使用场景-兄弟元素之间划清界限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-使用场景-兄弟元素之间划清界限","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 使用场景-兄弟元素之间划清界限")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n   "),a("span",{attrs:{class:"token selector"}},[t._v(".gege")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5px solid red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".didi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("600px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid green"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   <div class="),a("span",{attrs:{class:"token string"}},[t._v('"gege"')]),t._v(">gege</div>\n    <div class="),a("span",{attrs:{class:"token string"}},[t._v('"didi"')]),t._v(">didi</div>\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);