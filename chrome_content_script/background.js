console.log("In ext Background script");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "send_it" ) {
      // chrome.tabs.create({"url": request.url});
      chrome.runtime.sendMessage(request.app,{"type": "code"}, function(response) {
      if (!response)
        console.log("last error: " + chrome.runtime.lastError.message);
      else
        console.log("Response from app: " + response.code);
      });
    }
  }
);