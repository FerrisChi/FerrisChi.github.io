<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/avatar.png");
         document.title = 'My life for Aiur';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/avatar.png");
         document.title = 'En taro Tassader' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });