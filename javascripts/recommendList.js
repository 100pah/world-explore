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
            mark: 92,
            name: {cn: '凡尔赛宫（巴黎）', local: 'Chateau de Versailles'},
            regionKey: 'paris',
            imgs: [
                {suffix: 1, desc: '大量房间的天花板'},
                2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>巴黎的首要推荐，看了后才知道什么是穷奢极欲，以及什么叫“目光所及一切式”文物保护。</p>'
        },
        {
            id: 'paris-louvre',
            mark: 83,
            name: {cn: '卢浮宫（巴黎）', local: 'Musée du Louvre'},
            regionKey: 'paris',
            imgs: [],
            desc: '<p>卢浮宫里面内容多得夸张，走马观花一天也看不完，因为这是必去的地方，所以只随便贴了几个贴照片，自己逛吧。</p>'
        },
        {
            id: 'paris-egouts',
            mark: 81,
            name: {cn: '下水道博物馆（巴黎）', local: 'Musee Des Egouts De Paris'},
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
            mark: 66,
            name: {cn: '城市细节（巴黎）'},
            regionKey: 'paris',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>地铁，火车，城市细节等等</p>'
        },
        {
            id: 'saint-michel',
            mark: 97,
            name: {cn: '圣米歇尔山（法国）', local: 'Mont Saint-Michel'},
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
            mark: 90,
            name: {cn: '舍农索城堡（法国）', local: 'Chateau de Chenonceau'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>卢瓦尔河谷地区有很多城堡，这个不是最大的，但是最喜欢的一个。别致，和环境配合得非常好。感觉比香波城堡还要值得看。</p>'
                + '<p>不过，坐火车去起来稍不方便，从图尔市、或者从布鲁瓦市去舍农索，都要坐一阵火车。但绝对值得一去。</p>'
        },
        {
            id: 'loire-chambord',
            mark: 80,
            name: {cn: '香波城堡（法国）', local: 'Chateau de Chambord'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>卢瓦尔河谷地区，最大最有名的城堡。离得布卢瓦市区比较近，可以住在布卢瓦市区，坐汽车来这里溜一圈。</p>'
        },
        {
            id: 'loire-blois',
            mark: 68,
            name: {cn: '布卢瓦（法国）', local: 'Blois'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>布卢瓦市区里面，有<strong>布卢瓦城堡（Chateau de Blois）</strong>，住在布卢瓦的话可以来溜一圈。</p>'
        },
        {
            id: 'loire-tours',
            mark: 70,
            name: {cn: '图尔（法国）', local: 'Tours'},
            regionKey: 'loire',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>非常安静的城市，但是有个非常恢弘的大教堂。当时转车时经过图尔，从火车站去教堂转一圈，两个小时。</p>'
        },
        {
            id: 'south-france-carcassonne',
            mark: 90,
            name: {cn: '卡尔卡松（卡卡颂）（法国）', local: 'Carcassonne'},
            regionKey: 'south-france',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>从桌游<strong>卡卡颂</strong>知道这个城市，一般国内的旅游网站对于他的信息很少（所以去玩的时候，也几乎没有看到中国游客）。</p>'
                + '<p>但是，<strong>绝对值得一去！</strong></p>'
        },
        {
            id: 'switzerland-interlaken',
            mark: 99,
            name: {cn: '因特拉肯（瑞士）', local: 'Interlaken'},
            regionKey: 'switzerland',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>富得流油的瑞士，自然和人类先进文明的结合，使得这地方有点天堂的感觉。因特拉肯有各种玩法，低海拔的湖光山色，中海拔的辽阔牧场和落差千米的山地断层，高海拔的冰天雪地。</p>'
                + '<p>所以，<strong>极其推荐！</strong></p>'
                + '<p>唯一缺点：有点贵……</p>'
        },
        {
            id: 'north-italy-florence',
            mark: 90,
            name: {cn: '佛罗伦萨（翡冷翠）', local: 'Florence'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>欧洲玩一圈，见过的华丽的教堂太多以致麻木。但是<strong>圣母百花教堂</strong>是我看过的这些教堂中的 No.1。'
                + '看照片感觉不到，一定要亲身体验穹顶的魅力。不要错过<strong>爬上穹顶</strong>的过程。</p>'
        },
        {
            id: 'north-italy-venice',
            mark: 75,
            name: {cn: '威尼斯', local: 'Venice'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>就想说：<strong>最好深入大街小巷走着逛</strong>，不要去坐主干道上的“大公共汽船”。</p>'
                + '<p>其实威尼斯一天就够了，都不用住宿（太贵），早上火车到，晚上火车离开。</p>'
        },
        {
            id: 'north-italy-orvieto',
            mark: 90,
            name: {cn: '奥维托（奥尔维耶托）', local: 'Orvieto'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>这是个国内旅游网站上很不容易查到的小地方，但去后感觉，是个顶级旅游景点（参见本页面最下方的“主观排序”~）。</p>'
                + '<p>奥维托山城是罗马教皇修起来用于避难的地方，本身坐落在古火山顶上使得景观奇特，又有着教皇花大力气精心修筑的设施建筑建筑。并且，游人少而宁静，旅馆也住着舒服。</p>'
                + '<p>从奥维托早上坐班车，一个多小时能到达传说中的<strong>天空之城（Civita di Bagnoregio）</strong>，这是一定要去的地方！</p>'
                + '<p>奥维托就在罗马和佛罗伦萨中间，火车有一站，去起来其实很方便。火车站在山下，在火车站上坐缆车就能上到山城中。</p>'
        },
        {
            id: 'north-italy-roma',
            mark: 80,
            name: {cn: '罗马', local: 'Roma'},
            regionKey: 'north-italy',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>罗马不用说什么，能看的东西密集得恐怖。只想提一个小地方：<strong>纳沃纳广场（Piazza Navona）</strong>，下午晚上有很多街头艺人，十分有意思。</p>'
                + '<p>罗马本身不大，走着逛，地图上看着多远都可以走，反正哪条路都一路景点。坐车的话，堵死你，还可能遇上小偷。</p>'
        },
        {
            id: 'greece-santorini',
            mark: 50,
            name: {cn: '圣托里尼岛（桑托林岛）（希腊）', local: 'Santorini'},
            regionKey: 'greece',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>这里提圣托里尼，实际是为了贬低它。国内众口相传，哪里都评分高，浪漫的爱琴海。'
                + '圣托里尼本身也是一个不错的旅游地方，但和欧洲很多地方能体验到的“震撼”相比，这里显得比较一般了。'
                + '与欧洲其他很多地方相反，圣托里尼属于照片比现实好看的类型，肉眼的360度全景观察，会看到深蓝的海水美丽的白房子外的不少减色的景观。</p>'
                + '<p>圣托里尼非常大，内海最北沿是最核心的地方，也是众多照片中的场景，但是人非常多，住的贵。穷游者推荐离得远的一些旅馆，条件非常好，便宜，也很宁静。</p>'
                + '<p>推荐个酒店：Artemis Village（亚缇米斯田园酒店），可以在booking上搜下，老板非常好，虽然远，但是各种免费接送。</p>'
        },
        {
            id: 'south-germany-anywhere',
            mark: 65,
            name: {cn: '火车路上'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>德国南部，坐火车，一路上全是可以作壁纸的风景。</p>'
        },
        {
            id: 'south-germany-neuschwanstein',
            mark: 96,
            name: {cn: '新天鹅堡（德国）', local: 'Schloss Neuschwanstein'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: ''
                + '<p>顶级的地方，不需多言。可以住慕尼黑，早上火车去，晚上火车回。</p>'
                + '<p>注意，因为人多，<strong>参观是要预约时间段的</strong>。</p>'
        },
        {
            id: 'south-germany-hohenzollern',
            mark: 86,
            name: {cn: '霍亨索伦城堡（德国）', local: 'Burg Hohenzollern'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>斯图加特附近，也是个恢弘的大城堡。并且，人很少，环境清新宁静，参观的讲解很好。</p>'
        },
        {
            id: 'south-germany-deutsches-museum',
            mark: 85,
            name: {cn: '德意志博物馆', local: 'Deutsches Museum'},
            regionKey: 'south-germany',
            imgs: [
                1, 2, 3, 4, 5, 6, 7,  8, 9, 10
            ],
            desc: '<p>世界最大的科技馆，对工业和科学技术有点儿情节的人，来慕尼黑（München）一定不能错过！我发着烧去看的。一天走马观花看不完。</p>'
        }
    ];

    recommendList.regionMap = {
        'paris': {
            name: {cn: '巴黎', local: 'Paris'},
            desc: ''
            + '<p>这些看似名气大的地方，推荐度排名不高，看看即可：埃菲尔铁塔, 凯旋门。</p>'
            + '<p>注意一个叫：蓬皮杜艺术馆的地方，看不懂西方现代艺术（如用尺子画规则的几十条斜线作为一幅画作贴在墙上）又没时间的人，完全可以忽略。</p>'
        },
        'normandie': {
            name: {cn: '诺曼底地区'},
            desc: '<p>没想起来可以说啥。</p>'
        },
        'loire': {
            name: {cn: '卢瓦尔河谷', local: 'vallée de la Loire'},
            desc: '<p>自然环境整治得真是好。</p>'
        },
        'south-france': {
            name: {cn: '法国南部', local: ''}
        },
        'switzerland': {
            name: {cn: '瑞士', local: 'Switzerland / Suisse / Schweiz'},
            desc: '<p>英语：Switzerland，法语：Suisse，德语：Schweiz，最常见：Swiss。瑞士其他地方也应该很不错。</p>'
        },
        'north-italy': {
            name: {cn: '意大利中北部'},
            desc: ''
                + '<p>米兰，威尼斯略，罗马，介绍太多，就不说了，南部意大利没时间去了。</p>'
                + '<p>能玩的城市那么多，又没时间都去，那么玩过的这几个地方，给个主观排名作参考：</p>'
                + '<p><strong>奥维托 | 佛罗伦萨</strong> &gt; <strong>罗马</strong> &gt; '
                + '<strong>威尼斯</strong> &gt;&gt; <strong>米兰</strong></p>'
        },
        'greece': {
            name: {cn: '希腊', local: 'Greece'},
            desc: '<p>历史古迹很多，但是年代久远，以及各种历史原因，保存的不好，不少地方，就剩一点柱子。</p>'
        },
        'south-germany': {
            name: {cn: '德国南部', local: 'Germany'},
            desc: ''
                + '<p>英语的 Germany 一词可能是源于“日耳曼”，还是德语比较贴近直觉：Deutschland（德意志）。</p>'
                + '<p>德国南部非常美丽而发达。美丽程度：<strong>农村 | 小城镇</strong>&gt;&gt;<strong>大城市</strong></p>'
                + '<p>终于搞清了“巴伐利亚”和“拜仁”的关系：同一个地方，英语是 Bavaria（巴伐利亚），德语是Bayern（拜仁）</p>'
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
            return a.mark < b.mark ? 1 : (a.mark > b.mark ? -1 : 0);
        });
    };

    /**
     * @public
     */
    recommendList.getPlaceListByRegion = function () {
        var sortedPlaceList = recommendList.getPlaceListByMark();

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