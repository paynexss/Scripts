/**
 脚本功能：趣听
 脚本作者：PayNeXC
 [rewrite_local]
 ^https:\/\/api\.next\.bspapp\.com\/client url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/QuTing.js
 [mitm]
 hostname = api.next.bspapp.com
 */

var body = $response.body;
body = JSON.parse(body);
if(body.hasOwnProperty('data')){
    var data = body.data;
    if(data.hasOwnProperty('data')){
        data.data[0].is_vip=true;
        body.data = data;
    }
}
$done({body:JSON.stringify(body)});
