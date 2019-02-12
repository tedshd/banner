/**
 *
 * @authors Your Name (you@example.org)
 * @date    2019-02-12 15:00:57
 * @version $Id$
 */

(function () {
    var ads = document.querySelectorAll('.ad-banner');
    for (var i = ads.length - 1; i >= 0; i--) {
        var w = ads[i].getAttribute('data-ad-w'),
            h = ads[i].getAttribute('data-ad-h'),
            id = ads[i].getAttribute('data-ad-id');
        componentHTML(w, h, id);
    }
    var ad = {},
        idTable = [];
    function componentHTML(w, h, id) {
        var js = document.createElement('script');
        if (!id) {
            console.error('ad not ad id');
            return;
        }
        js.src = 'http://www.example.com?w=' + w + '&h=' + h + '&id=' + id + '&callback=ad.' + id;
        ad[id] = function (data) {
            if (!document.querySelector('#ad-unit-' + data.id)) {
                console.error('ad id error');
                return;
            }
            document.querySelector('#ad-unit-' + data.id).innerHTML = '<a rel="nofollow" target="_blank" style="display:block;width:' + data.w + 'px;height:' + data.h + 'px;" href="' + data.url + '"><img src="' + data.image + '"></a>';
        };
        document.body.appendChild(js);
    }
})();
