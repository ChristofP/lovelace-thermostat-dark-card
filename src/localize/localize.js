"use strict";
exports.__esModule = true;
exports.localize = void 0;
var en = require("./languages/en.json");
var nb = require("./languages/nb.json");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var languages = {
    en: en,
    nb: nb
};
function localize(string, search, replace) {
    if (search === void 0) { search = ''; }
    if (replace === void 0) { replace = ''; }
    var lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');
    var translated;
    try {
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages[lang]);
    }
    catch (e) {
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
    }
    if (translated === undefined)
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}
exports.localize = localize;
