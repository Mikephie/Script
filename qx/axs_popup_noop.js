let body = $response.body || "";

const inject = `
<style>
.marketing_banner_container,
.InnerSlider,
.swiper-container,
.swiper-wrapper,
.swiper-slide,
.mobile_banner,
.desktop_banner,
img[src*="/marketing_banner/"],
[id*="dynamic"][id*="popup" i],
[class*="dynamic"][class*="popup" i] {
  display:none!important;
  opacity:0!important;
  visibility:hidden!important;
  height:0!important;
  max-height:0!important;
  pointer-events:none!important;
}
</style>
<script>
(function(){
  window.PopupLoader = { init: function(){ return false; } };

  function clean(){
    try {
      document.querySelectorAll(
        '.marketing_banner_container,.InnerSlider,.swiper-container,.swiper-wrapper,.swiper-slide,' +
        'img[src*="/marketing_banner/"],script[src*="popup_"],' +
        '[id*="dynamic" i][id*="popup" i],[class*="dynamic" i][class*="popup" i]'
      ).forEach(function(el){ el.remove(); });
    } catch(e) {}
  }

  clean();
  document.addEventListener("DOMContentLoaded", clean);
  new MutationObserver(clean).observe(document.documentElement, {childList:true, subtree:true});
  setInterval(clean, 300);
})();
</script>
`;

body = body
  .replace(/<script[^>]+src=["']\/html\/wSDK\/js\/popup_(?:config|manager|loader)\.js[^>]*><\/script>/gi, "")
  .replace(/PopupLoader\.init\s*\([^)]*\)\s*;?/gi, "");

body = /<head[^>]*>/i.test(body)
  ? body.replace(/<head[^>]*>/i, m => m + inject)
  : inject + body;

$done({
  headers: {
    ...$response.headers,
    "Cache-Control": "no-store"
  },
  body
});
