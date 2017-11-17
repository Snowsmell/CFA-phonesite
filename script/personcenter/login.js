$(function () {
  //密码是否可见
  $('.psd i').on('click', function () {
    $(this).hide().siblings('i').show()
    if ($(this).hasClass('icon-psd-close')) {
      $(this).siblings('input')[0].type = 'text'
    } else {
      $(this).siblings('input')[0].type = 'password'
    }
  })

  //登录与注册的切换
  $('.nav span').on('click', function () {
    $(this).addClass('current').siblings('span').removeClass('current')
    $('.form>div').eq($(this).index()).show().siblings('div').hide()
  })
  
})