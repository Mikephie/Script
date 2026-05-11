let body = $response.body || "";

const head = `
<style>
html,body,#container,.bg_container,img,a,form{
  opacity:0!important;
  visibility:hidden!important;
  background:transparent!important;
  animation:none!important;
  transition:none!important;
}
</style>
<script>
(function(){
  function closeNow(){
    try {
      var f = document.getElementById("formWhatsNewClose") || document.formWhatsNewClose;
      if (f) { f.submit(); return; }
    } catch(e) {}

    try {
      var f2 = document.createElement("form");
      f2.method = "POST";
      f2.action = "closebutton://";
      document.documentElement.appendChild(f2);
      f2.submit();
      return;
    } catch(e) {}

    try { location.href = "closebutton://"; } catch(e) {}
  }

  closeNow();
  document.addEventListener("DOMContentLoaded", closeNow, {once:true});
  setTimeout(closeNow, 20);
  setTimeout(closeNow, 80);
  setTimeout(closeNow, 200);
  setTimeout(closeNow, 600);
})();
</script>
`;

body = /<head[^>]*>/i.test(body)
  ? body.replace(/<head[^>]*>/i, m => m + head)
  : head + body;

$done({
  headers: {
    ...$response.headers,
    "Cache-Control": "no-store"
  },
  body
});
