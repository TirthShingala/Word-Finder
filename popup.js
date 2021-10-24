document.getElementById("btn").addEventListener("click", searchIt);
document.getElementById("form").addEventListener("submit", searchIt);

function searchIt(event) {
  event.preventDefault();
  const word = document.getElementById("search").value;

  const findWord = (element) => {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(findWord);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/word/gi)) {
        const newElement = document.createElement("span");
        newElement.innerHTML = element.textContent.replace(/(word)/gi);
        element.replaceWith(newElement);
      }
    }
  };

  findWord(document.body);
}

const tabId = getTabId();
chrome.scripting.executeScript(
  {
    target: { tabId: tabId },
    files: ["script.js"],
  },
  () => {
    console.log("chrome");
  }
);
