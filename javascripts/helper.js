(function () {

    // Reference
    var worldExplore = window.worldExplore;

    /**
     * @public
     */
    var helper = worldExplore.helper = {};

    /**
     * @public
     * @param {Object} options
     * @param {string=} options.placeId
     */
    helper.mainIframeNavigateTo = function (options) {
        options = options || {};
        var $ifr = $('#main-ifr');

        if (options.placeId) {
            $ifr[0].src = './place.html?placeId=' + encodeURIComponent(options.placeId);
        }
        else {
            throw new Error('error nav input');
        }
    };

    /**
     * @public
     */
    helper.getCurrentPlaceId = function () {
        var params = helper.parseURL(location.href);
        var placeId = params.placeId;

        if (!placeId) {
            throw new Error('placeId is empty');
        }
        return placeId;
    };

    /**
     * 从url中获取参数
     *
     * @public
     * @param {string} url 源url
     * @return {Object} 参数集合，key是参数名，value是值。不支持多个值返回数组（懒得写了）
     *  每一项形如：{name: 'asdf', value: '1234'}
     */
    helper.parseURL = function (url) {
        var ret = {};

        if (!url) {
            return ret;
        }

        var a = document.createElement('a');
        a.href = url;
        var arr = (a.search || '').replace(/^\?/, '').split('&');

        for (var i = 0, len = arr.length; i < len; i++) {
            var item = (arr[i] || '').split('=');
            if (item.length > 1 && item[0]) {
                ret[item[0]] = item[1];
            }
        }

        return ret;
    };

    /**
     * 对目标字符串进行html编码
     * 编码字符有5个：&<>"'
     *
     * @public
     * @param {string} source 目标字符串
     * @return {string} html编码后的字符串
     */
    helper.encodeHTML = function (source) {
        return source == null
            ? ''
            : String(source)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
    };

})();