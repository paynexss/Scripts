/**
 脚本搜集、翻译
 脚本功能：剪映解锁会员
 脚本作者：Hausd0rff
 [rewrite_local]
 # > 剪映解锁会员
 ^https?:\/\/commerce-api-.*\.faceu\.mobi\/commerce\/v1\/(subscription\/user_info|purchase\/draft_unlock|effect\/check_effects) url script-request-header https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/JianYing.js
 [mitm]
 hostname = api*.faceu.mobi, api3-lq.faceu.mobi, commerce-api-lf.faceu.mobi, commerce-api-lq.faceu.mobi, lv-api-lq.ulikecam.com, lv-api-hl.ulikecam.com
*/

var headers = $request.headers;
headers['x-tt-trace-id'] = '00-012283520c1c6ec58c9e6791183206ef-012283520c1c6ec5-01';
headers['x-At-Auth'] = '9c39f38466164f32a6a30d0d7b844ab9';
headers['x-Tt-Token'] = '00a9277e3ae82b3aa43ef76c195e6f701601418b24287a28466750a79f1d590b47b2f7a8dc3f837e6703f27f0b379a969f5912c37338c1418b5377ff3f48884ae19129803443f6dac5b3eff94740719889f5492a3c2dc92336d576e6ae71b81922f15-1.0.1';
headers['User-Agent'] = 'VideoFusion 9.8.2 rv:9.8.2.12 (iPhone; iOS 14.2; zh_CN) Cronet';

var modifiedRequest = {};
modifiedRequest.headers = headers;
$done(modifiedRequest);
