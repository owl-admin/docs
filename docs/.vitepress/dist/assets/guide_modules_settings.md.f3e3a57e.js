import{_ as s,o as a,c as n,e as l}from"./app.f7cf8af5.js";const A=JSON.parse('{"title":"设置设置","description":"","frontmatter":{"title":"设置设置"},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"set - 保存设置","slug":"set-保存设置","link":"#set-保存设置","children":[]},{"level":3,"title":"setMany - 批量保存设置","slug":"setmany-批量保存设置","link":"#setmany-批量保存设置","children":[]},{"level":3,"title":"adminSetMany - 批量保存设置并返回后台响应格式数据","slug":"adminsetmany-批量保存设置并返回后台响应格式数据","link":"#adminsetmany-批量保存设置并返回后台响应格式数据","children":[]},{"level":3,"title":"all - 以数组形式返回所有设置","slug":"all-以数组形式返回所有设置","link":"#all-以数组形式返回所有设置","children":[]},{"level":3,"title":"get - 获取设置项","slug":"get-获取设置项","link":"#get-获取设置项","children":[]},{"level":3,"title":"arrayGet - 获取设置项中的某个值","slug":"arrayget-获取设置项中的某个值","link":"#arrayget-获取设置项中的某个值","children":[]},{"level":3,"title":"clearCache - 清除指定设置项的缓存","slug":"clearcache-清除指定设置项的缓存","link":"#clearcache-清除指定设置项的缓存","children":[]}]}],"relativePath":"guide/modules/settings.md","lastUpdated":1676533519000}'),t={name:"guide/modules/settings.md"},p=l(`<h1 id="设置设置" tabindex="-1">设置设置 <a class="header-anchor" href="#设置设置" aria-hidden="true">#</a></h1><p>后台管理系统中的常用功能</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p>在 <code>App\\Admin\\Controllers\\SettingsController</code> 中有部分示例代码可供参考</p><p>可以通过 <code>settings()</code> 辅助函数保存或获取设置</p><p>内置以下方法:</p><h3 id="set-保存设置" tabindex="-1">set - 保存设置 <a class="header-anchor" href="#set-保存设置" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">bool</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Slow Admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="setmany-批量保存设置" tabindex="-1">setMany - 批量保存设置 <a class="header-anchor" href="#setmany-批量保存设置" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span><span style="color:#676E95;font-style:italic;"> $data</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">bool</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setMany</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">setMany</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Slow Admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Slow Admin is a laravel admin package</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div><h3 id="adminsetmany-批量保存设置并返回后台响应格式数据" tabindex="-1">adminSetMany - 批量保存设置并返回后台响应格式数据 <a class="header-anchor" href="#adminsetmany-批量保存设置并返回后台响应格式数据" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span><span style="color:#676E95;font-style:italic;"> $data</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#A6ACCD;font-style:italic;">Illuminate</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#A6ACCD;font-style:italic;">Http</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#FFCB6B;font-style:italic;">JsonResponse</span><span style="color:#89DDFF;font-style:italic;">|\\</span><span style="color:#A6ACCD;font-style:italic;">Illuminate</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#A6ACCD;font-style:italic;">Http</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#A6ACCD;font-style:italic;">Resources</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#A6ACCD;font-style:italic;">Json</span><span style="color:#89DDFF;font-style:italic;">\\</span><span style="color:#FFCB6B;font-style:italic;">JsonResource</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">adminSetMany</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">store</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Request</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 直接返回后台响应格式数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">adminSetMany</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="all-以数组形式返回所有设置" tabindex="-1">all - 以数组形式返回所有设置 <a class="header-anchor" href="#all-以数组形式返回所有设置" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><h3 id="get-获取设置项" tabindex="-1">get - 获取设置项 <a class="header-anchor" href="#get-获取设置项" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">string</span><span style="color:#676E95;font-style:italic;"> $key 设置项key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">mixed</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#F78C6C;font-style:italic;">null</span><span style="color:#676E95;font-style:italic;"> $default 默认值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">bool</span><span style="color:#676E95;font-style:italic;"> $fresh 是否直接从数据库获取</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">mixed</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#F78C6C;font-style:italic;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">mixed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">default </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">fresh </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="arrayget-获取设置项中的某个值" tabindex="-1">arrayGet - 获取设置项中的某个值 <a class="header-anchor" href="#arrayget-获取设置项中的某个值" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">string</span><span style="color:#676E95;font-style:italic;"> $key 设置项key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">string</span><span style="color:#676E95;font-style:italic;"> $path 通过点号分隔的路径, 同Arr::get()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $default</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">array</span><span style="color:#89DDFF;font-style:italic;">|\\</span><span style="color:#FFCB6B;font-style:italic;">ArrayAccess</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#F78C6C;font-style:italic;">mixed</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#F78C6C;font-style:italic;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">arrayGet</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">default </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">arrayGet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title.zh.value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="clearcache-清除指定设置项的缓存" tabindex="-1">clearCache - 清除指定设置项的缓存 <a class="header-anchor" href="#clearcache-清除指定设置项的缓存" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#F78C6C;font-style:italic;">void</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clearCache</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#82AAFF;">settings</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">clearCache</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">site_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,20),o=[p];function e(c,y,i,r,F,D){return a(),n("div",null,o)}const f=s(t,[["render",e]]);export{A as __pageData,f as default};