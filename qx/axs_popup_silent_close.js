let body = $response.body || "";

const hideCss = `
<style id="qx-silent-hide">
html,body{
  opacity:0!important;
  visibility:hidden!important;
  background:transparent!important;
  overflow:hidden!important;
}
*{
  animation:none!important;
  transition:none!important;
}
</style>
`;

const silentClose = `
<script>
(function(){
  function closeNow(){
    try {
      var f = document.getElementById("formWhatsNewClose") || document.formWhatsNewClose;
      if (f) {
        f.submit();
        return;
      }
    } catch(e) {}

    try {
      var form = document.createElement("form");
      form.method = "POST";
      form.action = "closebutton://";
      document.documentElement.appendChild(form);
      form.submit();
      return;
    } catch(e) {}

    try {
      location.href = "closebutton://";
    } catch(e) {}
  }

  closeNow();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", closeNow, {once:true});
  }

  setTimeout(closeNow, 30);
  setTimeout(closeNow, 120);
  setTimeout(closeNow, 300);
})();
</script>
`;

if (/<head[^>]*>/i.test(body)) {
  body = body.replace(/<head[^>]*>/i, match => match + hideCss + silentClose);
} else {
  body = hideCss + silentClose + body;
}

$done({
  headers: {
    ...$response.headers,
    "Cache-Control": "no-store"
  },
  body
});
