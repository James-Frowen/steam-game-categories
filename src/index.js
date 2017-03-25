"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var htmlparser = require("htmlparser");
var gamelist = require("./gamelist/games.json");
function getGamePage(gameName) {
    var url = encodeURI("https://www.google.co.uk/search?q=" + gameName + " site:store.steampowered.com&btnI");
    request(url, {}, function (e, r, body) {
        var options = {
            url: url,
            features: {
                removeScript: true //Remove scripts for innerHTML and outerHTML output
            }
        };
        var handler = new htmlparser.DefaultHandler(function (error, dom) {
            if (error) {
            }
            else {
            }
        });
        var parser = new htmlparser.Parser(handler);
        parser;
    });
}
getGamePage(gamelist[0]);
