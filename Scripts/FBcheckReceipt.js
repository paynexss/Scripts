/*
脚本功能：FileBall解锁高级版
[rewrite_local]
# > FileBox解锁永久高级版
^http?s:\/\/functions.fileball.app/checkReceipt$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/FBcheckReceipt.js
[mitm]
hostname = *.fileball.app
*/


var objc = JSON.parse($response.body);

objc =
    {
        "data": {
            "isActive": true,
            "takeEffect": true,
            "isCrackUser": false,
            "crackAction": "none",
            "checkInterval": 86400,
            "isSandbox": false
        }
    };

$done({body : JSON.stringify(objc)});