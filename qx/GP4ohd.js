/*        
        ➪：脚本名称: GP4o （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


if ($request.url.includes('api/img/aiSketch')) {
    let body = $request.body.replace(/("taskParameter"\s*:\s*)"\d+"/, '$1"0"');
    $done({ body: body });
} else {
    $done({});
}
