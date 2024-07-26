/**
 * 赛事分析——基本库
 * 提供微信多页面模式下，赛事分析页面的单页面支持
 * by zhaoyf	2019年5月13日15:21:47
 */
(function (root, factory) {    
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else {
        // Global (browser)
        window.$match = factory();
    }
}(this, function () {  

	
    (function () {   
        /**
		 * 动态加载js文件
		 * @param  {string}   url      js文件的url地址
		 * @param  {Function} callback 加载完成后的回调函数
		 */
        var _getScript = function (url, callback) {
            var head = document.getElementsByTagName('head')[0],
                js = document.createElement('script');

            js.setAttribute('type', 'text/javascript'); 
            js.setAttribute('src', url); 

            head.appendChild(js);

            //执行回调
            var callbackFn = function () {
                if (typeof callback === 'function') {
                    callback();
                }
            };

            if (document.all) { //IE
                js.onreadystatechange = function () {
                    if (js.readyState == 'loaded' || js.readyState == 'complete') {
                        callbackFn();
                    }
                };
            } else {
                js.onload = function () {
                    callbackFn();
                };
            }
        };

        //如果使用的是zepto，就添加扩展函数
        if (Zepto) {
            $.getScript = _getScript;
        }
		
    })();

    var Maps = function () {//--映射关系
        var self = this;
        var handicap = ['平手', '平/半', '半球', '半/一', '一球', '一/球半', '球半', '球半/两', '两球', '两/两半', '两球半', '两半/三', '三球', '三/三半', '三球半', '三半/四', '四球', '四/四半', '四球半', '四半/五', '五球', '五/五半', '五球半', '五半/六', '六球', '六/六半', '六球半', '六半/七', '七球', '七/七半', '七球半', '七半/八', '八球', '八/八半', '八球半', '八半/九', '九球'];
        self.handicap = {};//--让球
        for (var i = 0, len = handicap.length; i < len; i++) {
            var key = (i * 0.25);
            self.handicap[key + ''] = '受' + handicap[i];
            self.handicap[(key * -1) + ''] = handicap[i];
        }
    };

    var Loader = function () {//--html和js动态加载器
        var self = this;
    };
    Loader.prototype.getJs = function (path) {//--动态加载JS
        var defer = $.Deferred();
        $.getScript(path, function (res) {
            console.log('加载JS成功', '路径：', path, '结果：', res);
            defer.resolve(res);
        });
        return defer.promise();
    };
    Loader.prototype.getHtml = function (path) {//--动态加载html
        // var defer = $.Deferred();
        // $.ajax({
        // 	url: path,
        // 	type: 'get',
        // 	success:function(res){
        // 		console.log("加载HTML成功", "路径：", path);
        // 		defer.resolve(res);
        // 	}
        // });
        // return defer.promise();
        return Gray.$page.loadHtml(path);
    };

    var Page = function (match) {//--赛事分析页面对象
        var self = this;
        self.parent = match; 
        self.el = {
            main: '#match2',
            sub: '#match2_sub'
        };
        self.head = null;
        self.body = {};
        self.footer = null;
        self.params = {};
        self.sub_params = {};
        self.sub_info = null;
        self.tags = [//--页签选项
            {key: 'history', title: '战'}, //--战绩
            {key: 'odds', title: '欧'}, //--赔率
            {key: 'handicap', title: '亚'}, //--盘口
            {key: 'recommend', title: '荐'}, //--推荐 
            {key: 'exchanges', title: '盈'}, //--盈亏
            {key: 'intelligence', title: '情'}, //--情报
            {key: 'event', title: '赛'}, //--赛事
            {key: 'league', title: '阵'}, //--阵容
            {key: 'oddsplus', title: '赔+'}, //--赔率+
            // {key: 'recommend', title: '荐'}, //--推荐 
        ];      
        self.paths = {
            'history': {html: '/match2/history/index.html', js: '/static/js/business/match2-history-2ef5ed2f22.js'}, //--战绩
            'odds': {html: '/match2/odds/index.html', js: '/static/js/business/match2-odds-3927d2ad56.js'}, //--赔率
            'oddsChange': {html: '/match2/odds/change/index.html', js: '/static/js/business/match2-odds-change-92e1d930ce.js'}, //--赔率变化
            'handicap': {html: '/match2/handicap/index.html', js: '/static/js/business/match2-handicap-abe28ee3a3.js'}, //--亚盘
            'handicapChange': {html: '/match2/handicap/change/index.html', js: '/static/js/business/match2-odds-change-92e1d930ce.js'}, //--亚盘赔率变化
            'handicapBsChange': {html: '/match2/handicap/bschange/index.html', js: '/static/js/business/match2-odds-change-92e1d930ce.js'}, //--亚盘大小球赔率变化
            'exchanges': {html: '/match2/exchanges/index.html', js: '/static/js/business/match2-exchanges-a837c9cd59.js'}, //--盈亏
            'exchangesDetail': {html: '/match2/exchanges/detail/index.html', js: '/static/js/business/match2-exchanges-detail-6ecaa219f2.js'}, //--盈亏——必发交易明细
            'league': {html: '/match2/league/index.html', js: '/static/js/business/match2-league-e0f9fff5b9.js'}, //--阵容
            'leaguePlayer': {html: '/match2/league/player/index.html', js: '/static/js/business/match2-league-player-c9d7bd5914.js'}, //--阵容
            'event': {html: '/match2/event/index.html', js: '/static/js/business/match2-event-fd84a689a9.js'}, //--赛事
            'round': {html: '/match2/round/index.html', js: '/static/js/business/match2-round-0f77a3d061.js'}, //--赛程伦次
            'oddsplus': {html: '/match2/oddsplus/index.html', js: '/static/js/business/match2-oddsplus-bda5ca0c02.js'}, //--赔率+ 
            'oddsplusJqChange': {html: '/match2/oddsplus/totalchange/index.html', js: '/static/js/business/match2-oddsplus-change-8d9a90a27e.js'}, //--赔率+——总进球赔率变化详情 
            'oddsplusBqChange': {html: '/match2/oddsplus/halfchange/index.html', js: '/static/js/business/match2-oddsplus-change-8d9a90a27e.js'}, //--赔率+——半全场赔率变化详情
            'oddsplusBfChange': {html: '/match2/oddsplus/scorechange/index.html', js: '/static/js/business/match2-oddsplus-change-8d9a90a27e.js'}, //--赔率+——比分赔率变化详情
            'recommend': {html: '/match2/recommend/index.html', js: '/static/js/business/match2-recommend-76376d9923.js'}, //推荐页
            'intelligence': {html: '/match2/intelligence/index.html', js: '/static/js/business/match2-intelligence-b9dad7a151.js'}, //推荐页
        };       
    };
    Page.prototype.loadLayer = function (htmlPath) {//--加载完整的弹层页面
        var self = this,
            match = self.parent;
        return match.loader.getHtml(htmlPath)
            .then(function (res) {
                $('#match2_layer').empty().append(res).show();
            });
    };
    Page.prototype.loadTag = function (pageName) {//--加载标签页面
        pageName = pageName.split('@');
        var act = pageName[1];
        pageName = pageName[0];
        var self = this,
            match = self.parent,
            paths = self.paths,
            htmlPath = paths[pageName].html,
            jsPath = paths[pageName].js,
            params = self.params;
        $(self.el.main).show();
        $(self.el.sub).empty().hide();
        if (match.page.head) {
            match.page.head.currPage = pageName;
        }
        params.pageName = pageName;
        var str = [];
        for (var i in params) {
            str.push(i + '=' + params[i]);
        }
        var url;
        if (!config.isAPP) {
            url = Gray.$page.getUrlParam('back') || itou.history.back();
            url = url ? url : window.prevPage;
            url = url || '/';
            str.push('back=' + encodeURIComponent(url));
        }
        url = '?' + str.join('&');
        url = itou.linkSafe.timeSafe.addParams(url);//--页面链接安全对象，增加时间戳参数
        if (config.isAPP) {//--修复APP下无法记录当前页签的问题
            Gray.$page.href = '/match2/' + url;
            itou.gather.visit();//--页面访问数据收集
        } else {
            try {
                window.history.replaceState(null, null, url);
            } catch (error) {
                console.log(error);
            }
        }
        if (match.page.body[pageName]) {//--标签页切换
            // if(act == "getJs"){//--需要重新执行js
            // 	return match.loader.getJs(jsPath);
            // }
            // else{
            match.page.body[pageName].recordBack();//--记录返回路径
            var defer = $.Deferred();
            defer.resolve();
            return defer.promise();
            // }
        }
        return match.loader.getHtml(htmlPath)//--标签页初次加载
            .then(function (res) {
                // $("#match2_body").append(res);
                self.parent.swiper.slides[pageName].append(res);
            })
            .then(function () {
                return match.loader.getJs(jsPath);
            });
    };
    Page.prototype.load = function (params) {//--加载页面
        var self = this,
            match = self.parent,
            pageName = params.pageName;
        if (match.page.head) {
            match.page.head.currPage = pageName;
            match.page.currPage = pageName;
        }
        if (match.page.body[pageName]) {
            match.page.body[pageName].destroy();
            match.page.body = {};
        }
        self.params = params;
        $('#match2_body').empty();
        self.parent.swiper.init(self.tags);
        match.loader.getJs('/static/js/business/match2-footer-41df28394c.js') 
        return match.loader.getJs('/static/js/business/match2-head-94dfe751ab.js') 
            .then(function () {
                var tags = self.tags;
                for (var i = 0, len = tags.length; i < len; i++) {
                    var tag = tags[i];
                    if (tag.key == pageName) {
                        break;
                    }
                }
                if (i == 0) {
                    return match.page.loadTag(pageName + '@getJs');//--切换页签，并重新加载JS
                } else {
                    return match.swiper.slideTo(pageName);
                }
            });
    };
    Page.prototype.loadSub = function (params) {//--加载子页面（赔率变化等）
        var self = this,
            match = self.parent,
            sub_params = self.sub_params,
            pageName = params.pageName;
        paths = self.paths,
        htmlPath = paths[pageName].html,
        jsPath = paths[pageName].js,
        diff = 0;
        params.sub = 1;
        self.sub_params = params;
        $(self.el.main).hide();
        var str = [];
        console.log(params);
        for (var i in params) {
            str.push(i + '=' + params[i]);
            if (sub_params[i] != params[i]) {//--检查参数是否一致
                console.log(sub_params[i], params[i], sub_params[i] != params[i]);
                diff += 1;
            }
        }
        // window.history.replaceState(null, null, '?' + str.join("&"));
        console.log(diff);
        // if(diff == 0 && match.page.body[pageName] && sub_params["pageName"] == params["pageName"]){
        // 	$(self.el.sub).show();
        // 	var defer = $.Deferred();
        // 	defer.resolve();
        // 	return defer.promise();
        // }
        return match.loader.getHtml(htmlPath)//--标签页初次加载
            .then(function (res) {
                $(self.el.sub).empty().show();
                $('#match2_sub').append(res);
            })
            .then(function () {
                return match.loader.getJs(jsPath);
            });
    };
    Page.prototype.closeSub = function () {
        var self = this;
        $(self.el.main).show();
        $(self.el.sub).hide();
    };

    var Cache = function () {//--页面混村对象
        var self = this;
        var data = {//--页面缓存数据
            head: null, //--头部缓存数据
            body: {

            }
        };
        self.set = function () {//--设置缓存数据

        };
        self.get = function () {//--获取缓存数据
			
        };
        self.clear = function () {//--清空缓存
			
        };
    };

    var mySwiper = function (Match) {
        var self = this;
        self.parent = Match;
        self.tags = [];
        self.el = null;
        self.slides = {};
        self.obj = null;
    };
    mySwiper.prototype.init = function (tags) {
        var self = this;
        self.createContainer(tags);
        $('#match2_body').append(self.el);
        var swiper = new Swiper('#match2_body_swiper', {
            onSlideChangeStart: function (swiper) {
                console.log(swiper.activeIndex);
                var index = swiper.activeIndex;
                self.parent.page.loadTag(self.tags[index].key);
            }
        });
        self.obj = swiper;
    };
    mySwiper.prototype.createContainer = function (tags) {
        var self = this;
        self.tags = tags;
        var el = $('<div id="match2_body_swiper" class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios match2_wrapper"></div>');
        var wrapper = $('<div class="swiper-wrapper" id="match2_swiper"></div>');
        el.append(wrapper);
        for (var i = 0, len = tags.length; i < len; i++) {
            var tag = tags[i];
            var slide = $('<div id="swiper_slide_match2_' + tag.key + '" class="swiper-slide"></div>');
            self.slides[tag.key] = slide;
            wrapper.append(slide);
        }
        self.el = el;
    };
    mySwiper.prototype.slideTo = function (key) {
        var self = this,
            tags = self.tags;
        for (var i = 0, len = tags.length; i < len; i++) {
            var tag = tags[i];
            if (tag.key == key) {
                break;
            }
        }
        self.obj.slideTo(i);
    };

    var Match = function () {//--赛事分析数据对向
        var self = this;
        self.maps = new Maps();
        self.cache = new Cache();
        self.loader = new Loader();
        self.page = new Page(self);
        self.swiper = new mySwiper(self);
    };
    var $match = new Match();
    window.$match = $match;
    return $match;
}));