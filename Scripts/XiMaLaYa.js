/*
 脚本搜集、翻译
 脚本功能：喜马拉雅 会员
 脚本作者：伟人

 [rewrite_local]
 ^http[s]?:\/\/openapi\.mysteel\.com/v5/getAdv.htm url reject
 ^http[s]?.+ulogs.umeng.com url reject
 ^http[s]?.+gslbali.ximalaya.com url reject
 ^http[s]?.+adse.ximalaya.com url reject
 ^http[s]?.+gslbtx.ximalaya.com url reject
 ^http[s]?.+location.ximalaya.com url reject
 ^http[s]?.+passport.ximalaya.com url reject
 ^http[s]?.+adbehavior.ximalaya.com url reject
 ^http[s]?.+ad.ximalaya.com url reject
 ^http[s]?.+audid-api.taobao.com url reject
 ^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))\/mobile-playpage\/track\/v3\/baseInfo\/ts url script-request-header https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/XiMaLaYaHeader.js
 ^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/XiMaLaYa.js
 [mitm]
 hostname = 180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,182.254.*.*
 **/

var responseBody = $response.body,
    requestUrl = $request.url;

const string1 = '/mobile-playpage/playpage/tabs',
    string2 = 'v1/album/track/ts';
const string3 = 'business-vip-presale-mobile-web/page/ts',
    string4 = '/product/promotion/v1/album/price/ts',
    string5 = 'mobile-user/v2/homePage/',
    string6 = 'vip/v1/recommand',
    string7 = '/track/v3/baseInfo',
    string8 = '/product/detail/v1/module/data/dynamic',
    string9 = '/product/detail/v1/basicInfo/dynamic/ts';

if (requestUrl.indexOf(string1) != -1) {
  responseBody = responseBody.replace(/"sampleDuration":\d/g, '"sampleDuration":99999').replace(/"isFree":\w+/g, '"isFree":true').replace(/"text":"[^"]+/g, '"text":"脚本由伟人免费提供!当前是体验[2]线路').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"url":"[^"]+/g, '"url":"https://t.me/WeiRenQAQ/163');
}
if (requestUrl.indexOf(string2) != -1) {
  responseBody = responseBody.replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isSample":\w+/g, '"isSample":true').replace(/"isAuthorized":\w+/g, '"isAuthorized":true');
}
if (requestUrl.indexOf(string8) != -1) {
  responseBody = responseBody.replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"isSample":\w+/g, '"isSample":true').replace(/"vipPurchaseText":"[^"]+/g, '"vipPurchaseText":"点击添加作者TG频道').replace(/"vipPurchaseUrl":"[^"]+/g, '"vipPurchaseUrl":"https://t.me/WeiRenQAQ');
}
if (requestUrl.indexOf(string9) != -1) {
  responseBody = responseBody.replace(/"buttonContent\\":\\"[^"]+/g, '"buttonContent\\":\\"❤️❤️点击添加作者TG频道❤️❤️\\').replace(/"url\\":\\"[^"]+/g, '"url\\":\\"https://t.me/WeiRenQAQ\\').replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"isSample":\w+/g, '"isSample":true');
}
if (requestUrl.indexOf(string3) != -1) {
  responseBody = responseBody.replace(/nickName":"[^"]+/g, 'nickName":"by~伟人').replace(/vipStatus":\d/g, 'vipStatus":2').replace(/subtitle":"[^"]+/g, 'subtitle":"2999-09-09免费提供禁止贩卖').replace(/userLevelIcon":"[^"]+/g, 'userLevelIcon":"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png').replace(/userLogoPic":"[^"]+/g, 'userLogoPic":"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg');
}

var responseObject = JSON.parse(responseBody);
if (requestUrl.indexOf(string4) != -1) {
  responseObject.data.behaviors[0].action.url = 'https://t.me/WeiRenQAQ/163';
  responseObject.data.behaviors[0].vipPurchaseText = '点击添加作者TG频道';
  responseObject.data.behaviors[0].labelSubTitle = '添加频道获取最新脚本继续畅听！👉';
  responseObject.data.behaviors[0].labelText = '出现了意外？这是付费节目？';
  responseBody = JSON.stringify(responseObject);
}

setInterval(function () {
  debugFunction();
}, 4000);

if (requestUrl.indexOf(string5) != -1) {
  responseObject.data.nickname = 'by~伟人';
  responseObject.data.isVip = true;
  responseObject.data.vipExpireTime = 32493834549000;
  responseObject.data.vipStatus = 2;
  responseObject.data.vipLevel = 5;
  responseObject.data.anchorVipInfo.isVip = true;
  responseObject.data.vipInfo.isVip = true;
  responseObject.data.vipInfo.level = 5;
  responseObject.data.mobileLargeLogo = 'https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg';
  responseObject.data.mobileSmallLogo = 'https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg';
  responseObject.data.mobileMiddleLogo = 'https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg';
  responseBody = JSON.stringify(responseObject);
}
if (requestUrl.indexOf(string6) != -1) {
  delete responseObject.data.modules;
  responseObject.data.vipStatus = 2;
  responseObject.data.nickName = 'by~伟人';
  responseBody = JSON.stringify(responseObject);
}
if (requestUrl.indexOf(string7) != -1) {
  responseObject.msg = '我累了😭。请使用别的线路或者隔一天再来💔';
  responseBody = JSON.stringify(responseObject);
}

const finalResponse = {};
finalResponse.body = responseBody;
$done(finalResponse);
