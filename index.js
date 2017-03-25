"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var gamelist = require("./games.json");
function getGamePage(gameName) {
    var url = encodeURI("https://www.google.co.uk/search?q=" + gameName + " site:store.steampowered.com&btnI");
    request(url, {}, function (e, r, body) {
        var options = {
            url: url,
            features: {
                removeScript: true //Remove scripts for innerHTML and outerHTML output
            }
        };
        //var window:Window = dom(body, null, options);
        //var document:Document = window.document;
        //var tagsElement = document.getElementsByClassName("glance_tags_ctn popular_tags_ctn");
        //console.log(tagsElement);
    });
}
getGamePage(gamelist[0]);
