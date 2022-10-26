$(document).ready(function () {
  //Submenu
  $('.header-menu .nav-item').mouseenter(function () { 
    if ($(this).hasClass('has-children')) {      
      $(this).find('>a').addClass('active');
      $(this).find('.sub-menu').show();
    }
  });
  $('.header-menu .nav-item').mouseleave(function () { 
    $(this).closest('.nav-item').find('>a').removeClass('active');
    $(this).find('.sub-menu').hide();  
  });  

  //Menu Mobile
  $('.header-mobile-menu-overlay, .header-mobile-menu-close').click(function (e) {     
    $('.header-mobile-menu').removeClass('active');
    $('.header-mobile-menu-overlay, .header-menu-mobile-trigger, .header-mobile-menu-close').toggle();    
  });
  $('.header-menu-mobile-trigger').click(function (e) {     
    $('.header-mobile-menu').addClass('active');
    $('.header-mobile-menu-overlay, .header-menu-mobile-trigger, .header-mobile-menu-close').toggle();    
    $('.header-menu-mobile-trigger').hide();
  });

  $('.nav-mobile .has-children > a').click(function (e) { 
    e.preventDefault();
    $(this).closest('.nav-item').find('.sub-menu').toggle();
  });

  //Anchors

  if ($('.docs-body-content').length) {
    $('.docs-body-content h2').each(function (index, element) {  
      $(this).addClass('anchor_'+index)
      var text = $(this).text();         
      $('.docs-sidebar-anchors').append('<div class="docs-sidebar-ancho" rel="anchor_'+index+'"><span>'+text+'</span></div>');
      $('.mobile-selector-options-wrapper').append('<span class="docs-sidebar-ancho" rel="anchor_'+index+'">'+text+'</span>');
      
    });

    $('.docs-sidebar-ancho').click(function (e) { 
      $('.mobile-selector-options').hide();
      var elem = $(this).attr('rel');
      $('html, body').animate({
        scrollTop: $("."+elem).offset().top
      }, 1000);
      
    });
  }

  if ($('.post-body-content').length) {
      $('.post-body-content h2').each(function (index, element) {
          $(this).addClass('anchor_'+index)
          var text = $(this).text();
          $('.post-sidebar-anchors').append('<div class="post-sidebar-ancho" rel="anchor_'+index+'"><span>'+text+'</span></div>');
          $('.mobile-selector-options-wrapper').append('<span class="post-sidebar-ancho" rel="anchor_'+index+'">'+text+'</span>');
      });

      $('.post-sidebar-ancho').click(function (e) {
          $('.mobile-selector-options').hide();
          var elem = $(this).attr('rel');
          $('html, body').animate({
              scrollTop: $("."+elem).offset().top
          }, 1000);
      });
  }

  //Mobile Selector
  $('.mobile-selector-label').click(function (e) {
    $(this).next().slideToggle();
    
  });

  //AOS	
	if ($(window).width() < 600) {
		$(".aos-init").removeClass('.aos-init');
		$(".aos-animate").removeClass('.aos-animate');
		$('*').removeAttr('data-aos');
	} else {
		AOS.init({
			once: true,
			startEvent: 'load',
			disableMutationObserver: false,
		});
		AOS.refresh(true);
	};

});