$(function () {
  function carouselMobile() {
    //获取元素
    var carousel = document.querySelector('.carousel');
    var carouselWrap = carousel.querySelector('.carousel-wrap');
    var lis = carouselWrap.querySelectorAll('li');
    var ol = document.querySelector('ol');
    var timer = null;
    var timer2 = null;
    var imgWidth = lis[0].offsetWidth;
    var imgHeight = lis[0].offsetHeight;

    function setHeight() {
      //设置盒子高度
      //循环创建小圆点，动态加入
      carousel.style.height = imgHeight + "px";
      carouselWrap.style.height = imgHeight + "px";
      for (var i = 0; i < lis.length; i++) {
        var olLi = document.createElement('li');
        if (i == 0) { olLi.classList.add('active') }
        ol.appendChild(olLi);
      }
    }
    setHeight();

    window.addEventListener('resize', function () {
      clearTimeout(timer2);
      timer2 = setTimeout(function () {
        ol.innerHTML = '';
        setHeight();
      }, 500)
    })


    //初始化位置
    var left = lis.length - 1;
    var center = 0;
    var right = 1;
    lis[left].style.transform = "translateX(" + (-imgWidth) + "px)";
    lis[center].style.transform = "translateX(0px)";
    lis[right].style.transform = "translateX(" + (imgWidth) + "px)";


    //自动轮播
    timer = setInterval(showNext, 6000);

    //移动端滑动事件
    var startX = 0;
    var moveX = 0;
    var startTime = 0;
    carouselWrap.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startTime = Date.now();
      clearInterval(timer);
    });
    carouselWrap.addEventListener('touchmove', function (e) {
      moveX = e.touches[0].clientX - startX;
      setTransition(false, false, false);
      setPosition(moveX);
    });
    carouselWrap.addEventListener('touchend', function (e) {

      if (Math.abs(moveX) > imgWidth / 3 || (Math.abs(moveX) > 50 && (Date.now() - startTime) < 100)) {
        if (moveX > 0) {
          showPrev()
        } else {
          showNext()
        }
      } else {
        setTransition(true, true, true);
        setPosition(0)
      }
      timer = setInterval(showNext, 6000);
    });


    //右侧下一张
    function showNext() {
      //设置过度，再次归位

      left = center;
      center = right;
      right++;
      if (right > lis.length - 1) {
        right = 0
      }
      setTransition(true, true, false);
      setPosition(0);
      setPoints();
    }

    function showPrev() {
      //设置过度，再次归位

      right = center;
      center = left;
      left--;
      if (left < 0) {
        left = lis.length - 1
      }
      setTransition(false, true, true);
      setPosition(0);
      setPoints();
    }


    //初始位置函数
    function setPosition(dis) {
      lis[left].style.transform = "translateX(" + (-imgWidth + dis) + "px)";
      lis[center].style.transform = "translateX(" + (0 + dis) + "px)";
      lis[right].style.transform = "translateX(" + (imgWidth + dis) + "px)"
    }
    //设置过渡的函数
    function setTransition(flag1, flag2, flag3) {
      if (flag1) {
        lis[left].style.transition = 'transform 1s'
      } else {
        lis[left].style.transition = 'none'
      }
      if (flag2) {
        lis[center].style.transition = 'transform 1s'
      } else {
        lis[center].style.transition = 'none'
      }
      if (flag3) {
        lis[right].style.transition = 'transform 1s'
      } else {
        lis[right].style.transition = 'none'
      }
    }

    function setPoints() {
      var olLis = ol.querySelectorAll('li');
      for (var i = 0; i < olLis.length; i++) {
        olLis[i].classList.remove('active')
      }
      olLis[center].classList.add('active')
    }
  }
  function hotnews() {
    var hotnews = document.querySelector('nav ul'),
      lis = hotnews.querySelectorAll('li');
    //获取li的高度,定时上移ul的margintop
    liH = 50 || lis[0].offsetHeight;
    //手动设置ul的高度
    for (var i = 0; i < 2; i++) {
      var li = lis[i].cloneNode(true)
      hotnews.appendChild(li)
    }
    var ulH = 0;
    [].forEach.call(lis, function (v, i) {
      ulH += liH
    })

    var targetH = ulH
    distance = 0,
      pace = liH;
    setInterval(function () {
      hotnews.style.top = -(distance) + 'px'
      distance += pace
      if (distance > targetH) {
        hotnews.style.top = 0;
        distance = 0
      }
    }, 6000)
  }
  carouselMobile()
  hotnews()

  // 个人中心
  $("#opencenter").on('click', function () {
    $('.modal').slideDown('normal')
    $('body').addClass('log')
    $('html').addClass('log')
  })

  $('.modal').on('click', function (e) {
    if (e.target.nodeName == "DIV") {
      $('.modal').slideUp('normal')
      $('body').removeClass('log')
      $('html').removeClass('log')
    }
  })

  //首页搜索框的响应式
  if ($(window).width() < 361) {
    $('.header>.search>span').text('')
  } else if ($(window).width() < 341) {
    $('.header>.search>span').text('')
  }

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