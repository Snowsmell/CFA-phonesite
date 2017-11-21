$(function(){
  //关于收藏的切换
  $('.collectbtn i').on('click',function(){
    $(this).hide().siblings('i').show()
  })
  //关于分享的切换
  $('.icon-share').on('click',function(){
    $('.sharemodal').show()
  })
  $('.sharemodal .cancel').on('click',function(){
    $('.sharemodal').hide()
  })

  //关于课程课程详情的三个切换
  $('nav span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current')
    if($(this).index()=='2'){
      $(this)[0].innerHTML = "评价(1425)"
    }else{
      $('nav span')[2].innerHTML='课程评价'
    }
    $('main>div').eq($(this).index()).show().siblings('div').hide()
  })

  //关于评价打星星
  function givescore(){
    var stars = $(".givescore i")
    stars.on('click',function(){
      var index = $(this).index()
      stars.each(function(i,v){
        if(i<=index){
          $(v).addClass('picked')
        }else{
          $(v).removeClass('picked')
        }
      })
    })
  }
  givescore()

  
  //判断是否到底部
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight > scrollHeight - 60) {
      $('.footer').removeClass('common')
    } else {
      $('.footer').addClass('common')
    }
  });  
})
