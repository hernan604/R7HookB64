(function(){
var R7HookB64 = function R7HookB64 (args) {
    this.text_to_base64 = function (body) {
//      console.log('=> text_to_base64', body)
        return atob(body);
    }

    this.base64_to_text = function (body) {
//      console.log('=> base64_to_text', body)
        return btoa(body);
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

