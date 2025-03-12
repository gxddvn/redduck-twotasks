const keysMap = ({ keys, target, source }) => {
    keys.forEach((item) => {target[item] = source[item]});
};
ctx.prototype.__applyStyleState = function (styleState) { 
    var keys = Object.keys(styleState); 
    keysMap({ keys, target: this, source: styleState });
}; 
ctx.prototype.__setDefaultStyles = function () { 
    var keys = Object.keys(STYLES);
    keys.forEach((item) => {
        this[item] = STYLES[item].canvas
    }) 
}; 
ctx.prototype.__getStyleState = function () { 
    var keys = Object.keys(STYLES), styleState = {}; 
    keysMap({ keys, target: styleState, source: this });
    return styleState; 
};