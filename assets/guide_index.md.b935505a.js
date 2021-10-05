import{o as n,c as s,a}from"./app.b2699450.js";const e='{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"环境准备","slug":"环境准备"},{"level":2,"title":"工具配置","slug":"工具配置"},{"level":2,"title":"代码获取","slug":"代码获取"},{"level":3,"title":"从 GitHub 获取代码","slug":"从-github-获取代码"},{"level":3,"title":"从 Gitee 获取代码","slug":"从-gitee-获取代码"},{"level":2,"title":"安装","slug":"安装"},{"level":3,"title":"安装 Node.js","slug":"安装-node-js"},{"level":3,"title":"安装依赖","slug":"安装依赖"},{"level":3,"title":"imagemin 依赖安装失败解决方法","slug":"imagemin-依赖安装失败解决方法"},{"level":2,"title":"npm script","slug":"npm-script"},{"level":3,"title":"生成图标集","slug":"生成图标集"},{"level":3,"title":"重新安装依赖","slug":"重新安装依赖"},{"level":2,"title":"目录说明","slug":"目录说明"}],"relativePath":"guide/index.md","lastUpdated":1633447264293}',t={},o=a('<h1 id="开始"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>本文会帮助你从头启动项目</p><h2 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><div class="tip custom-block"><p class="custom-block-title">关于组件</p><p>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p></div><h2 id="环境准备"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><p>本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x</a>、<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x</a>，否则依赖可能安装不上。</li><li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 版本要求<code>12.x</code>以上，且不能为<code>13.x</code>版本，这里推荐 <code>14.x</code> 及以上。</li></ul></div><h2 id="工具配置"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2><p>如果您使用的 IDE 是<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode</a>(推荐)的话，可以安装以下工具来提高开发效率及代码格式化</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noopener noreferrer">Iconify IntelliSense</a> - Iconify 图标插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noopener noreferrer">windicss IntelliSense</a> - windicss 提示插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally</a> - i18n 插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur</a> - vue 开发必备 （也可以选择 Volar）</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint</a> - 脚本代码检查</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier</a> - 代码格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">Stylelint</a> - css 格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV</a> - .env 文件 高亮</li></ul><h2 id="代码获取"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p></div><h3 id="从-github-获取代码"><a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a> 从 GitHub 获取代码</h3><div class="language-bash"><pre><code><span class="token comment"># clone 代码</span>\n<span class="token function">git</span> clone https://github.com/anncwb/vue-vben-admin\n\n</code></pre></div><h3 id="从-gitee-获取代码"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3><p>如果从 github clone 代码较慢的话，可以尝试用 <a href="https://gitee.com/annsion/vue-vben-admin" target="_blank" rel="noopener noreferrer">Gitee</a> 同步代码到自己的仓库，再 clone 下来即可。</p><p>也可以通过下方地址进行 clone</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://gitee.com/annsion/vue-vben-admin\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><a href="https://gitee.com/annsion/vue-vben-admin" target="_blank" rel="noopener noreferrer">Gitee</a>的代码可能不是最新的</p></div><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装-node-js"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3><p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>，请安装它。</p><p><strong>验证</strong></p><div class="language-bash"><pre><code><span class="token comment"># 出现相应npm版本即可</span>\n<span class="token function">npm</span> -v\n<span class="token comment"># 出现相应node版本即可</span>\nnode -v\n\n</code></pre></div><p>如果你需要同时存在多个 node 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</p><h3 id="安装依赖"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><h4 id="yarn-安装"><a class="header-anchor" href="#yarn-安装" aria-hidden="true">#</a> yarn 安装</h4><p>必须使用 <a href="https://github.com/yarnpkg/yarn" target="_blank" rel="noopener noreferrer">Yarn</a>进行依赖安装（若其他包管理器安装不了需要自行处理）。</p><p>如果未安装<code>yarn</code>，可以用下面命令来进行全局安装</p><div class="language-bash"><pre><code><span class="token comment"># 全局安装yarn</span>\n<span class="token function">npm</span> i -g <span class="token function">yarn</span>\n<span class="token comment"># 验证</span>\n<span class="token function">yarn</span> -v <span class="token comment"># 出现对应版本号即代表安装成功</span>\n</code></pre></div><h4 id="依赖安装命令"><a class="header-anchor" href="#依赖安装命令" aria-hidden="true">#</a> 依赖安装命令</h4><p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p><div class="language-bash"><pre><code><span class="token comment"># 安装依赖</span>\n<span class="token function">yarn</span>\n</code></pre></div><h3 id="imagemin-依赖安装失败解决方法"><a class="header-anchor" href="#imagemin-依赖安装失败解决方法" aria-hidden="true">#</a> imagemin 依赖安装失败解决方法</h3><p>由于 imagemin 在国内安装困难，提供以下几个解决方案：</p><ol><li>使用 yarn 在 package.json 内配置(推荐，项目内已集成，前提是必须使用 yarn)</li></ol><div class="language-json"><pre><code><span class="token property">&quot;resolutions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;bin-wrapper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm:bin-wrapper-china&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="2"><li>使用 npm，在电脑 host 文件加上如下配置即可</li></ol><div class="language-bash"><pre><code><span class="token number">199.232</span>.4.133 raw.githubusercontent.com\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">安装依赖时 husky 安装失败</p><p>请查看你的源码是否从 github 直接下载的，直接下载是没有 <code>.git</code> 文件夹的，而 <code>husky</code> 需要依赖 <code>git</code> 才能安装。此时需使用 <code>git init</code> 初始化项目，再尝试重新安装即可。</p></div><h2 id="npm-script"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2><div class="language-bash"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n  <span class="token comment"># 安装依赖</span>\n  <span class="token string">&quot;bootstrap&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn install&quot;</span>,\n  <span class="token comment"># 运行项目</span>\n  <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run dev&quot;</span>,\n  <span class="token comment"># 运行项目</span>\n  <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite&quot;</span>,\n  <span class="token comment"># 构建项目</span>\n  <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite build &amp;&amp; esno ./build/script/postBuild.ts&quot;</span>,\n  <span class="token comment"># 清空缓存后构建项目</span>\n  <span class="token string">&quot;build:no-cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn clean:cache &amp;&amp; npm run build&quot;</span>,\n  <span class="token comment"># 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看</span>\n  <span class="token string">&quot;report&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env REPORT=true npm run build&quot;</span>,\n  <span class="token comment"># 类型检查</span>\n  <span class="token string">&quot;type:check&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vue-tsc --noEmit --skipLibCheck&quot;</span>,\n  <span class="token comment"># 预览打包后的内容（先打包在进行预览）</span>\n  <span class="token string">&quot;preview&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build &amp;&amp; vite preview&quot;</span>,\n  <span class="token comment"># 直接预览本地 dist 文件目录</span>\n  <span class="token string">&quot;preview:dist&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview&quot;</span>,\n  <span class="token comment"># 生成 ChangeLog</span>\n  <span class="token string">&quot;log&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>,\n  <span class="token comment"># 删除缓存</span>\n  <span class="token string">&quot;clean:cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite&quot;</span>,\n  <span class="token comment"># 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)</span>\n  <span class="token string">&quot;clean:lib&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules&quot;</span>,\n  <span class="token comment"># 执行 eslint 校验，并修复部分问题</span>\n  <span class="token string">&quot;lint:eslint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint <span class="token entity" title="\\&quot;">\\&quot;</span>{src,mock}/**/*.{vue,ts,tsx}<span class="token entity" title="\\&quot;">\\&quot;</span> --fix&quot;</span>,\n  <span class="token comment"># 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）</span>\n  <span class="token string">&quot;lint:prettier&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;prettier --write --loglevel warn <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{js,json,tsx,css,less,scss,vue,html,md}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,\n  <span class="token comment"># 执行 stylelint 格式化</span>\n  <span class="token string">&quot;lint:stylelint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --fix <span class="token entity" title="\\&quot;">\\&quot;</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span> --cache --cache-location node_modules/.cache/stylelint/&quot;</span>,\n  <span class="token string">&quot;lint:lint-staged&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span>,\n  <span class="token string">&quot;lint:pretty&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pretty-quick --staged&quot;</span>,\n  <span class="token comment"># 对打包结果进行 gzip 测试</span>\n  <span class="token string">&quot;test:gzip&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --gzip -c-1&quot;</span>,\n  <span class="token comment"># 对打包目录进行 brotli 测试</span>\n  <span class="token string">&quot;test:br&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --brotli -c-1&quot;</span>,\n  <span class="token comment"># 重新安装依赖，见下方说明</span>\n  <span class="token string">&quot;reinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf yarn.lock &amp;&amp; rimraf package.lock.json &amp;&amp; rimraf node_modules &amp;&amp; npm run bootstrap&quot;</span>,\n  <span class="token string">&quot;install:husky&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;is-ci || husky install&quot;</span>,\n  <span class="token comment"># 生成图标集，见下方说明</span>\n  <span class="token string">&quot;gen:icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;esno ./build/generate/icon/index.ts&quot;</span>,\n  <span class="token string">&quot;postinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run install:husky&quot;</span>\n<span class="token punctuation">}</span>,\n</code></pre></div><h3 id="生成图标集"><a class="header-anchor" href="#生成图标集" aria-hidden="true">#</a> 生成图标集</h3><p>该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 <a href="./../dep/icon.html#图标集预生成">图标集生成</a></p><h3 id="重新安装依赖"><a class="header-anchor" href="#重新安装依赖" aria-hidden="true">#</a> 重新安装依赖</h3><p>该命令会先删除 <code>node_modules</code>、<code>yarn.lock</code>、<code>package.lock.json</code> 后再进行依赖重新安装（安装速度会明显变慢）。</p><p>接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。</p><h2 id="目录说明"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2><div class="language-bash"><pre><code>\n<span class="token builtin class-name">.</span>\n├── build <span class="token comment"># 打包脚本相关</span>\n│   ├── config <span class="token comment"># 配置文件</span>\n│   ├── generate <span class="token comment"># 生成器</span>\n│   ├── script <span class="token comment"># 脚本</span>\n│   └── vite <span class="token comment"># vite配置</span>\n├── mock <span class="token comment"># mock文件夹</span>\n├── public <span class="token comment"># 公共静态资源目录</span>\n├── src <span class="token comment"># 主目录</span>\n│   ├── api <span class="token comment"># 接口文件</span>\n│   ├── assets <span class="token comment"># 资源文件</span>\n│   │   ├── icons <span class="token comment"># icon sprite 图标文件夹</span>\n│   │   ├── images <span class="token comment"># 项目存放图片的文件夹</span>\n│   │   └── svg <span class="token comment"># 项目存放svg图片的文件夹</span>\n│   ├── components <span class="token comment"># 公共组件</span>\n│   ├── design <span class="token comment"># 样式文件</span>\n│   ├── directives <span class="token comment"># 指令</span>\n│   ├── enums <span class="token comment"># 枚举/常量</span>\n│   ├── hooks <span class="token comment"># hook</span>\n│   │   ├── component <span class="token comment"># 组件相关hook</span>\n│   │   ├── core <span class="token comment"># 基础hook</span>\n│   │   ├── event <span class="token comment"># 事件相关hook</span>\n│   │   ├── setting <span class="token comment"># 配置相关hook</span>\n│   │   └── web <span class="token comment"># web相关hook</span>\n│   ├── layouts <span class="token comment"># 布局文件</span>\n│   │   ├── default <span class="token comment"># 默认布局</span>\n│   │   ├── iframe <span class="token comment"># iframe布局</span>\n│   │   └── page <span class="token comment"># 页面布局</span>\n│   ├── locales <span class="token comment"># 多语言</span>\n│   ├── logics <span class="token comment"># 逻辑</span>\n│   ├── main.ts <span class="token comment"># 主入口</span>\n│   ├── router <span class="token comment"># 路由配置</span>\n│   ├── settings <span class="token comment"># 项目配置</span>\n│   │   ├── componentSetting.ts <span class="token comment"># 组件配置</span>\n│   │   ├── designSetting.ts <span class="token comment"># 样式配置</span>\n│   │   ├── encryptionSetting.ts <span class="token comment"># 加密配置</span>\n│   │   ├── localeSetting.ts <span class="token comment"># 多语言配置</span>\n│   │   ├── projectSetting.ts <span class="token comment"># 项目配置</span>\n│   │   └── siteSetting.ts <span class="token comment"># 站点配置</span>\n│   ├── store <span class="token comment"># 数据仓库</span>\n│   ├── utils <span class="token comment"># 工具类</span>\n│   └── views <span class="token comment"># 页面</span>\n├── <span class="token builtin class-name">test</span> <span class="token comment"># 测试</span>\n│   └── server <span class="token comment"># 测试用到的服务</span>\n│       ├── api <span class="token comment"># 测试服务器</span>\n│       ├── upload <span class="token comment"># 测试上传服务器</span>\n│       └── websocket <span class="token comment"># 测试ws服务器</span>\n├── types <span class="token comment"># 类型文件</span>\n├── vite.config.ts <span class="token comment"># vite配置文件</span>\n└── windi.config.ts <span class="token comment"># windcss配置文件</span>\n\n</code></pre></div>',49);t.render=function(a,e,t,p,l,c){return n(),s("div",null,[o])};export default t;export{e as __pageData};
