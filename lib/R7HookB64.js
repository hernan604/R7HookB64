(function(){
var R7HookB64 = function R7HookB64 (args) {
    this.text_to_base64 = function (body) {
//      console.log('=> text_to_base64', body)
        //https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        var sBase64 = body;
        var sBinaryString = atob(sBase64), aBinaryView = new Uint8Array(sBinaryString.length);
        Array.prototype.forEach.call(aBinaryView, function (el, idx, arr) { arr[idx] = sBinaryString.charCodeAt(idx); });
        return String.fromCharCode.apply(null, new Uint16Array(aBinaryView.buffer));

    }

    this.base64_to_text = function (body) {
        var sString = body;
//      console.log('=> base64_to_text', body)
        //https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        var aUTF16CodeUnits = new Uint16Array(sString.length);
        Array.prototype.forEach.call(aUTF16CodeUnits, function (el, idx, arr) { arr[idx] = sString.charCodeAt(idx); });
        return btoa(String.fromCharCode.apply(null, new Uint8Array(aUTF16CodeUnits.buffer)));
    }

    this.config = function () {
        var hooks = {
            before_send: this.text_to_base64,
            after_parse: this.base64_to_text,
        }
        return hooks;
    }
}
return R7HookB64;
})()

