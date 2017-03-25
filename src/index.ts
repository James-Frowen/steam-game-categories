import * as request from 'request';
import * as htmlparser from 'htmlparser';

var gamelist: string[] = require("./gamelist/games.json");


function getGamePage(gameName: string) {
    var url = encodeURI("https://www.google.co.uk/search?q=" + gameName + " site:store.steampowered.com&btnI");
    request(url, {}, (e, r, body) => {
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
        parser
    });
}


getGamePage(gamelist[0]);