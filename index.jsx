import React from 'react';
import ModulesList from './src/ModulesList.jsx';

let $searchInput = $('[name=modules-filter]');
let modulesList = React.render(<ModulesList />, $('#canirequire-modules')[0]);

$searchInput.on('input', function(e) {
  modulesList.setState({filter: $(this).val()});
});

let lock = false;
$(window).on('scroll', function() {
  if (lock) return;
  lock = true;
  requestAnimationFrame(function() {
    lock = false;
    if (!isElementInViewport($('#canirequire-search'))) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
  })
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
