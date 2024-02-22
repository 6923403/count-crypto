const crypto = require('crypto')
function removeSpace(text){
    if(typeof text !== "string") throw new TypeError("Need text is string");
    return text.replace(/\s/g, "");
}

function toLowText(text){
    if(typeof text !== "string") throw new TypeError("Need text is string");
    return text.toLowerCase();
}

function toSha256(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");
    let hash = crypto.createHash('sha256');
    hash.update(text);

    return hash.digest('hex');
}

function toMd5(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

    let hash = crypto.createHash('md5');
    hash.update(text);

    return hash.digest('hex');
}

module.exports = {
    removeSpace: removeSpace,
    toLowText: toLowText,
    toSha256: toSha256,
    toMd5: toMd5
};
