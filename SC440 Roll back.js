// ==UserScript==
// @name         Change Image Based on Security Council Resolution Number
// @namespace    your-namespace-here
// @version      1
// @description  Changes the image if Security Council Resolution number is less than or equal to 440
// @match        https://www.nationstates.net/nation=*
// @match        https://www.nationstates.net/page=*/card=*
// @match        https://www.nationstates.net/page=deck/nation=*
// @match        https://www.nationstates.net/region=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const MAX_RESOLUTION_NUMBER = 440; // Change this to the maximum Security Council Resolution number for which the image should be changed

    const imageElement = document.querySelector('.wabadge .scbadge');
    const title = imageElement.getAttribute('title');
    const resolutionNumber = parseInt(title.match(/Security Council Resolution # (\d+)/)[1]);

    if (resolutionNumber <= MAX_RESOLUTION_NUMBER) {
        if (title.includes('Condemned')) {
            imageElement.setAttribute('src', 'https://i.imgur.com/rCdUOAi.png');
        } else if (title.includes('Commended')) {
            imageElement.setAttribute('src', 'https://i.imgur.com/yPHKM5g.png');
        }
    }
})();
