$.ajaxPrefilter(function(options) {
        console.log(options.url)
            //在发起真正的Ajax请求之前，统一加上请求的根路径
        options.url = 'http://www.liulongbin.top:3007' + options.url
    })
    //每次调用$.get()  $.post() $.ajax()的时候，都会先调用ajaxPrefilter这个函数
    //在这个函数中可以拿到我们给Ajax的配置对象