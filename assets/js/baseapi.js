// 每次调用$.get()  $.post() $.ajax() 的时候
// 会先调用 ajaxPrefilter() 这个函数
// 在这个函数中可以拿到给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})