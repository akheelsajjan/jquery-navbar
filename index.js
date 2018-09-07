$(document).ready(()=>{

  $('.para').hide();
  $('.list').hide();
  $('.one').hide();
  $('.one-two').hide();
  $('.one-three').hide();

  $( ".item1" ).hover(
    function() {
      $( this ).addClass('two')
    }, function() {
      $( this ).removeClass('two')
    }
  );

  $( ".button" ).hover(
    function() {
      $( this ).addClass('button-hover');
    }, function() {
      $( this ).removeClass('button-hover')
    }
  );

  $( "#link" ).hover(
    function() {
      $('.para').show()
    }, function() {
      $( '.para' ).hide()
    }
  );

  $('.button').mousedown(function(){
    $('.button').addClass('button-click')
  })
  $('.button').mouseup(function(){
    $('.button').removeClass('button-click')
  })


  $('.button').click(function(){
    $('.list').toggle()
  })

  $('.list').mouseleave(function(){
    $('.list').hide()
  })

  $( "ol" ).hover(
    function() {
      $(this).addClass('list-hover')
    }, function() {
      $( this ).removeClass('list-hover')
    }
  );

  $('ul.list ol:eq(0)').click(function(){
    $('.one').show(function(){
      $('.button,ul.list ol:eq(1),ul.list ol:eq(2)').click(function(){
        $('.one').hide()
      })
    });
  })
  $('ul.list ol:eq(1)').click(function(){
    $('.one-two').show(function(){
      $('.button,ul.list ol:eq(0),ul.list ol:eq(2)').click(function(){
        $('.one-two').hide()
      })
    });
  })
  $('ul.list ol:eq(2)').click(function(){
    $('.one-three').show(function(){
      $('.button,ul.list ol:eq(0),ul.list ol:eq(1)').click(function(){
        $('.one-three').hide()
      })
    });
  })

  
  })
