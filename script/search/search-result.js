$(function(){
  //搜索结果切换
  $('nav>a').on('click',function(){
    $(this).addClass('current').siblings('a').removeClass('current')
    $('main>div').eq($(this).index()).fadeIn('normal').siblings('div').fadeOut('normal')

  })
})