import * as request from 'request';
import * as fs from 'fs';
import * as cheerio from 'cheerio';

var gamelist: string[] = require("./gamelist/games.json");


function getGamePage(gameName: string): void {
    var url = encodeURI("https://www.google.co.uk/search?q=" + gameName + " site:store.steampowered.com&btnI");
    request(url, {}, (e, r, body) => {
        var options = {
            url: url,
            features: {
                removeScript: true //Remove scripts for innerHTML and outerHTML output
            }
        };
        let $ = cheerio.load(body);
        let values = $(tagsOnPage).innerHTML;
        console.log(values);
        
    });
}

var tagsOnPage = "glance_tags_ctn popular_tags_ctn";

getGamePage(gamelist[0]);
