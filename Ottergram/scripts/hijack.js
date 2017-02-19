
function addLinkClickHandler() {
    addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function getLinksArray() {
    var anchorArr = document.querySelectorAll('a');
    return anchorArr;
}

function initializeEvents() {
    var link = getLinksArray();
    link.forEach(addLinkClickHandler);
}
initializeEvents();
