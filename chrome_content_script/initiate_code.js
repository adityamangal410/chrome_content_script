
var blueToothExtensionId = "jmmkodoligegidoojapimdphikpfcdcn";

console.log("I am in the content script");

// chrome.management.getAll(function (exts){
//   console.log("Printing exts...");
//   console.log(exts);
// });


chrome.runtime.sendMessage(blueToothExtensionId,{"type": "code"}, function(response) {
    if (!response)
      console.log("last error: " + chrome.runtime.lastError.message);
    else
      console.log("Response from app: " + response.code);
});

// chrome.runtime.sendMessage({"message": "send_it", "app": blueToothExtensionId});
