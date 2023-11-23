
$(document).ready(function() {
  $.fancybox.defaults.backFocus = "false";
  $.fancybox.defaults.trapFocus = "false";
  if (window.location.href.indexOf('202') !== -1) {
    $('img').each(function() {
      if ($(this).parent().hasClass('social')) return;
      if ($(this).parent().hasClass('fancybox')) return;
      if ($(this).hasClass('nofancybox')) return;
      var alt = this.alt;
      if (alt) $(this).after('<span class="caption">' + alt + '</span>');
      $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src'))  + '" class="fancybox"></a>');
    });
    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article');
    });

    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
      helpers : {
      title: { type: 'inside'}
      }
    });
  }
});
