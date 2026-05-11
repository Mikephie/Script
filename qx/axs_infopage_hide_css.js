$done({
  headers: {
    ...$response.headers,
    "Content-Type": "text/css; charset=utf-8",
    "Cache-Control": "no-store"
  },
  body: `
html,body,#container,.bg_container,img,a,form{
  opacity:0!important;
  visibility:hidden!important;
  background:transparent!important;
  animation:none!important;
  transition:none!important;
}
`
});
