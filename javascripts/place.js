(function () {

    // Reference
    var worldExplore = window.worldExplore;
    var recommendList = worldExplore.recommendList;
    var helper = worldExplore.helper;
    var encodeHTML = helper.encodeHTML;

    var placeId;
    var placeItem;
    var regionItem;

    start();

    function start() {
        placeId = helper.getCurrentPlaceId();
        placeItem = recommendList.getPlaceItemById(placeId);
        regionItem = recommendList.regionMap[placeItem.regionKey];

        $('#region-name-cn')[0].innerHTML = encodeHTML(regionItem.name.cn || '-');
        $('#region-name-local')[0].innerHTML = regionItem.name.local
            ? ('（' + encodeHTML(regionItem.name.local) + '）') : '';

        if (regionItem.desc) {
            $('#region-desc')[0].innerHTML = regionItem.desc;
        }
        else {
            $('#region-desc').hide();
        }

        $('#place-name-cn')[0].innerHTML = encodeHTML(placeItem.name.cn || '-');
        $('#place-name-local')[0].innerHTML = encodeHTML(placeItem.name.local || '');
        $('#place-desc')[0].innerHTML = placeItem.desc || '';

        // init imgs
        var imgs = placeItem.imgs || [];
        var htmlImg = ['<ul class="img-list">'];

        for (var i = 0, len = imgs.length; i < len; i++) {
            var imgItem = imgs[i];
            var imgItemType = $.type(imgItem);
            if (imgItemType === 'string' || imgItemType === 'number') {
                imgItem = {suffix: imgItem};
            }

            var imgSrc = 'images/asset/' + placeId + '/' + placeId + '-' + imgItem.suffix + '.JPG';
            htmlImg.push(
                '<li class="img-item">',
                    '<img src="', encodeHTML(imgSrc), '" />',
                    imgItem.desc
                        ? ('<div class="img-desc">' + encodeHTML(imgItem.desc) + '</div>')
                        : '',
                '</li>'
            );
        }

        htmlImg.push('</ul>');
        $('#img-box')[0].innerHTML = htmlImg.join('');
    }

})();