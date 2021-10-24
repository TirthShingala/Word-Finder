replaceText(document.body);
alert("ksh");
chrome.tabs.getCurrent(function (tab) {
  alert(tab.title);
});
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/word/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(/(word)/gi);
      element.replaceWith(newElement);
    }
  }
}
