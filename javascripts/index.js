(function () {

    // Reference
    var worldExplore = window.worldExplore;
    var recommendList = worldExplore.recommendList;
    var placeList = worldExplore.placeList;

    start();

    function start() {
        placeList.render($('.left-menu .content'), 'left-menu-content');
    }

})();