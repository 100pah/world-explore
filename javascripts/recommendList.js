(function () {

    window.recommendList = [
        {
            id: 'paris-versailles',
            mark: 90,
            name: {cn: '巴黎 - 凡尔赛宫', local: 'Chateau de Versailles'},
            regionKey: 'paris',
            imgCount: 10,
            desc: '<p>巴黎的首要推荐，看了后才知道什么叫穷奢极欲，以及什么叫“目光所及一切式”文物保护。</p>'
        },
        {
            id: 'paris-louvre',
            mark: 80,
            name: {cn: '巴黎 - 卢浮宫', local: 'Musée du Louvre'},
            regionKey: 'paris',
            imgCount: 10,
            desc: '<p>卢浮宫</p>'
        },
        {
            id: 'paris-egouts',
            mark: 80,
            name: {cn: '巴黎 - 下水道博物馆', local: 'Musee Des Egouts De Paris'},
            regionKey: 'paris',
            imgCount: 10,
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'saint-michel',
            mark: 80,
            name: {cn: '圣米歇尔山', local: 'Mont Saint-Michel'},
            regionKey: 'normandie',
            imgCount: 10,
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'loire-chenonceau',
            mark: 80,
            name: {cn: '舍农索城堡', local: 'Chateau de Chenonceau'},
            regionKey: 'loire',
            imgCount: 10,
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'loire-chambord',
            mark: 80,
            name: {cn: '香波城堡', local: 'Chateau de Chambord'},
            regionKey: 'loire',
            imgCount: 10,
            desc: '<p>下水道博物馆</p>'
        },
        {
            id: 'loire-blois',
            mark: 80,
            name: {cn: '布卢瓦', local: 'Blois'},
            regionKey: 'loire',
            imgCount: 10,
            desc: '布卢瓦城堡（Chateau de Blois）'
        },
        {
            id: 'loire-tours',
            mark: 80,
            name: {cn: '图尔', local: 'Tours'},
            regionKey: 'loire',
            imgCount: 10,
            desc: '静，教堂'
        },
        {
            id: 'south-france-carcassonne',
            mark: 90,
            name: {cn: '卡尔卡松（卡卡颂）', local: 'Carcassonne'},
            regionKey: 'south-france',
            imgCount: 10,
            desc: '卡卡颂，搜不到'
        },
        {
            id: 'switzerland-interlaken',
            mark: 90,
            name: {cn: '因特拉肯', local: 'Interlaken'},
            regionKey: 'switzerland',
            imgCount: 10,
            desc: ''
        },
        {
            id: 'north-italy-florence',
            mark: 90,
            name: {cn: '翡冷翠（佛罗伦萨）', local: 'Florence'},
            regionKey: 'north-italy',
            imgCount: 10,
            desc: '圣母百花教堂'
        },
        {
            id: 'north-italy-orvieto',
            mark: 90,
            name: {cn: '奥维托（奥尔维耶托）', local: 'Orvieto'},
            regionKey: 'north-italy',
            imgCount: 10,
            desc: '天空之城（Civita di Bagnoregio）'
        },
        {
            id: 'greece-santorini',
            mark: 90,
            name: {cn: '圣托里尼岛（桑托林岛）', local: 'Santorini'},
            regionKey: 'greece',
            imgCount: 10,
            desc: '就是为了贬低它，哪里都说评分高，但是，有不好一面。推荐酒店。'
        },
        {
            id: 'south-germany-anywhere',
            mark: 90,
            name: {cn: '火车路上'},
            regionKey: 'south-germany',
            imgCount: 10,
            desc: '一路上全是风景'
        },
        {
            id: 'south-germany-neuschwanstein',
            mark: 90,
            name: {cn: '新天鹅堡', local: 'Schloss Neuschwanstein'},
            regionKey: 'south-germany',
            imgCount: 10,
            desc: '一路上全是风景'
        },
        {
            id: 'south-germany-hohenzollern',
            mark: 90,
            name: {cn: '霍亨索伦城堡', local: 'Burg Hohenzollern'},
            regionKey: 'south-germany',
            imgCount: 10,
            desc: '人很少，宁静，讲解很好'
        },
        {
            id: 'south-germany-deutsches-museum',
            mark: 90,
            name: {cn: '德意志博物馆', local: 'Deutsches Museum'},
            regionKey: 'south-germany',
            imgCount: 10,
            desc: '慕尼黑（München）（英语：Bavaria，巴伐利亚，德语：拜仁，Bayern），博物馆'
        }
    ];

    window.regionMap = {
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
            name: {cn: '瑞士', local: '英语：Switzerland，法语：Suisse，德语：Schweiz，最常见：Swiss'},
            desc: '其他地方也应该很不错，看照片上伯恩就感觉不错'
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
            name: {cn: '德国', local: 'Germany'},
            desc: '“Germany”原来是源于“日耳曼”，还是德语比较贴近直觉：“Deutschland”，德意志。最发达，德国南部'
        }
    };

})();