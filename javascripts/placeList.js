(function () {

    // Reference
    var worldExplore = window.worldExplore;
    var recommendList = worldExplore.recommendList;
    var helper = worldExplore.helper;
    var encodeHTML = helper.encodeHTML;

    var CONTENT_CSS = 'place-list-content';
    var BTNS_CSS = 'place-list-btns';
    var BTN_CSS = 'place-list-btn';
    var BTN_ACTIVE_CSS = 'place-list-btn-active';

    /**
     * @public
     */
    var placeList = worldExplore.placeList = {};

    /**
     * @public
     */
    placeList.render = function (el, cssClass) {
        var $el = $(el);

        $el.addClass(cssClass || '');

        var html = [
            '<div class="', BTNS_CSS, '"></div>',
            '<div class="', CONTENT_CSS, '"></div>'
        ];

        $el[0].innerHTML = html.join('');

        $el.on('click', '.btn-by-mark', $.proxy(renderMethod.byMark, $el));
        $el.on('click', '.btn-by-region', $.proxy(renderMethod.byRegion, $el));

        renderBtns($el);

        // first render
        renderMethod.byRegion($el);
    };

    function renderBtns($el) {
        var html = [];
        html.push(
            '<div class="', BTN_CSS, '" data-method="byMark">按打分排序</div>',
            '<div class="', BTN_CSS, ' ', BTN_ACTIVE_CSS, '" data-method="byRegion">按地区分类</div>'
        );
        var $btnBox = $el.find('.' + BTNS_CSS);

        $btnBox[0].innerHTML = html.join('');
        $btnBox.on('click', '.' + BTN_CSS, onBtnClick);

        function onBtnClick(event) {
            var $target = $(event.currentTarget);
            $btnBox.find('.' + BTN_CSS).removeClass(BTN_ACTIVE_CSS);
            $target.addClass(BTN_ACTIVE_CSS);

            renderMethod[$target.attr('data-method')]($el);
        }
    }

    var renderMethod = {

        byMark: function ($el) {
            clearContent($el);

            var $content = getContent($el);
            var placeListByMark = recommendList.getPlaceListByMark();
            var contentArr = [];

            $content.addClass('place-content-by-mark');

            contentArr.push('<ul>');
            for (var i = 0, len = placeListByMark.length; i < len; i++) {
                var placeListItem = placeListByMark[i];
                var nameCN = placeListItem.name.cn || '-';
                var nameLocal = placeListItem.name.local || '';
                contentArr.push(
                    '<li class="place-list-item" data-place-id="', encodeHTML(placeListItem.id), '">',
                        '<span class="place-list-item-cn">', encodeHTML(nameCN), '</span>',
                        '<span class="place-list-item-local">', encodeHTML(nameLocal), '</span>',
                    '</li>'
                );
            }
            contentArr.push('</ul>');

            $content[0].innerHTML = contentArr.join('');

            $content.on('click', '.place-list-item', onPlaceItemClick);
        },

        byRegion: function ($el) {
            clearContent($el);

            var $content = getContent($el);
            var placeListByRegion = recommendList.getPlaceListByRegion();
            var contentArr = [];

            $content.addClass('content-by-region');

            for (var j = 0, lenj = placeListByRegion.length; j < lenj; j++) {
                var regionItem = placeListByRegion[j];
                var regionInfoItem = recommendList.regionMap[regionItem.regionKey];
                var regionNameCN = regionInfoItem.name.cn || '-';
                var regionNameLocal = regionInfoItem.name.local || '';

                contentArr.push(
                    '<div class="place-list-region">',
                        '<div class="place-list-region-name">',
                            '<span class="place-list-region-name-cn">',
                                encodeHTML(regionNameCN),
                            '</span>',
                            '<span class="place-list-region-name-local">',
                                encodeHTML(regionNameLocal),
                            '</span>',
                        '</div>',
                        '<ul>'
                );

                for (var i = 0, len = regionItem.placeList.length; i < len; i++) {
                    var placeListItem = regionItem.placeList[i];
                    var nameCN = placeListItem.name.cn || '-';
                    var nameLocal = placeListItem.name.local || '';
                    contentArr.push(
                        '<li class="place-list-item" data-place-id="', encodeHTML(placeListItem.id), '">',
                            '<span class="place-list-item-cn">', encodeHTML(nameCN), '</span>',
                            '<span class="place-list-item-local">', encodeHTML(nameLocal), '</span>',
                        '</li>'
                    );
                }
                contentArr.push('</ul></div>');
            }

            $content[0].innerHTML = contentArr.join('');

            $content.on('click', '.place-list-item', onPlaceItemClick);
        }

    };

    function onPlaceItemClick(event) {
        var $currTarget = $(event.currentTarget);
        var placeId = $currTarget.attr('data-place-id');
        helper.mainIframeNavigateTo({placeId: placeId});
    }

    function getContent($el) {
        return $el.find('.' + CONTENT_CSS);
    }

    function clearContent($el) {
        getContent($el)
            .off()
            .removeClass()
            .addClass(CONTENT_CSS)
            .html('');
    }

    return placeList;

})();