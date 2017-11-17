$(function(){
  //个人中心内部删除的逻辑
  $('.delete').on('click',function(){
    $('.deletemodal').fadeIn();
    var that = $(this);
    $('.deletemodal .btns span').on('click',function(){
      if($(this).index()=='1'){
        $('.deletemodal').fadeOut();
      }else{
        console.log('确认删除',that)
        that.parent().parent().parent().remove()
        $('.deletemodal').fadeOut();
      }
    })

  })

})