(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{561:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变化侦测注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变化侦测注意事项"}},[t._v("#")]),t._v(" 变化侦测注意事项")]),t._v(" "),a("p",[t._v("虽然"),a("code",[t._v("Object.defineProperty()")]),t._v("方法很好用，但也会存在一些例外情况，这些例外情况的变动不能触发"),a("code",[t._v("setter")]),t._v("。这种情况，我们分为对象和数组两类来分析。")]),t._v(" "),a("h2",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),a("p",[t._v("假设我们有如下例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.新增属性b，属性b不是响应式的，不会触发obj的setter")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.delete删除已有属性，无法触发obj的setter")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从以上例子我们可以看到：")]),t._v(" "),a("ul",[a("li",[t._v("当为一个响应式对象新增一个属性的时候，新增的属性不是响应式的，后续对于这个新增属性的任何修改，都无法触发其"),a("code",[t._v("setter")]),t._v("。为了解决这种问题，"),a("code",[t._v("Vue.js")]),t._v("提供了一个全局的"),a("code",[t._v("Vue.set()")]),t._v("方法和实例"),a("code",[t._v("vm.$set()")]),t._v("方法，它们实际上都是同一个"),a("code",[t._v("set")]),t._v("方法，我们会在后续的章节中介绍与响应式相关的全局"),a("code",[t._v("API")]),t._v("的实现。")]),t._v(" "),a("li",[t._v("当一个响应式对象删除一个已有属性的时候，不会触发"),a("code",[t._v("setter")]),t._v("。为了解决这个问题，"),a("code",[t._v("Vue.js")]),t._v("提供了一个全局的"),a("code",[t._v("vue.delete()")]),t._v("方法和实例"),a("code",[t._v("vm.$delete()")]),t._v("方法，它们实际上都是同一个"),a("code",[t._v("del")]),t._v("方法，我们会在后续的章节中介绍与响应式相关的全局"),a("code",[t._v("API")]),t._v("的实现。")])]),t._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("p",[t._v("假设我们有如下例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      arr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.通过索引进行修改，无法捕获到数组的变动。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.通过修改数组长度，无法捕获到数组的变动。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从以上例子我们可以看到：")]),t._v(" "),a("ul",[a("li",[t._v("通过索引直接修改数组，无法捕捉到数组的变动。")]),t._v(" "),a("li",[t._v("通过修改数组长度，无法捕获到数组的变动。")])]),t._v(" "),a("p",[t._v("对于第一种情况，我们可以使用前面提到过的"),a("code",[t._v("Vue.set")]),t._v("或者"),a("code",[t._v("vm.$set")]),t._v("来解决，对于第二种方法，我们可以使用数组的"),a("code",[t._v("splice()")]),t._v("方法解决。")]),t._v(" "),a("p",[t._v("在最新版"),a("code",[t._v("Vue3.0")]),t._v("中，使用到了"),a("code",[t._v("Proxy")]),t._v("来代替"),a("code",[t._v("Object.defineProperty()")]),t._v("实现响应式，使用"),a("code",[t._v("Proxy")]),t._v("后以上问题全部可以解决，然而"),a("code",[t._v("Proxy")]),t._v("属于"),a("code",[t._v("ES6")]),t._v("的内容，因此对于浏览器兼容性方面有一定的要求。")])])}),[],!1,null,null,null);s.default=e.exports}}]);