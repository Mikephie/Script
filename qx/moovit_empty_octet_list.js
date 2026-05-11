const emptyList = String.fromCharCode(
  0x0f, 0x00, 0x01, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00
);

$done({
  headers: {
    ...$response.headers,
    "Content-Type": "application/octet",
    "Cache-Control": "no-store"
  },
  body: emptyList
});
