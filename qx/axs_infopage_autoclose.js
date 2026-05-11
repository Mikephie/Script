let body = $response.body || "";

const inject = `
<script>
(function () {
  function closeAd() {
    try {
      var form = document.getElementById("formWhatsNewClose") || document.formWhatsNewClose;
      if (form) {
        form.submit();
        return true;
      }

      var closeBtn = document.querySelector(".whatsnew_close");
      if (closeBtn) {
        closeBtn.click();
        return true;
      }

      location.href = "closebutton://";
    } catch (e) {}
    return false;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", closeAd);
  } else {
    closeAd();
  }

  setTimeout(closeAd, 100);
  setTimeout(closeAd, 300);
  setTimeout(closeAd, 800);
  setTimeout(closeAd, 1500);
})();
</script>
`;

if (/<\/body>/i.test(body)) {
  body = body.replace(/<\/body>/i, inject + "</body>");
} else {
  body += inject;
}

$done({ body });
