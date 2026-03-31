// const API_BASE = 'https://linwan.icu/api';
const API_BASE = 'http://localhost:4000/api';

// 默认数据
const defaultData = [
  {
    category: "工具",
    items: [
      { title: "百度翻译", url: "https://fanyi.baidu.com/mtpe-individual/transText" },
      { title: "代码生成片段", url: "https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode" },
      { title: "在线条形码", url: "http://barcode.cnaidc.com/html/BCGcode128b.php" },
      { title: "转vscode代码块", url: "https://snippet-generator.app/" },
    ]
  },
  {
    category: "ui库",
    items: [
      { title: "elementUi", url: "https://element.eleme.cn/#/zh-CN/component/installation" },
      { title: "elementPlus", url: "https://element-plus.org/zh-CN/component/overview" },
      { title: "tdesignV3", url: "https://tdesign.tencent.com/vue-next/overview" },
      { title: "antdvV2", url: "https://1x.antdv.com/docs/vue/introduce-cn/" },
      { title: "naiveuiV3", url: "https://www.naiveui.com/zh-CN/os-theme/docs/installation" },
      { title: "微信小程序", url: "https://developers.weixin.qq.com/miniprogram/dev/component/" },
      { title: "钉钉小程序", url: "https://open.dingtalk.com/document/development/mini-app-form-form-1" },
      { title: "支付宝小程序", url: "https://opendocs.alipay.com/mini/component/view?pathHash=851930ea" },
      { title: "designMini", url: "https://mini.ant.design/components/overview" },
      { title: "echarts", url: "https://echarts.apache.org/examples/zh/index.html" },
      { title: "echartsDemo", url: "https://echarts.zhangmuchen.top/#/index" },
      { title: "datav", url: "http://datav.jiaminghi.com/guide/#%E5%AE%89%E8%A3%85" },
    ]
  },
  {
    category: "ai",
    items: [
      { title: "chatGPT", url: "https://chat.openai.com/chat" },
      { title: "Google Gemini", url: "https://gemini.google.com/app" },
      { title: "Claude", url: "https://claude.ai/" },
      { title: "OhMyGPT", url: "https://www.ohmygpt.com/" },
      { title: "ai flux", url: "https://aiflux.asia/console/topup" },
      { title: "Codex", url: "https://openai.com/zh-Hans-CN/codex/" }
    ]
  },
  {
    category: "著名网站",
    items: [
      { title: "LINUX DO", url: "https://linux.do/top?period=daily" },
      { title: "SegmentFault", url: "https://segmentfault.com/" },
      { title: "飞书云文档", url: "https://ccndkgsf8rr2.feishu.cn/drive/home/" },
      { title: "DeepSeek", url: "https://chat.deepseek.com/a/chat/s/c79edd1f-438b-4544-b152-8ff69ccb341d" },
      { title: "CSDN", url: "https://blog.csdn.net/" },
      { title: "OSCHINA", url: "https://www.oschina.net/" },
      { title: "菜鸟教程", url: "https://www.runoob.com/" },
      { title: "MSDN", url: "https://msdn.itellyou.cn/" },
      { title: "博客园", url: "https://home.cnblogs.com/" },
      { title: "Stack Overflow", url: "https://stackoverflow.com/questions" },
      { title: "语雀工作台", url: "https://www.yuque.com/dashboard" },
      { title: "Bandizip", url: "https://cn.bandisoft.com/bandizip/" },
      { title: "V2Ray", url: "https://www.v2ray.com/chapter_00/install.html" },
      { title: "掘金", url: "https://juejin.cn/" },
      { title: "Lodash", url: "https://www.lodashjs.com/" },
      { title: "mathjs", url: "https://my.oschina.net/u/4258672/blog/3916240" },
      { title: "力扣", url: "https://leetcode.cn/" },
      { title: "魔戒.net", url: "https://mojie.me/#/dashboard" },
      { title: "Node下载", url: "https://nodejs.org/en/download/prebuilt-installer" },
      { title: "浏览器兼容", url: "https://caniuse.com/" },
      { title: "css动画", url: "https://css-loaders.com/shapes/" },
      { title: "破解", url: "https://www.ghxi.com/" }
    ]
  },
  {
    category: "小程序",
    items: [
      { title: "微信公众平台", url: "https://mp.weixin.qq.com/" },
      { title: "微信开发文档", url: "https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html" },
      { title: "微信支付文档", url: "https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_4.shtml" },
      { title: "华为云", url: "https://developer.huaweicloud.com/hero" },
      { title: "华为云登录", url: "https://auth.huaweicloud.com/authui/login.html?service=https://console.huaweicloud.com/console/#/login" },
    ]
  },
  {
    category: "数组/字符串/方法",
    items: [
      { title: "数组方法", url: "https://www.cnblogs.com/sqh17/p/8529401.html" },
      { title: "ES6学习笔记", url: "https://www.cnblogs.com/sqh17/p/8569316.html" },
      { title: "JS字符串方法", url: "https://www.cnblogs.com/Yimi/p/10362214.html" },
      { title: "ES6模板字符串", url: "https://www.cnblogs.com/sqh17/p/8473627.html" },
      { title: "ES6对象新增", url: "https://www.jianshu.com/p/33755d4a855e" },
      { title: "ES6对象总结", url: "https://segmentfault.com/a/1190000015592641" },
      { title: "数组reduce", url: "https://www.w3cplus.com/javascript/array-part-8.html" },
      { title: "数组循环六种", url: "https://www.cnblogs.com/onesea/p/13489981.html" },
      { title: "对象添加键值对", url: "https://blog.csdn.net/u011403174/article/details/103615337" },
      { title: "ES6 New Set", url: "https://www.cnblogs.com/ajaemp/p/11820339.html" },
      { title: "Observer属性", url: "https://blog.csdn.net/weixin_42398301/article/details/108059590" },
      { title: "数组转字符串", url: "http://c.biancheng.net/view/5673.html" },
      { title: "字符串拼接", url: "http://c.biancheng.net/view/5579.html" },
      { title: "JS树结构操作", url: "https://wintc.top/article/20" },
      { title: "数组扁平化", url: "https://juejin.cn/post/6844903805876699150" },
      { title: "20个JS技巧", url: "https://juejin.cn/post/7431892632705548303" },
    ]
  },
  {
    category: "鼎信",
    items: [
      { title: "GitLab", url: "http://gitlab.1jiaofei.com/" },
      { title: "公司博课", url: "http://edu.ejiaofei.com:83/" },
      { title: "Redmine", url: "http://192.168.60.4:3000/" },
      { title: "eoLinker", url: "http://192.168.60.4:84/index.php#/index" },
      { title: "微信转发配置", url: "http://115.28.151.126:65430/admin/wx_test/upstream/" },
      { title: "阿里云登录", url: "https://signin.aliyun.com/shandongdingxin.onaliyun.com/login.htm" },
      { title: "Jenkins", url: "http://192.168.60.177:65430/view/%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83/" },
      { title: "观远数据", url: "http://bi.chengzibianli.com:65434/auth/index" },
      { title: "后端日志", url: "http://123.56.92.195:5601/k/s/orange/login" },
      { title: "上线管理", url: "http://online.eyunying.com.cn:5000/#/login" },
    ]
  },
  {
    category: "橙子",
    items: [
      { title: "ERP2.0正式", url: "http://orange.chengzibianli.com:65434/erp-next/login" },
      { title: "ERP2.0测试", url: "https://devqianyun.chengzibianli.com/erp-next/login" },
      { title: "wflow工作流", url: "http://orange.chengzibianli.com:65434/work-flow/login" },
    ]
  },
  {
    category: "每日橙",
    items: [
      { title: "每日橙正式管理", url: "https://daily.chengzibianli.com/b2b/#/login" },
      { title: "每日橙测试管理", url: "https://devqianyun.chengzibianli.com/orange_b2b/#/login" },
      { title: "B2B API文档", url: "https://daily.chengzibianli.com/b2b-manager/doc.html#/home" },
      { title: "b2b erp saas测试", url: "https://devqianyun.chengzibianli.com/dailyB2B-saas-erp/user/login" },
    ]
  },
  {
    category: "wms",
    items: [
      { title: "M-WMS正式", url: "http://wms.myuncang.com/wms/login?redirect=/welcome" }
    ]
  },
  {
    category: "其他",
    items: [
      { title: "各种激活", url: "https://hardbin.com/ipfs/bafybeih65no5dklpqfe346wyeiak6wzemv5d7z2ya7nssdgwdz4xrmdu6i/" },
      { title: "SMS-Boom", url: "https://github.com/HY060114/SMS-Boom/blob/master/api.json" },
      { title: "在线短信测压", url: "http://122.51.111.180/index.php" },
      { title: "Vue3-resource", url: "https://hu-snail.github.io/vue3-resource/platform/web/img-bg.html" },
      { title: "语雀收藏", url: "https://www.yuque.com/dashboard/collections" },
      { title: "小程序技能树", url: "https://edu.csdn.net/skill/mini_programs?utm_source=AI_act_mini_programs&category=1259" },
      { title: "济南就业参考", url: "https://gshmd.vip/" },
      { title: "nvm安装教程", url: "https://www.qianduange.cn/article/381.html" },
      { title: "V2EX", url: "https://global.v2ex.co/?tab=hot" }
    ]
  },
];

// 当前使用的数据
let bookmarksData = [];
// 管理模式状态
let isManagementMode = false;



// 加载数据
function loadData() {
  const saved = localStorage.getItem('myBookmarks');
  if (saved) {
    try {
      bookmarksData = JSON.parse(saved);
    } catch (e) {
      console.error('Data corrupted, resetting', e);
      bookmarksData = JSON.parse(JSON.stringify(defaultData));
    }
  } else {
    bookmarksData = JSON.parse(JSON.stringify(defaultData));
  }

  // 兼容旧数据：补齐 count 字段
  if (Array.isArray(bookmarksData)) {
    bookmarksData.forEach(cat => {
      if (!cat || !Array.isArray(cat.items)) return;
      cat.items.forEach(it => {
        if (!it) return;
        if (typeof it.count !== 'number' || Number.isNaN(it.count) || it.count < 0) {
          it.count = 0;
        }
      });
    });
  }
}

// 保存数据
function saveData() {
  localStorage.setItem('myBookmarks', JSON.stringify(bookmarksData));
}

// 分类图标映射
const categoryIcons = {
  '学校': '🎓',
  '著名网站': '🌟',
  'ai': '🤖',
  'AI': '🤖',
  '小程序': '📱',
  '数组/字符串/方法': '📝',
  '鼎信': '💼',
  '橙子': '🍊',
  '每日橙': '🍋',
  'wms': '📦',
  '其他': '📁',
  '工具': '🛠️',
  '开发': '👨‍💻',
  '设计': '🎨',
  '文档': '📄',
  '生活': '☕',
  '学习': '📚',
  '资源': '📦'
};

// 搜索引擎配置
const searchEngines = {
  google: {
    url: 'https://www.google.com/search?q=',
    proxy: 'https://google.serper.dev/search?q='
  },
  bing: {
    url: 'https://www.bing.com/search?q=',
    proxy: 'https://www.bing.com/search?q='
  },
  baidu: {
    url: 'https://www.baidu.com/s?wd=',
    proxy: 'https://www.baidu.com/s?wd='
  },
  duckduckgo: {
    url: 'https://duckduckgo.com/?q=',
    proxy: 'https://duckduckgo.com/?q='
  }
};

let currentEngine = 'bing';
let useProxy = false;
let currentCategory = null;

// 初始化分类列表
function initCategories() {
  const categoryList = document.getElementById('categoryList');
  categoryList.innerHTML = ''; // 清空

  if (bookmarksData.length > 0) {
    bookmarksData.forEach((cat, index) => {
      const item = document.createElement('div');
      item.className = 'category-item';
      if (currentCategory === cat.category) {
        item.classList.add('active');
      }

      const icon = categoryIcons[cat.category] || '📁';

      // 内容容器
      const content = document.createElement('span');
      content.innerHTML = `${icon} ${cat.category}`;
      content.style.flex = '1';
      content.onclick = () => selectCategory(cat.category);

      // 删除按钮 (管理模式下显示)
      const delBtn = document.createElement('button');
      delBtn.className = 'delete-btn';
      delBtn.innerHTML = '×';
      delBtn.style.position = 'static'; // 相对定位
      delBtn.style.marginLeft = '5px';
      delBtn.style.width = '18px';
      delBtn.style.height = '18px';
      delBtn.onclick = (e) => {
        e.stopPropagation();
        deleteCategory(index);
      };

      item.appendChild(content);
      item.appendChild(delBtn);
      categoryList.appendChild(item);
    });

    // 如果当前没有选中或者选中的分类不存在了，默认选中第一个
    const currentExists = bookmarksData.some(c => c.category === currentCategory);
    if (!currentCategory || !currentExists) {
      if (bookmarksData.length > 0) {
        selectCategory(bookmarksData[0].category);
      } else {
        currentCategory = null;
        renderBookmarks();
      }
    }
  }
}

// 选择分类
function selectCategory(category) {
  currentCategory = category;

  // 更新分类高亮
  document.querySelectorAll('.category-item').forEach(item => {
    if (item.innerText.includes(category)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 渲染书签
  renderBookmarks();
}

// 渲染书签
function renderBookmarks() {
  const grid = document.getElementById('bookmarksGrid');
  const titleEl = document.getElementById('currentCategoryName');
  grid.innerHTML = '';

  let items = [];
  if (currentCategory === null) {
    // 显示全部 (fallback)
    titleEl.textContent = '📚 全部书签';
    bookmarksData.forEach(cat => {
      items = items.concat(cat.items);
    });
  } else {
    // 显示特定分类
    const icon = categoryIcons[currentCategory] || '📁';
    titleEl.textContent = `${icon} ${currentCategory}`;
    const cat = bookmarksData.find(c => c.category === currentCategory);
    if (cat) {
      items = cat.items;
    }
  }

  // 仅用于展示时排序（不改变“全部书签”视图下的分类结构）
  items = items.slice().sort((a, b) => {
    const ac = (a && typeof a.count === 'number') ? a.count : 0;
    const bc = (b && typeof b.count === 'number') ? b.count : 0;
    return bc - ac;
  });

  // 创建书签卡片
  items.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    const bookmark = document.createElement('a');
    bookmark.className = 'bookmark-item';
    bookmark.href = item.url;
    bookmark.target = '_blank';

    bookmark.addEventListener('click', function () {
      if (typeof item.count !== 'number' || Number.isNaN(item.count) || item.count < 0) {
        item.count = 0;
      }
      item.count += 1;

      // 找到所属分类并对该分类 items 进行持久化排序
      const ownerCat = bookmarksData.find(c => c && Array.isArray(c.items) && c.items.includes(item));
      if (ownerCat && Array.isArray(ownerCat.items)) {
        ownerCat.items.sort((a, b) => {
          const ac = (a && typeof a.count === 'number') ? a.count : 0;
          const bc = (b && typeof b.count === 'number') ? b.count : 0;
          return bc - ac;
        });
      }

      saveData();
      renderBookmarks();
    });

    const icon = document.createElement('div');
    icon.className = 'bookmark-icon';

    let domain = '';
    try {
      domain = new URL(item.url).hostname;
    } catch (e) { }

    if (domain) {
      const img = document.createElement('img');
      img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
      img.style.width = '24px';
      img.style.height = '24px';
      img.style.borderRadius = '4px';
      img.style.display = 'block'; // Remove extra space
      img.onerror = () => {
        // Load failed, fallback to text
        img.remove();
        icon.textContent = item.title ? item.title.charAt(0).toUpperCase() : '?';
      };
      icon.appendChild(img);
    } else {
      icon.textContent = item.title ? item.title.charAt(0).toUpperCase() : '?';
    }

    const title = document.createElement('div');
    title.className = 'bookmark-title';
    title.textContent = item.title;

    bookmark.appendChild(icon);
    bookmark.appendChild(title);

    // 删除按钮 (管理模式下显示)
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '×';
    delBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      deleteItem(index);
    };

    wrapper.appendChild(bookmark);
    wrapper.appendChild(delBtn);
    grid.appendChild(wrapper);
  });

  // 如果是管理模式且选中了具体分类，显示新增书签按钮
  if (isManagementMode && currentCategory) {
    const addBtn = document.createElement('div');
    addBtn.className = 'bookmark-item add-bookmark-card';
    addBtn.innerHTML = '+';
    addBtn.title = '新增书签';
    addBtn.onclick = addItem;
    grid.appendChild(addBtn);
  }
}

// CRUD 操作
function addCategory() {
  const name = prompt("请输入新分类名称：");
  if (name && name.trim()) {
    bookmarksData.push({
      category: name.trim(),
      items: []
    });
    saveData();
    initCategories();
    selectCategory(name.trim());
  }
}

function deleteCategory(index) {
  if (confirm(`确定要删除分类 "${bookmarksData[index].category}" 及其所有书签吗？`)) {
    bookmarksData.splice(index, 1);
    saveData();
    initCategories(); // Re-render sidebar
    // selectCategory logic is handled in initCategories fallback
  }
}

function addItem() {
  if (!currentCategory) return;

  const title = prompt("请输入书签标题：");
  if (!title) return;

  const url = prompt("请输入书签链接：", "https://");
  if (!url) return;

  const category = bookmarksData.find(c => c.category === currentCategory);
  if (category) {
    category.items.push({
      title: title.trim(),
      url: url.trim(),
      count: 0
    });
    saveData();
    renderBookmarks();
  }
}

function deleteItem(index) {
  if (!currentCategory) return;
  const category = bookmarksData.find(c => c.category === currentCategory);
  if (category && confirm(`确定要删除书签 "${category.items[index].title}" 吗？`)) {
    category.items.splice(index, 1);
    saveData();
    renderBookmarks();
  }
}

// 管理模式切换
document.getElementById('manageToggle').addEventListener('click', function () {
  isManagementMode = !isManagementMode;
  this.classList.toggle('active');
  document.body.classList.toggle('management-mode');

  // 重新渲染以显示/隐藏按钮
  initCategories();
  renderBookmarks();
});

// 加载数据并初始化
loadData();
// 初始化 - 已改为在 loadData 后自动调用
initCategories();

// 时间更新
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekday = weekdays[now.getDay()];
  document.getElementById('date').textContent = `${year}年${month}月${day}日 ${weekday}`;
}

updateTime();
setInterval(updateTime, 1000);

// 背景动画
function createBubbles() {
  const animation = document.getElementById('bgAnimation');
  animation.innerHTML = ''; // Clear existing
  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 120 + 60; // Bigger bubbles
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDelay = Math.random() * 5 + 's';
    bubble.style.animationDuration = (Math.random() * 20 + 10) + 's';
    bubble.style.opacity = Math.random() * 0.5 + 0.1; // Random opacity
    animation.appendChild(bubble);
  }
}

createBubbles();

// 搜索引擎切换
document.querySelectorAll('.engine-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.engine-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentEngine = this.dataset.engine;
  });
});

// 代理开关
// document.getElementById('proxyToggle').addEventListener('click', function () {
//     this.classList.toggle('active');
//     useProxy = this.classList.contains('active');
// });

const searchInputEl = document.getElementById('searchInput');
const searchSuggestionsEl = document.getElementById('searchSuggestions');
const searchContainerEl = document.querySelector('.search-container');

const BING_SUGGEST_API = 'https://api.bing.com/qsonhs.aspx';
const SEARCH_SUGGEST_DEBOUNCE_MS = 300;
const MAX_SUGGESTION_COUNT = 8;
let suggestDebounceTimer = null;
let bingSuggestScriptEl = null;

function extractBingSuggestions(payload) {
  const suggestions = [];
  const as = payload && payload.AS;
  if (!as) return suggestions;

  if (Array.isArray(as.Results)) {
    as.Results.forEach(result => {
      if (!result || !Array.isArray(result.Suggests)) return;
      result.Suggests.forEach(s => {
        if (s && typeof s.Txt === 'string' && s.Txt.trim()) {
          suggestions.push(s.Txt.trim());
        }
      });
    });
  }

  if (Array.isArray(as.Suggests)) {
    as.Suggests.forEach(s => {
      if (s && typeof s.Txt === 'string' && s.Txt.trim()) {
        suggestions.push(s.Txt.trim());
      }
    });
  }

  return [...new Set(suggestions)];
}

function hideSearchSuggestions() {
  if (!searchSuggestionsEl) return;
  searchSuggestionsEl.classList.remove('show');
  searchSuggestionsEl.innerHTML = '';
}

function renderSearchSuggestions(list) {
  if (!searchSuggestionsEl) return;

  if (!Array.isArray(list) || list.length === 0) {
    hideSearchSuggestions();
    return;
  }

  searchSuggestionsEl.innerHTML = '';
  list.slice(0, MAX_SUGGESTION_COUNT).forEach(text => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'search-suggestion-item';
    btn.textContent = text;
    btn.addEventListener('click', () => {
      searchInputEl.value = text;
      hideSearchSuggestions();
      performSearch();
    });
    searchSuggestionsEl.appendChild(btn);
  });
  searchSuggestionsEl.classList.add('show');
}

function requestBingSuggestions(query) {
  if (!query) {
    hideSearchSuggestions();
    return;
  }

  if (bingSuggestScriptEl && bingSuggestScriptEl.parentNode) {
    bingSuggestScriptEl.parentNode.removeChild(bingSuggestScriptEl);
  }

  const script = document.createElement('script');
  script.src = `${BING_SUGGEST_API}?type=cb&q=${encodeURIComponent(query)}&cb=window.bing.sug&_=${Date.now()}`;
  script.async = true;
  script.onerror = () => hideSearchSuggestions();
  document.body.appendChild(script);
  bingSuggestScriptEl = script;
}

window.bing = window.bing || {};
window.bing.sug = function (payload) {
  const currentQuery = searchInputEl.value.trim();
  const responseQuery = payload && payload.AS && typeof payload.AS.Query === 'string'
    ? payload.AS.Query.trim()
    : '';

  if (
    !currentQuery ||
    !responseQuery ||
    currentQuery.toLowerCase() !== responseQuery.toLowerCase()
  ) {
    return;
  }

  const suggestions = extractBingSuggestions(payload);
  renderSearchSuggestions(suggestions);
};

function handleSearchInputChange() {
  const query = searchInputEl.value.trim();
  if (!query) {
    if (suggestDebounceTimer) {
      clearTimeout(suggestDebounceTimer);
      suggestDebounceTimer = null;
    }
    hideSearchSuggestions();
    return;
  }

  if (suggestDebounceTimer) {
    clearTimeout(suggestDebounceTimer);
  }
  suggestDebounceTimer = setTimeout(() => {
    requestBingSuggestions(query);
  }, SEARCH_SUGGEST_DEBOUNCE_MS);
}

// 搜索功能
function performSearch() {
  const query = searchInputEl.value.trim();
  if (!query) return;

  const engine = searchEngines[currentEngine];
  const searchUrl = engine.url;
  hideSearchSuggestions();
  window.open(searchUrl + encodeURIComponent(query), '_blank');
}

document.getElementById('searchBtn').addEventListener('click', performSearch);
searchInputEl.addEventListener('input', handleSearchInputChange);
searchInputEl.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});
searchInputEl.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideSearchSuggestions();
  }
});

document.addEventListener('click', (e) => {
  if (!searchContainerEl.contains(e.target)) {
    hideSearchSuggestions();
  }
});

// 汉堡菜单切换
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('show');
});

// 点击主内容区域关闭侧边栏 (移动端)
document.querySelector('.main-content').addEventListener('click', function () {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('show');
  }
});

searchInputEl.focus();

// 背景管理
const backgrounds = [
  'url("/images/1.avif")',
  'url("/images/2.avif")',
  'url("/images/3.avif")',
  'url("/images/4.avif")',
];

let currentBgIndex = 0;
const bgSwitcher = document.getElementById('bgSwitcher');
const customBgBtn = document.getElementById('customBgBtn');
const customBgInput = document.getElementById('customBgInput');
const networkBgBtn = document.getElementById('networkBgBtn');
const themeToggle = document.getElementById('themeToggle');

// 设置背景的通用函数
function setBackground(bgValue) {
  document.body.style.background = bgValue;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
}

// 加载保存的自定义背景或使用默认背景
function loadSavedBackground() {
  const savedBg = localStorage.getItem('customBackground');
  if (savedBg) {
    setBackground(`url("${savedBg}")`);
  } else {
    setBackground(backgrounds[3]); // 默认背景
  }
  document.body.style.transition = 'background 0.5s ease';
}

// 初始化背景
loadSavedBackground();

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.title = isLight ? '切换为暗黑' : '切换为浅色';
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
}

loadSavedTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

// 切换预设背景
bgSwitcher.addEventListener('click', () => {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  const bg = backgrounds[currentBgIndex];
  setBackground(bg);
  // 清除自定义背景，使用预设背景
  localStorage.removeItem('customBackground');
});

// 自定义背景按钮点击事件
customBgBtn.addEventListener('click', () => {
  customBgInput.click();
});

async function setNetworkBackground() {
  if (!networkBgBtn) return;
  if (networkBgBtn.disabled) return;

  const originalText = networkBgBtn.textContent;
  try {
    networkBgBtn.disabled = true;
    networkBgBtn.textContent = '…';

    const apiUrl = `https://wp.upx8.com/api.php?_=${Date.now()}`;

    await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('图片加载失败'));
      img.referrerPolicy = 'no-referrer';
      img.src = apiUrl;
    });

    setBackground(`url("${apiUrl}")`);
    localStorage.setItem('customBackground', apiUrl);
  } catch (e) {
    alert('网络背景获取失败，请稍后重试');
  } finally {
    networkBgBtn.disabled = false;
    networkBgBtn.textContent = originalText;
  }
}

if (networkBgBtn) {
  networkBgBtn.addEventListener('click', setNetworkBackground);
}

// 处理文件选择
customBgInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件！');
    return;
  }

  // 验证文件大小 (限制为 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('图片大小不能超过 5MB！');
    return;
  }

  // 读取文件并转换为 base64
  const reader = new FileReader();
  reader.onload = (event) => {
    const base64 = event.target.result;
    // 保存到 localStorage
    try {
      localStorage.setItem('customBackground', base64);
      setBackground(`url("${base64}")`);
    } catch (err) {
      // localStorage 可能已满
      alert('保存背景失败，图片可能太大。请选择较小的图片。');
      console.error('localStorage error:', err);
    }
  };
  reader.onerror = () => {
    alert('读取图片失败，请重试！');
  };
  reader.readAsDataURL(file);

  // 重置 input 以便可以再次选择同一文件
  e.target.value = '';
});

// ========== 每日一言功能 ==========
function fetchDailyQuote(forceRefresh = false) {
  const quoteTextEl = document.getElementById('quoteText');
  const quoteAuthorEl = document.getElementById('quoteAuthor');
  const refreshBtn = document.getElementById('quoteRefresh');

  // 检查localStorage中是否有今天的缓存
  const cacheKey = 'dailyQuote';
  const cacheDateKey = 'dailyQuoteDate';
  const today = new Date().toDateString();

  const cachedDate = localStorage.getItem(cacheDateKey);
  const cachedQuote = localStorage.getItem(cacheKey);

  // 如果不是强制刷新，且有今天的缓存，直接使用
  if (!forceRefresh && cachedDate === today && cachedQuote) {
    try {
      const data = JSON.parse(cachedQuote);
      quoteTextEl.textContent = data.yiyan;
      // 处理nick为空的情况
      if (data.nick && data.nick.trim()) {
        quoteAuthorEl.textContent = data.nick;
        quoteAuthorEl.style.display = 'block';
      } else {
        quoteAuthorEl.style.display = 'none';
      }
      return;
    } catch (e) {
      console.error('解析缓存失败', e);
    }
  }

  // 显示加载状态
  if (refreshBtn) {
    refreshBtn.classList.add('loading');
  }

  // 请求API获取新的一言
  fetch('https://api.nxvav.cn/api/yiyan/?encode=json&charset=utf-8')
    .then(response => response.json())
    .then(data => {
      quoteTextEl.textContent = data.yiyan;
      // 处理nick为空的情况
      if (data.nick && data.nick.trim()) {
        quoteAuthorEl.textContent = data.nick;
        quoteAuthorEl.style.display = 'block';
      } else {
        quoteAuthorEl.style.display = 'none';
      }

      // 缓存今天的一言
      localStorage.setItem(cacheDateKey, today);
      localStorage.setItem(cacheKey, JSON.stringify(data));
    })
    .catch(error => {
      console.error('获取每日一言失败:', error);
      quoteTextEl.textContent = '人生如逆旅，我亦是行人。';
      quoteAuthorEl.textContent = '苏轼';
      quoteAuthorEl.style.display = 'block';
    })
    .finally(() => {
      if (refreshBtn) {
        refreshBtn.classList.remove('loading');
      }
    });
}

// 页面加载时获取每日一言
fetchDailyQuote();

// 刷新按钮点击事件
document.getElementById('quoteRefresh').addEventListener('click', () => {
  fetchDailyQuote(true); // 强制刷新
});

// =============== 天气功能 ===============
const WEATHER_API_KEY = 'SlT90hgr9j7s0Ro6F';
const DEFAULT_LOCATION = 'jinan'; // 默认城市：济南

// 天气代码对应图标映射
const weatherIconMap = {
  '0': '☀️',    // 晴
  '1': '☀️',    // 晴
  '2': '☀️',    // 晴
  '3': '☀️',    // 晴
  '4': '🌤️',   // 多云
  '5': '⛅',    // 晴间多云
  '6': '⛅',    // 晴间多云
  '7': '⛅',    // 大部多云
  '8': '⛅',    // 大部多云
  '9': '🌥️',   // 阴
  '10': '🌧️',  // 阵雨
  '11': '⛈️',  // 雷阵雨
  '12': '⛈️',  // 雷阵雨伴有冰雹
  '13': '🌧️',  // 小雨
  '14': '🌧️',  // 中雨
  '15': '🌧️',  // 大雨
  '16': '🌧️',  // 暴雨
  '17': '🌧️',  // 大暴雨
  '18': '🌧️',  // 特大暴雨
  '19': '🌧️',  // 冻雨
  '20': '🌨️',  // 雨夹雪
  '21': '🌨️',  // 阵雪
  '22': '❄️',   // 小雪
  '23': '❄️',   // 中雪
  '24': '❄️',   // 大雪
  '25': '❄️',   // 暴雪
  '26': '🌫️',  // 浮尘
  '27': '🌫️',  // 扬沙
  '28': '🌫️',  // 沙尘暴
  '29': '🌫️',  // 强沙尘暴
  '30': '🌫️',  // 雾
  '31': '🌫️',  // 霾
  '32': '💨',   // 风
  '33': '💨',   // 大风
  '34': '🌀',   // 飓风
  '35': '🌀',   // 热带风暴
  '36': '🌀',   // 龙卷风
  '37': '❄️',   // 冷
  '38': '🌡️',  // 热
  '99': '❓'    // 未知
};

// 获取天气图标
function getWeatherIcon(code) {
  return weatherIconMap[code] || '🌤️';
}

// 获取天气数据
function fetchWeather(location = DEFAULT_LOCATION, locationName = '济南') {
  const weatherIcon = document.getElementById('weatherIcon');
  const weatherLocation = document.getElementById('weatherLocation');
  const weatherTemp = document.getElementById('weatherTemp');
  const weatherText = document.getElementById('weatherText');
  const refreshBtn = document.getElementById('weatherRefresh');

  // 显示加载状态
  if (refreshBtn) {
    refreshBtn.classList.add('loading');
  }
  weatherLocation.textContent = locationName;
  weatherText.textContent = '加载中...';

  const apiUrl = `https://api.seniverse.com/v3/weather/now.json?key=${WEATHER_API_KEY}&location=${location}&language=zh-Hans&unit=c`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('天气请求失败');
      }
      return response.json();
    })
    .then(data => {
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const now = result.now;
        const loc = result.location;

        weatherIcon.textContent = getWeatherIcon(now.code);
        weatherLocation.textContent = loc.name;
        weatherTemp.textContent = now.temperature;
        weatherText.textContent = now.text;

        // 缓存天气数据
        localStorage.setItem('weatherData', JSON.stringify({
          location: loc.name,
          temperature: now.temperature,
          text: now.text,
          code: now.code,
          timestamp: Date.now()
        }));
      }
    })
    .catch(error => {
      console.error('获取天气失败:', error);
      weatherText.textContent = '获取失败';

      // 尝试使用缓存
      const cached = localStorage.getItem('weatherData');
      if (cached) {
        try {
          const data = JSON.parse(cached);
          weatherIcon.textContent = getWeatherIcon(data.code);
          weatherLocation.textContent = data.location;
          weatherTemp.textContent = data.temperature;
          weatherText.textContent = data.text + ' (缓存)';
        } catch (e) {
          console.error('解析缓存失败', e);
        }
      }
    })
    .finally(() => {
      if (refreshBtn) {
        refreshBtn.classList.remove('loading');
      }
    });
}

// 使用浏览器定位获取位置（强制重新定位）
function getLocationAndFetchWeather(forceRefresh = false) {
  const weatherLocation = document.getElementById('weatherLocation');

  // 如果不是强制刷新，尝试使用缓存的位置
  if (!forceRefresh) {
    const cachedLocation = localStorage.getItem('weatherLocationData');
    if (cachedLocation) {
      try {
        const locData = JSON.parse(cachedLocation);
        console.log('使用缓存的定位:', locData.locationStr);
        fetchWeather(locData.locationStr, locData.locationName);
        return;
      } catch (e) {
        console.error('解析位置缓存失败', e);
      }
    }
  }

  // 浏览器不支持定位
  if (!navigator.geolocation) {
    console.log('浏览器不支持定位，使用默认城市济南');
    // 缓存默认位置
    localStorage.setItem('weatherLocationData', JSON.stringify({
      locationStr: DEFAULT_LOCATION,
      locationName: '济南'
    }));
    fetchWeather(DEFAULT_LOCATION, '济南');
    return;
  }

  weatherLocation.textContent = '定位中...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      // 心知天气支持经纬度格式：纬度:经度
      const locationStr = `${latitude.toFixed(2)}:${longitude.toFixed(2)}`;
      console.log('定位成功:', locationStr);

      // 缓存定位信息
      localStorage.setItem('weatherLocationData', JSON.stringify({
        locationStr: locationStr,
        locationName: '当前位置',
        timestamp: Date.now()
      }));

      fetchWeather(locationStr, '当前位置');
    },
    (error) => {
      console.log('定位失败，使用默认城市济南:', error.message);
      // 缓存默认位置
      localStorage.setItem('weatherLocationData', JSON.stringify({
        locationStr: DEFAULT_LOCATION,
        locationName: '济南'
      }));
      fetchWeather(DEFAULT_LOCATION, '济南');
    },
    {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0 // 刷新时不使用浏览器缓存
    }
  );
}

// 页面加载时获取天气（使用缓存的定位）
getLocationAndFetchWeather(false);

// 天气刷新按钮点击事件（强制重新定位）
document.getElementById('weatherRefresh').addEventListener('click', () => {
  getLocationAndFetchWeather(true); // 强制刷新定位
});

// =============== 百度热搜功能 ===============
function fetchHotSearch() {
  const listEl = document.getElementById('hotSearchList');
  const refreshBtn = document.getElementById('hotSearchRefresh');

  if (refreshBtn) refreshBtn.classList.add('loading');

  // 使用提供的API
  fetch('https://v2.xxapi.cn/api/baiduhot')
    .then(response => response.json())
    .then(data => {
      if (data.code === 200 && data.data) {
        renderHotSearch(data.data);
      } else {
        listEl.innerHTML = '<div class="loading-text">获取失败</div>';
      }
    })
    .catch(err => {
      console.error('获取热搜失败', err);
      listEl.innerHTML = '<div class="loading-text">网络错误</div>';
    })
    .finally(() => {
      if (refreshBtn) refreshBtn.classList.remove('loading');
    });
}

function renderHotSearch(items) {
  const listEl = document.getElementById('hotSearchList');
  listEl.innerHTML = '';

  items.forEach((item, index) => {
    const a = document.createElement('a');
    a.className = 'hot-search-item';
    // 优先使用 mobileUrl 或 url
    a.href = item.url || item.mobilUrl || '#';
    a.target = '_blank';

    const indexSpan = document.createElement('span');
    indexSpan.className = 'hot-search-index';
    indexSpan.textContent = item.index || (index + 1);

    const titleSpan = document.createElement('span');
    titleSpan.className = 'hot-search-title';
    titleSpan.textContent = item.title;

    a.appendChild(indexSpan);
    a.appendChild(titleSpan);

    listEl.appendChild(a);
  });
}

// 初始化热搜
fetchHotSearch();

// 刷新热搜
document.getElementById('hotSearchRefresh').addEventListener('click', () => {
  fetchHotSearch();
});

// =============== 用户功能 ===============
let currentUser = null;
let authMode = 'login'; // 'login' or 'register'

// ===== Token 管理 =====
function getToken() {
  return localStorage.getItem('userToken');
}

function setToken(token) {
  localStorage.setItem('userToken', token);
}

function clearToken() {
  localStorage.removeItem('userToken');
}

// ===== API 请求封装 =====
async function apiRequest(url, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers
    });
    const data = await response.json();
    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.error('API 请求失败:', error);
    return { ok: false, status: 0, data: { message: '网络请求失败' } };
  }
}

// ===== 用户界面更新 =====
function updateUserUI() {
  const guestBtns = document.getElementById('guestBtns');
  const userLoggedIn = document.getElementById('userLoggedIn');
  const userAvatarText = document.getElementById('userAvatarText');
  const userDisplayName = document.getElementById('userDisplayName');
  const userDisplayAccount = document.getElementById('userDisplayAccount');
  const userRoleBadge = document.getElementById('userRoleBadge');
  const visitRecordBtn = document.getElementById('visitRecordBtn');

  if (currentUser) {
    guestBtns.style.display = 'none';
    userLoggedIn.style.display = 'block';

    const displayName = currentUser.userName || currentUser.userAccount || '用户';
    userAvatarText.textContent = displayName.charAt(0).toUpperCase();
    userDisplayName.textContent = displayName;
    userDisplayAccount.textContent = '@' + currentUser.userAccount;

    // 超级管理员显示角色标识和访问记录按钮
    if (currentUser.userRole === 1) {
      userRoleBadge.style.display = 'inline-block';
      visitRecordBtn.style.display = 'block';
    } else {
      userRoleBadge.style.display = 'none';
      visitRecordBtn.style.display = 'none';
    }
  } else {
    guestBtns.style.display = 'flex';
    userLoggedIn.style.display = 'none';
  }
}

// ===== 用户下拉菜单 =====
function toggleUserDropdown() {
  const dropdown = document.getElementById('userDropdown');
  dropdown.classList.toggle('show');
}

// 点击其他区域关闭下拉菜单
document.addEventListener('click', (e) => {
  const avatar = document.getElementById('userAvatar');
  const dropdown = document.getElementById('userDropdown');
  if (avatar && !avatar.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// ===== 登录弹窗 =====
function showAuthModal(mode = 'login') {
  authMode = mode;
  const modal = document.getElementById('authModal');
  const title = document.getElementById('authTitle');
  const submitBtn = document.getElementById('authSubmit');
  const authSwitch = document.getElementById('authSwitch');
  const userNameGroup = document.getElementById('userNameGroup');
  const errorEl = document.getElementById('authError');

  // 重置表单
  document.getElementById('authUserName').value = '';
  document.getElementById('authAccount').value = '';
  document.getElementById('authPassword').value = '';
  errorEl.classList.remove('show');

  if (mode === 'login') {
    title.textContent = '🔐 登录';
    submitBtn.textContent = '登录';
    authSwitch.innerHTML = '还没有账号？<a onclick="switchAuthMode(\'register\')">立即注册</a>';
    userNameGroup.style.display = 'none';
  } else {
    title.textContent = '✨ 注册';
    submitBtn.textContent = '注册';
    authSwitch.innerHTML = '已有账号？<a onclick="switchAuthMode(\'login\')">立即登录</a>';
    userNameGroup.style.display = 'block';
  }

  modal.classList.add('show');
}

function hideAuthModal() {
  document.getElementById('authModal').classList.remove('show');
}

function switchAuthMode(mode) {
  showAuthModal(mode);
}

function showAuthError(message) {
  const errorEl = document.getElementById('authError');
  errorEl.textContent = message;
  errorEl.classList.add('show');
}

// ===== 处理认证 =====
async function handleAuth() {
  const submitBtn = document.getElementById('authSubmit');
  const account = document.getElementById('authAccount').value.trim();
  const password = document.getElementById('authPassword').value.trim();

  if (!account || !password) {
    showAuthError('请填写账号和密码');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = '处理中...';

  try {
    if (authMode === 'login') {
      const result = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ userAccount: account, userPassword: password })
      });

      if (result.ok && result.data.code === 0) {
        const { user, token } = result.data.data;
        setToken(token);
        currentUser = user;
        updateUserUI();
        hideAuthModal();

        // 登录成功后记录访问并同步数据
        recordVisit();
        loadFromCloud();
      } else {
        showAuthError(result.data.message || '登录失败');
      }
    } else {
      const userName = document.getElementById('authUserName').value.trim();

      const result = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          userName: userName || account,
          userAccount: account,
          userPassword: password
        })
      });

      if (result.ok && result.data.code === 0) {
        // 注册成功，自动登录
        showAuthModal('login');
        document.getElementById('authAccount').value = account;
        showAuthError('注册成功，请登录');
        document.getElementById('authError').style.color = '#52c41a';
        document.getElementById('authError').style.borderColor = 'rgba(82, 196, 26, 0.3)';
        document.getElementById('authError').style.background = 'rgba(82, 196, 26, 0.1)';
      } else {
        showAuthError(result.data.message || '注册失败');
      }
    }
  } catch (error) {
    showAuthError('请求失败，请检查网络连接');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = authMode === 'login' ? '登录' : '注册';
  }
}

// Enter 键提交
document.getElementById('authPassword').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleAuth();
});

// ===== 登出 =====
function logout() {
  clearToken();
  currentUser = null;
  updateUserUI();
  document.getElementById('userDropdown').classList.remove('show');
}

// ===== 检查登录状态 =====
async function checkLoginStatus() {
  const token = getToken();
  if (!token) return;

  const result = await apiRequest('/auth/me');
  if (result.ok && result.data.code === 0) {
    currentUser = result.data.data;
    updateUserUI();
    // 自动记录访问
    recordVisit();
  } else {
    // Token 失效
    clearToken();
  }
}

// ===== 访问记录 =====
async function recordVisit() {
  if (!currentUser) return;

  try {
    await apiRequest('/visit/record', {
      method: 'POST'
    });
  } catch (error) {
    console.error('记录访问失败:', error);
  }
}

// ===== 访问记录面板 =====
async function showVisitPanel() {
  const panel = document.getElementById('visitPanel');
  const overlay = document.getElementById('visitOverlay');
  const listEl = document.getElementById('visitList');

  document.getElementById('userDropdown').classList.remove('show');
  panel.classList.add('show');
  overlay.classList.add('show');

  listEl.innerHTML = '<div class="loading-text">加载中...</div>';

  const result = await apiRequest('/visit/list?page=1&pageSize=50', {
      method: 'POST'
    });

  if (result.ok && result.data.code === 0) {
    const { list } = result.data.data;

    if (list.length === 0) {
      listEl.innerHTML = '<div class="loading-text">暂无访问记录</div>';
      return;
    }

    listEl.innerHTML = '';
    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'visit-item';
      div.innerHTML = `
                        <span class="visit-user-key">${item.userPlatform ? item.userPlatform : '-'}</span>
                        <div class="visit-info">
                            <span>${item.userKey}</span>
                            <span class="visit-count">访问 ${item.userTime} 次</span>
                        </div>
                    `;
      listEl.appendChild(div);
    });
  } else {
    listEl.innerHTML = `<div class="loading-text">${result.data.message || '加载失败'}</div>`;
  }
}

function hideVisitPanel() {
  document.getElementById('visitPanel').classList.remove('show');
  document.getElementById('visitOverlay').classList.remove('show');
}

// ===== 数据同步 =====
async function syncDataToCloud() {
  if (!currentUser) return;

  document.getElementById('userDropdown').classList.remove('show');

  const localData = localStorage.getItem('myBookmarks');
  if (!localData) {
    alert('没有本地数据需要同步');
    return;
  }

  try {
    const result = await apiRequest('/config/update', {
      method: 'POST',
      body: JSON.stringify({ json: localData })
    });

    if (result.ok && result.data.code === 0) {
      alert('数据同步成功！');
    } else {
      alert(result.data.message || '同步失败');
    }
  } catch (error) {
    alert('同步失败，请检查网络连接');
  }
}

async function loadFromCloud() {
  if (!currentUser) return;

  try {
    const result = await apiRequest('/config/get', {
      method: 'POST'
    });

    if (result.ok && result.data.code === 0 && result.data.data) {
      const cloudData = result.data.data.json;
      if (cloudData) {
        // 云端有数据，询问是否覆盖本地
        const localData = localStorage.getItem('myBookmarks');
        if (localData && localData !== cloudData) {
          if (confirm('检测到云端有书签数据，是否加载云端数据？\n（本地数据将被覆盖）')) {
            localStorage.setItem('myBookmarks', cloudData);
            loadData();
            initCategories();
            renderBookmarks();
          }
        } else if (!localData) {
          // 本地无数据，直接使用云端
          localStorage.setItem('myBookmarks', cloudData);
          loadData();
          initCategories();
          renderBookmarks();
        }
      }
    }
  } catch (error) {
    console.error('加载云端数据失败:', error);
  }
}

// ===== 修改保存函数，登录后同步 =====
const originalSaveData = saveData;
saveData = function () {
  originalSaveData();
  // 登录状态下异步同步到云端
  if (currentUser) {
    const localData = localStorage.getItem('myBookmarks');
    apiRequest('/config/update', {
      method: 'POST',
      body: JSON.stringify({ json: localData })
    }).catch(err => console.error('自动同步失败:', err));
  }
};

// ===== 初始化用户状态 =====
checkLoginStatus();
