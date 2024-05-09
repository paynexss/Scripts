/**
地震预警
[rewrite_local]
https://mobile-new.chinaeew.cn/v1/order/apple/vip url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/dzyj.js

[mitm]
hostname = mobile-new.chinaeew.cn
*/


let obj = JSON.parse($response.body);
obj.data.endTime = 2693438935000;
$done({body: JSON.stringify(obj)});