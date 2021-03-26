$(function () {
  var header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffset = $(window).scrollTop()
  checkScroll(scrollOffset)
  $(window).on('scroll load resize', function () {
    introH = $('#intro').innerHeight()
    scrollOffset = $(this).scrollTop()
    checkScroll(scrollOffset)
  })
  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault()
    var $this = ($this = $(this)),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top

    $('#nav a').removeClass('active')

    $this.addClass('active')
    $('html, body').animate({ scrollTop: blockOffset + 1 }, 500)
    $('#nav').removeClass('active')
    $('#nav_toggle').removeClass('active')
  })
  $('#nav_toggle').on('click', function (event) {
    event.preventDefault()
    $(this).toggleClass('active')
    $('#nav').toggleClass('active')
  })
  $('[data-collapse]').on('click', function (event) {
    event.preventDefault()
    var $this = $(this),
      blockId = $this.data('collapse')
    $this.toggleClass('active')
  })
  $('[data-slider]').slick({
    infinity: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  $(window).on('scroll', function () {
    $('#nav a').removeClass('active')

    let aboutPosition = $('#about').offset().top
    let servicePosition = $('#service').offset().top
    let workPosition = $('#work').offset().top
    let blogPosition = $('#blog').offset().top
    let contactPosition = $('#footer').offset().bottom

    let scrollPosition = $(window).scrollTop()
    if (aboutPosition < scrollPosition) {
      $('#nav a').removeClass('active')
      $('#link_about').addClass('active')
    }
    if (servicePosition < scrollPosition) {
      $('#nav a').removeClass('active')
      $('#link_service').addClass('active')
    }
    if (workPosition < scrollPosition) {
      $('#nav a').removeClass('active')
      $('#link_work').addClass('active')
    }
    if (blogPosition < scrollPosition) {
      $('#nav a').removeClass('active')
      $('#link_blog').addClass('active')
    }
    if (9300 <= scrollPosition) {
      $('#nav a').removeClass('active')
      $('#link_contact').addClass('active')
    }
  })
})
