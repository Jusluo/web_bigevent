$.ajaxPrefilter(function(options) {
        console.log(options.url)
            //在发起真正的Ajax请求之前，统一加上请求的根路径
        options.url = 'http://www.liulongbin.top:3007' + options.url

        //统一为有权限的接口设置header请求头
        if (options.url.indexOf('/my') !== -1) {
            options.headers = {
                Authorization: localStorage.getItem('token') || ''
            }
        }


        //全局统一挂载complete回调函数
        options.complete = function(res) {
            // console.log(res)
            // 在complete回调函数中，可以使用res.responseJSON拿到服务返回回来的数据
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                //    强制清空token
                localStorage.removeItem('token')
                location.href = '/login.html'
            }
        }

    })
    //每次调用$.get()  $.post() $.ajax()的时候，都会先调用ajaxPrefilter这个函数
    //在这个函数中可以拿到我们给Ajax的配置对象