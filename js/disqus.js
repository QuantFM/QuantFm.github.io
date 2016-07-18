
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'quantfm';
var disqus_identifier = '';
var disqus_url = 'http://www.quant.fm/';

(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
/* * * Disqus Reset Function * * */
var showComment = function (newIdentifier, newUrl, newTitle) {
    DISQUS.reset({
        reload: true,
        config: function () {
            this.page.identifier = newIdentifier;
            this.page.url = newUrl;
            this.page.title = newTitle;
        }
    });
};


$('div.modal').on('show.bs.modal', function() {

    //处理comment容器
    var modalId = $(this).attr('data-id');
    var destId = 'comment' + modalId;
    var title = $(this).attr('data-title');
    var url = disqus_url + 'podcast/' + modalId;

    $('#disqus_thread').appendTo('#' + destId);

    //配置comment参数
    showComment(destId, url, title)

});

//处理站外链接的跳转
$('.modal-content a').filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');