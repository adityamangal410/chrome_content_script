
var blueToothExtensionId = "jmmkodoligegidoojapimdphikpfcdcn";

console.log("I am in the content script");

// chrome.management.getAll(function (exts){
//   console.log("Printing exts...");
//   console.log(exts);
// });


chrome.runtime.sendMessage(blueToothExtensionId,{"type": "code"}, function(response) {
    if (!response)
      console.log("last error: " + chrome.runtime.lastError.message);
    else{
      console.log("Response from app: " + response.code);
      // $('#login-otp-passwd').on('focus', function(){
      //   console.log('focussed');
      //   $('#login-otp-passwd').val(response.code);
      // });
      // $('#login-otp-passwd').on('click', function(){
      //   console.log('clicked');
      //   $('#login-otp-passwd').val(response.code);
      // });
      document.addEventListener('DOMContentLoaded', function() {
      // your code here
      console.log('dom');
      document.getElementById("login-otp-passwd").value=response.code;
        }, false);
        $(window).bind("load", function() {
          // code here
          console.log('jq');
        });

    }
});

// chrome.runtime.sendMessage({"message": "send_it", "app": blueToothExtensionId});
