import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"Description 详情组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useDescription","slug":"usedescription"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"DescItem","slug":"descitem"}],"relativePath":"components/desc.md","lastUpdated":1633447264289}',p={},o=a('<h1 id="description-详情组件"><a class="header-anchor" href="#description-详情组件" aria-hidden="true">#</a> Description 详情组件</h1><p>对 <code>antv</code> 的 Descriptions 组件进行封装</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>基础示例<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:collapseOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ canExpand: true, helpMessage: <span class="token punctuation">&#39;</span>help me<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mockData<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Description<span class="token punctuation">,</span> DescItem<span class="token punctuation">,</span> useDescription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Description/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> mockData<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>\n    username<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>\n    nickName<span class="token operator">:</span> <span class="token string">&#39;VB&#39;</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n    phone<span class="token operator">:</span> <span class="token string">&#39;15695909xxx&#39;</span><span class="token punctuation">,</span>\n    email<span class="token operator">:</span> <span class="token string">&#39;190848757@qq.com&#39;</span><span class="token punctuation">,</span>\n    addr<span class="token operator">:</span> <span class="token string">&#39;厦门市思明区&#39;</span><span class="token punctuation">,</span>\n    sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>\n    certy<span class="token operator">:</span> <span class="token string">&#39;3504256199xxxxxxxxx&#39;</span><span class="token punctuation">,</span>\n    tag<span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> schema<span class="token operator">:</span> DescItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      field<span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>\n      label<span class="token operator">:</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      field<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>\n      label<span class="token operator">:</span> <span class="token string">&#39;昵称&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">curVal<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>curVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      field<span class="token operator">:</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">,</span>\n      label<span class="token operator">:</span> <span class="token string">&#39;联系电话&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      field<span class="token operator">:</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span>\n      label<span class="token operator">:</span> <span class="token string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      field<span class="token operator">:</span> <span class="token string">&#39;addr&#39;</span><span class="token punctuation">,</span>\n      label<span class="token operator">:</span> <span class="token string">&#39;地址&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Description<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;useDescription&#39;</span><span class="token punctuation">,</span>\n        data<span class="token operator">:</span> mockData<span class="token punctuation">,</span>\n        schema<span class="token operator">:</span> schema<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> mockData<span class="token punctuation">,</span> schema<span class="token punctuation">,</span> register <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="usedescription"><a class="header-anchor" href="#usedescription" aria-hidden="true">#</a> useDescription</h2><p>参考以上示例</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span>Props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>除以下参数外，官方文档内的 props 也都支持，具体可以参考 <a href="https://2x.antdv.com/components/descriptions-cn/#API" target="_blank" rel="noopener noreferrer">antv Description</a></p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>标题</td></tr><tr><td>size</td><td><code>string</code></td><td>small</td><td>-</td><td>大小</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td>true</td><td>-</td><td>是否展示边框</td></tr><tr><td>column</td><td><code>Number, Object</code></td><td><code>{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }</code></td><td>-</td><td>一行的 <code>DescriptionItems</code> 数量</td></tr><tr><td>useCollapse</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否包裹 CollapseContainer 组件</td></tr><tr><td>collapseOptions</td><td><code>Object</code></td><td>-</td><td>-</td><td><code>CollapseContainer</code> 组件属性</td></tr><tr><td>schema</td><td><code>DescItem[]</code></td><td>-</td><td>-</td><td>详情项配置，见下方 <code>DescItem</code> 配置</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>数据源</td></tr></tbody></table><h2 id="descitem"><a class="header-anchor" href="#descitem" aria-hidden="true">#</a> DescItem</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>-</td><td>-</td><td>字段名</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>-</td><td>标签名</td></tr><tr><td>labelMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>label 最小宽度</td></tr><tr><td>contentMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>content 最小宽度</td></tr><tr><td>labelStyle</td><td><code>any</code></td><td>-</td><td>-</td><td>label 样式</td></tr><tr><td>span</td><td><code>number</code></td><td>-</td><td>-</td><td>和并列数量</td></tr><tr><td>show</td><td><code>(data)=&gt;boolean</code></td><td>-</td><td>-</td><td>动态判断当前组件是否显示</td></tr><tr><td>render</td><td><code>(val: string, data: any)=&gt;VNode,undefined,Element,string,number</code></td><td>-</td><td>-</td><td>自定义渲染 content</td></tr></tbody></table>',12);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
