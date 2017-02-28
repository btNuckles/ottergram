var CLICKABLE_LINK_SELECTOR = 'a';

function getLinks() {
    var links = document.querySelectorAll(CLICKABLE_LINK_SELECTOR);
    return links;
}

function removeClicks() {
    var links = getLinks();
    var linkArray = [].slice.call(links);
    linkArray.forEach(removeSingleClick);
}

function removeSingleClick(link) {
    link.addEventListener('click', function() {
        event.preventDefault();
    });
}

removeClicks();
