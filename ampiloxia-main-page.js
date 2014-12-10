//<![CDATA[

$(document).ready(function(){$(".quotes blockquote").quotes()});(function(e){e.fn.quotes=function(t,n){if(!t)t=500;if(!n)n=6500;var r=t*4;if(r>n)n=r;var i=e(this),s=e(this).filter(":first"),o=e(this).filter(":last"),u='<div id="quote_wrap"></div>';e(this).wrapAll(u);e(this).hide();e(s).show();e(this).parent().css({height:e(s).height()});setInterval(function(){if(e(o).is(":visible")){var n=e(s);var r=e(n).height()}else{var n=e(i).filter(":visible").next();var r=e(n).height()}e(i).filter(":visible").fadeOut(t);setTimeout(function(){e(i).parent().animate({height:r},t)},t);if(e(o).is(":visible")){setTimeout(function(){e(s).fadeIn(t*2)},t*2)}else{setTimeout(function(){e(n).fadeIn(t)},t*2)}},n)}})(jQuery);

window.twttr=function(e,t,n){var r,i,s=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;i=e.createElement(t);i.id=n;i.async=true;i.src="https://platform.twitter.com/widgets.js";s.parentNode.insertBefore(i,s);return window.twttr||(r={_e:[],ready:function(e){r._e.push(e)}})}(document,"script","twitter-wjs");
$(function(){$(".menu").click(function(){$("#css-menu").css({right:"0"});$("#page_content").css({margin:"0 340px 0 -340px"})});$(".close-menu").click(function(){$("#css-menu").css({right:"-340px"});$("#page_content").css({margin:"0"})})});
$('a,img,img.related-post-item-thumbnail,a.related-post-item-title,span.homekompi a,.close-menu,.entry-social .fb,.entry-social .twitter,.entry-social .gplus,.entry-social .linkedin,.entry-social div.pinterest,.entry-social h4.title-sharing-post,.authorphoto,blockquote,pre,ul#recent-posts a,.ringMenu ul li.main,.ringMenu ul li.main2,.ringMenu ul li a span,.credit-link a,.follow-box div.google-followbox').not('.paginator,.paginator span a,a.related-post-item-titleimg,.follow-box a,a.alexa,img.prtool,a.authorphoto,.post-body .separator a,.facebox a,.twitter-box a,.ringMenu ul li a').attr('rel', 'tooltip');
$('.follow-box a,a.alexa,img.prtool,a.authorphoto,.post-body .separator a,.facebox a,.twitter-box a,.ringMenu ul li a').data("title", $('.follow-box a,a.alexa,img.prtool,a.authorphoto,.post-body .separator a,.facebox a,.twitter-box a,.ringMenu ul li a').attr("title")).removeAttr("title");
$('blockquote,pre').attr('title', 'Click to select all text!');
$(document).ready(function(){var e=$("[rel~=tooltip]"),t=false,n=false,r=false;e.bind("mouseenter",function(){t=$(this);tip=t.attr("title");n=$('<div id="tooltip"></div>');if(!tip||tip=="")return false;t.removeAttr("title");n.css("opacity",0).html(tip).appendTo("body");var e=function(){if($(window).width()<n.outerWidth()*1.5)n.css("max-width",$(window).width()/2);else n.css("max-width",340);var e=t.offset().left+t.outerWidth()/2-n.outerWidth()/2,r=t.offset().top-n.outerHeight()-20;if(e<0){e=t.offset().left+t.outerWidth()/2-20;n.addClass("left")}else n.removeClass("left");if(e+n.outerWidth()>$(window).width()){e=t.offset().left-n.outerWidth()+t.outerWidth()/2+20;n.addClass("right")}else n.removeClass("right");if(r<0){var r=t.offset().top+t.outerHeight();n.addClass("top")}else n.removeClass("top");n.css({left:e,top:r}).animate({top:"+=10",opacity:.9},50)};e();$(window).resize(e);var r=function(){n.animate({top:"-=10",opacity:0},50,function(){$(this).remove()});t.attr("title",tip)};t.bind("mouseleave",r);n.bind("click",r)})});

$(document.body).append('<div id="page-loader"></div>');
$(window).on("beforeunload", function() {
$('#page-loader').fadeIn(1000).delay(6000).fadeOut(1000);
});

function cdClear() {
    var wtarea = document.getElementById('codes');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('cvrt').disabled = false;
}
function cdConvert() {
    var ctarea = document.getElementById('codes'),
        cv = ctarea.value,
        opt1 = document.getElementById('opt1'),
        opt2 = document.getElementById('opt2'),
        opt3 = document.getElementById('opt3'),
        opt4 = document.getElementById('opt4'),
        opt5 = document.getElementById('opt5');
    cv = cv.replace(/\t/g, "    ");
    if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
    if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
    if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
    if (opt4.checked) cv = cv.replace(/</g, "&lt;");
    if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
    if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
        cv = cv.replace(/^/, "<i rel=\"pre\">");
    } else {
        cv = cv.replace(/^/, "<i rel=\"code\">");
    }
    cv = cv.replace(/$/, "</i>");
    ctarea.value = cv;
    ctarea.focus();
    ctarea.select();
};

setTimeout(function(){
$('.videos1').each(function(){
$(this).replaceWith('<iframe class="videos1 loader" src="'+$(this).data('src')+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5000);


var pres = document.querySelectorAll('blockquote,pre');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("click", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
//]]>
