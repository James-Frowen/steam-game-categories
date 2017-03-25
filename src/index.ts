import * as request from 'request';
import * as htmlparser from 'htmlparser';
import * as fs from 'fs';
import * as jsonQuery from 'json-query';

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
        var handler = getHtmlJsonHandler();
        var parser = new htmlparser.Parser(handler);
        parser.parseComplete(body);
    });
}

function getHtmlJsonHandler() {
    return new htmlparser.DefaultHandler(function (error, dom) {
        if (error) { }
        else {
            var json = JSON.stringify(dom);
            fs.writeFileSync("dump/dom.json", json);
            searchJson(json);
        }
    });
}
function searchJson(json: any): void {
    var helper = {
        searchForClass: (input:any, className:string):any => {
            //if attribs contains class add to return list
            //search children
            // return array of classes
        }
    };
    var testJson = [
        {
            children: [
                { children: [{ "name": "one", "data": "123" }, { "name": "two", "data": "234" }] }
            ]
        }];
    var pattern = "[**][*name=one].name";
    //var pattern = `[**][*.name=body].name`;
    var out = jsonQuery(pattern, { data: testJson });
    console.log(out.value);

}

var tagsOnPage = "glance_tags_ctn popular_tags_ctn";

//getGamePage(gamelist[0]);

var json = require("./dump/dom.json");

searchJson(json);