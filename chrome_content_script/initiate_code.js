
var blueToothExtensionId = "llgolpdebgflaknadolcbjblnljfnngd";

console.log("I am in the content script");

chrome.runtime.sendMessage(blueToothExtensionId,{"type": "code"}, function(response) {
    if (!response)
      console.log("last error: " + chrome.runtime.lastError.message);
    else
      console.log("Response from app: " + response.code);
});
