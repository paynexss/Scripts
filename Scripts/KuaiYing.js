/**
 脚本搜集、翻译
 脚本功能：快影 解锁会员
 脚本作者：伟人
 [rewrite_local]
 ^http[s]?:\/\/(id\.kwaiying|api\.kmovie\.gifshow)\.com.*$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/KuaiYing.js
 [mitm]
 hostname = api.kmovie.gifshow.com,id.kwaiying.com
 */

var responseBody = $response.body;
var requestUrl = $request.url;
const apiUrl = 'https://api.kmovie.gifshow.com/rest/n/kmovie/';
const endpoint = '/pass/ky/profile/get';

if (requestUrl.indexOf(apiUrl) != -1) {
  responseBody = responseBody.replace(/"vip":\w+/g, '"vip":false').
      replace(/"vipValid":\w+/g, '"vipValid":true').
      replace(/"freeCount":\d/g, '"freeCount":999').
      replace(/"Price":\d+/g, '"Price":0').
      replace(/"normalDuration":\d+/g, '"normalDuration":999').
      replace(/"validThrough":\d/g, '"validThrough":1').
      replace(/"subscription":\w+/g, '"subscription":true').
      replace(/"totalCount":\d+/g, '"totalCount":2097152000000').
      replace(/"result":\d+/g, '"result":1').
      replace(/"vipStatus":\w+/g, '"vipStatus":true').
      replace(/"amount":\d+/g, '"amount":0');

  var parsedResponse = JSON.parse(responseBody);
  if (requestUrl.indexOf(endpoint) != -1) {
    for (var i = 0; i < parsedResponse.userProfile.cdnIcons.length; i++) {
      parsedResponse.userProfile.cdnIcons[i].url = 'https://cdnjson.com/images/2024/03/01/54486388818e7b8eefa1af2.jpg';
    }
    parsedResponse.userProfile.nickName = 'by-只会白嫖的小白';
    parsedResponse.userProfile.icons[0] = 'https://cdnjson.com/images/2024/03/01/54486388818e7b8eefa1af2.jpg';
    responseBody = JSON.stringify(parsedResponse);
  }
}

var modifiedResponse = {};
modifiedResponse.body = responseBody;
$done(modifiedResponse);
