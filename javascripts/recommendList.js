(function () {

    // Reference
    var worldExplore = window.worldExplore;

    /**
     * @public
     */
    var recommendList = worldExplore.recommendList = {};

    recommendList.placeList = [
        {
            id: 'paris-versailles',
            mark: 90,
            name: {cn: '巴黎 - 凡尔赛宫', local: 'Chateau de Versailles'},
            regionKey: 'paris',
            imgs: [
                {suffix: 1, desc: '大量房间的天花板'},
                2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>巴黎的首要推荐，看了后才知道什么是穷奢极欲，以及什么叫“目光所及一切式”文物保护。</p>'
        },
        {
            id: 'paris-louvre',
            mark: 80,
            name: {cn: '巴黎 - 卢浮宫', local: 'Musée du Louvre'},
            regionKey: 'paris',
            imgs: [],
            desc: '<p>卢浮宫里面内容多得夸张，走马观花一天也看不完，因为这是必去的地方，所以只随便贴了几个贴照片，自己逛吧。</p>'
        },
        {
            id: 'paris-egouts',
            mark: 80,
            name: {cn: '巴黎 - 下水道博物馆', local: 'Musee Des Egouts De Paris'},
            regionKey: 'paris',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>'
                +   '下水道是一个城市的良心，也是城市“真实发达程度”的一个写照（还记得干旱的北京缝雨必堵连年内涝么）。'
                +   '传说巴黎下水道系统比巴黎地铁还要复杂庞大。这个博物馆正是在巴黎真实的下水道里面。'
                +   '这个看似不起眼的地方很值得去看看，会留下深刻的印象，<strong>让你深入的体验文明的内涵~</strong>'
                +   '</p>'
                + '<p>'
                +   '提示：入口就在市内的塞纳河边。'
                + '</p>'
        },
        {
            id: 'paris-detail',
            mark: 90,
            name: {cn: '巴黎 - 城市细节'},
            regionKey: 'paris',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>地铁，火车，城市细节等等</p>'
        },
        {
            id: 'saint-michel',
            mark: 80,
            name: {cn: '圣米歇尔山', local: 'Mont Saint-Michel'},
            regionKey: 'normandie',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>这是个真实的奇幻世界，<strong>《魔戒》刚铎城的现实版</strong>，绝对可以让你一直处在震撼中。强烈推荐！</p>'
                + '<p>'
                +   '顺便一提：去圣米歇尔山，相对比较方便的走法，可以是从法国西北部大城市<strong>雷恩（Rennes）</strong>走。'
                +   '比如，先火车到雷恩，住一夜，第二天早上在雷恩火车站边上的汽车站坐车去圣米歇尔山，晚上坐汽车回雷恩，再住或者火车去别的地方。'
                +   '雷恩这个城市很宁静，感觉也非常好。'
                + '</p>'
        },
        {
            id: 'loire-chenonceau',
            mark: 80,
            name: {cn: '舍农索城堡', local: 'Chateau de Chenonceau'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'loire-chambord',
            mark: 80,
            name: {cn: '香波城堡', local: 'Chateau de Chambord'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'loire-blois',
            mark: 80,
            name: {cn: '布卢瓦', local: 'Blois'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '布卢瓦城堡（Chateau de Blois）'
        },
        {
            id: 'loire-tours',
            mark: 80,
            name: {cn: '图尔', local: 'Tours'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '静，教堂'
        },
        {
            id: 'south-france-carcassonne',
            mark: 90,
            name: {cn: '卡尔卡松（卡卡颂）', local: 'Carcassonne'},
            regionKey: 'south-france',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '卡卡颂，搜不到'
        },
        {
            id: 'switzerland-interlaken',
            mark: 90,
            name: {cn: '因特拉肯', local: 'Interlaken'},
            regionKey: 'switzerland',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
        },
        {
            id: 'north-italy-florence',
            mark: 90,
            name: {cn: '翡冷翠（佛罗伦萨）', local: 'Florence'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '圣母百花教堂'
        },
        {
            id: 'north-italy-venice',
            mark: 90,
            name: {cn: '威尼斯', local: 'Venice'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '就想说：走着逛'
        },
        {
            id: 'north-italy-orvieto',
            mark: 90,
            name: {cn: '奥维托（奥尔维耶托）', local: 'Orvieto'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '天空之城（Civita di Bagnoregio）'
        },
        {
            id: 'north-italy-roma',
            mark: 90,
            name: {cn: '罗马', local: 'Roma'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '就想说，那个广场'
        },
        {
            id: 'greece-santorini',
            mark: 90,
            name: {cn: '圣托里尼岛（桑托林岛）', local: 'Santorini'},
            regionKey: 'greece',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '就是为了贬低它，哪里都说评分高，但是，有不好一面。推荐酒店。'
        },
        {
            id: 'south-germany-anywhere',
            mark: 90,
            name: {cn: '火车路上'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '一路上全是风景'
        },
        {
            id: 'south-germany-neuschwanstein',
            mark: 90,
            name: {cn: '新天鹅堡', local: 'Schloss Neuschwanstein'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '一路上全是风景'
        },
        {
            id: 'south-germany-hohenzollern',
            mark: 90,
            name: {cn: '霍亨索伦城堡', local: 'Burg Hohenzollern'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '人很少，宁静，讲解很好'
        },
        {
            id: 'south-germany-deutsches-museum',
            mark: 90,
            name: {cn: '德意志博物馆', local: 'Deutsches Museum'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '慕尼黑（München）（英语：Bavaria，巴伐利亚，德语：拜仁，Bayern），博物馆'
        }
    ];

    recommendList.regionMap = {
        'paris': {
            name: {cn: '巴黎', local: 'Paris'},
            desc: '这些玩过的地方排在推荐地方的后面，看看即可：埃菲尔铁塔, 凯旋门, 蓬皮杜艺术馆（真心看不懂他们的现代艺术）'
        },
        'normandie': {
            name: {cn: '诺曼底地区'},
            desc: '里昂'
        },
        'loire': {
            name: {cn: '卢瓦尔河谷', local: 'vallée de la Loire'}
        },
        'south-france': {
            name: {cn: '法国南部', local: ''}
        },
        'switzerland': {
            name: {cn: '瑞士', local: 'Switzerland / Suisse / Schweiz'},
            desc: '英语：Switzerland，法语：Suisse，德语：Schweiz，最常见：Swiss。其他地方也应该很不错，看照片上伯恩就感觉不错'
        },
        'north-italy': {
            name: {cn: '意大利中北部'},
            desc: '米兰，威尼斯略，罗马太多，就不说了，南部意大利没时间去了'
        },
        'greece': {
            name: {cn: '希腊', local: 'Greece'},
            desc: '雅典就不列了。有人能在希腊玩一个月，历史古迹很多，但是留存的不好，就剩一点柱子，科诺所思迷宫也剩不多。'
        },
        'south-germany': {
            name: {cn: '德国南部', local: 'Germany'},
            desc: '“Germany”原来是源于“日耳曼”，还是德语比较贴近直觉：“Deutschland”，德意志。最发达，德国南部'
        }
    };

    recommendList.regionList = [
        'paris', 'normandie', 'loire', 'south-france', 'switzerland',
        'north-italy', 'greece', 'south-germany'
    ];

    /**
     * @public
     */
    recommendList.getPlaceListByMark = function () {
        return recommendList.placeList.sort(function (a, b) {
            return a.mark < b.mark ? -1 : (a.mark > b.mark ? 1 : 0);
        });
    };

    /**
     * @public
     */
    recommendList.getPlaceListByRegion = function () {
        var sortedPlaceList = recommendList.placeList.sort(function (a, b) {
            return a.mark < b.mark ? -1 : (a.mark > b.mark ? 1 : 0);
        });

        var map = {};
        for (var i = 0, len = sortedPlaceList.length; i < len; i++) {
            var placeItem = sortedPlaceList[i];
            var list = map[placeItem.regionKey] || (map[placeItem.regionKey] = []);
            list.push(placeItem);
        }

        var ret = [];
        for (var i = 0, len = recommendList.regionList.length; i < len; i++) {
            var regionKey = recommendList.regionList[i];
            ret.push({
                regionKey: regionKey,
                placeList: map[regionKey]
            });
        }

        return ret;
    };

    /**
     * @pubilc
     */
    recommendList.getPlaceItemById = function (placeId) {
        for (var i = 0, len = recommendList.placeList.length; i < len; i++) {
            var placeItem = recommendList.placeList[i];
            if (placeItem.id === placeId) {
                return placeItem;
            }
        }
        return null;
    };

})();