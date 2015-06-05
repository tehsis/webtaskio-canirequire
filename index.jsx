import React from 'react';
import ModulesList from './src/ModulesList.jsx';

let $searchInput = $('[name=modules-filter]');
let modulesList = React.render(<ModulesList />, $('#canirequire-modules')[0]);

$searchInput.on('input', function(e) {
  modulesList.setState({filter: $(this).val()});
});

$(window).on('scroll', function() {
    if (!isElementInViewport($('#canirequire-search'))) {
      $('.input-main').val($('.header-input').val());
      $('nav').removeClass('slidedup').addClass('animate-nav slideddown');
      $('nav .header-text').addClass('animated-header-text');
    } else {
      $('.header-input').val($('.input-main').val());
      $('nav').addClass('slidedup').removeClass('animate-nav slideddown');
      $('nav .header-text').removeClass('animated-header-text');
    }
});



function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
