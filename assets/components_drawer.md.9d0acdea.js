import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"Drawer 抽屉组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useDrawer","slug":"usedrawer"},{"level":2,"title":"useDrawerInner","slug":"usedrawerinner"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/drawer.md","lastUpdated":1633447264289}',p={},o=s('<h1 id="drawer-抽屉组件"><a class="header-anchor" href="#drawer-抽屉组件" aria-hidden="true">#</a> Drawer 抽屉组件</h1><p>对 <code>antv</code> 的 drawer 组件进行封装，扩展拖拽，全屏，自适应高度等功能。</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><strong>由于 drawer 内部代码一般独立成单独文件，推荐独立成组件来进行开发，所以示例都是以独立的文件来进行说明</strong></p><p><strong>独立组件代码，用于写组件内部的内容</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicDrawer</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Drawer Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Drawer Info. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicDrawer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicDrawer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Drawer&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicDrawer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>页面引用弹窗</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Drawer</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useDrawer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Drawer&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> Drawer <span class="token keyword">from</span> <span class="token string">&#39;./Drawer.vue&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Drawer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openDrawer <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        register<span class="token punctuation">,</span>\n        openDrawer<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="usedrawer"><a class="header-anchor" href="#usedrawer" aria-hidden="true">#</a> useDrawer</h2><p><strong>useDrawer</strong> 用于操作组件</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openDrawer<span class="token punctuation">,</span> setDrawerProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>register</strong></p><p>register 用于注册 <code>useDrawer</code>，如果需要使用 <code>useDrawer</code> 提供的 api，必须将 <code>register</code> 传入组件的 <code>onRegister</code>。</p><p>原理其实很简单，就是 vue 的组件子传父通信，内部通过 <code>emit(&quot;register&quot;，instance)</code> 实现。</p><p>同时，独立出去的组件需要将 <code>attrs</code> 绑定到 Drawer 的上面。</p><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BasicDrawer</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> Drawer Info. </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BasicDrawer</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>openDrawer</strong></p><p>用于打开/关闭弹窗</p><div class="language-ts"><pre><code><span class="token comment">// true/false: 打开关闭弹窗</span>\n<span class="token comment">// data: 传递到子组件的数据</span>\n<span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>closeDrawer</strong></p><p>用于关闭弹窗</p><div class="language-ts"><pre><code><span class="token function">closeDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>setDrawerProps</strong></p><p>用于更改 drawer 的 props 参数因为 drawer 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 <strong>setDrawerProps</strong> 方便更改内部 drawer 的 props</p><p><a href="#Props">Props</a> 内容可以见下方</p><div class="language-ts"><pre><code><span class="token function">setDrawerProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="usedrawerinner"><a class="header-anchor" href="#usedrawerinner" aria-hidden="true">#</a> useDrawerInner</h2><p>用于独立的 Drawer 内部调用</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicDrawer</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Drawer Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    Drawer Info.\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeDrawer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内部关闭drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicDrawer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicDrawer<span class="token punctuation">,</span> useDrawerInner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Drawer&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicDrawer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeDrawer <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDrawerInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> closeDrawer <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>useModalInner</strong>用于操作独立组件</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModalInner</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>callback</strong></p><p>type: <code>(data:any)=&gt;void</code></p><p>回调函数用于接收 openDrawer 第二个参数传递的值</p><div class="language-ts"><pre><code><span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>closeDrawer</strong></p><p>用于关闭抽屉</p><div class="language-ts"><pre><code><span class="token function">closeDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>changeOkLoading</strong></p><p>用于修改确认按钮的 loading 状态</p><div class="language-ts"><pre><code><span class="token comment">// true or false</span>\n<span class="token function">changeOkLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>changeLoading</strong></p><p>用于修改 modal 的 loading 状态</p><div class="language-ts"><pre><code><span class="token comment">// true or false</span>\n<span class="token function">changeLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>setDrawerProps</strong></p><p>用于更改 drawer 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供<strong>setDrawerProps</strong> 方便更改内部 drawer 的 props</p><p><a href="#Props">Props</a> 内容可以见下方</p><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>除以下参数外，官方文档内的 props 也都支持，具体可以参考 <a href="https://2x.antdv.com/components/drawer-cn/#API" target="_blank" rel="noopener noreferrer">antv drawer</a></p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>isDetail</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>是否为详情模式</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>loading 状态</td></tr><tr><td>loadingText</td><td><code>string</code></td><td>``</td><td>-</td><td>loading 文本 s</td></tr><tr><td>showDetailBack</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>isDetail=true 状态下是否显示返回按钮</td></tr><tr><td>closeFunc</td><td><code>() =&gt; Promise&lt;any&gt;</code></td><td>-</td><td>-</td><td>自定义关闭函数</td></tr><tr><td>showFooter</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否显示底部</td></tr><tr><td>footerHeight</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>底部区域高度</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td><code>(e)=&gt;void</code></td><td>点击关闭回调</td></tr><tr><td>visible-change</td><td><code>(visible:boolean)=&gt;void</code></td><td>弹窗打开关闭时触发</td></tr><tr><td>ok</td><td><code>(e)=&gt;void</code></td><td>点击确定回调</td></tr></tbody></table>',52);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};
