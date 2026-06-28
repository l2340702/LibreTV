const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://155api.com/api.php/provide/vod/at/json/',
        name: '未成年勿选，后果自负',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
