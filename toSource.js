(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node and CommonJS-like environments that support module.exports
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {
    // these keywords are not allowed for an object key
    var keywordRegexp = /^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/;

    // ensure a valid object key
    function legalKey(string) {
        if(!/^[a-z_$][0-9a-z_$]*$/gi.test(string) || keywordRegexp.test(string)) {
            throw ('invalid object key' + string);
        };

        return string;
    }
    
    // recursive function to get a source string
    return function toSource(obj) {
        if(obj === null) {
            return 'null';
        }

        if (obj === undefined) {
            return 'undefined';
        }
        var type = typeof obj;
        if (type === "number" || type === "boolean" || type === "function" || obj instanceof RegExp) {
            return obj.toString();
        }

        if (obj instanceof Date) {
            return 'new Date(' + obj.getTime() + ')';
        }

        if (typeof obj === 'string') {
            return "'" + obj.replace("'", "\\'") + "'";
        }

        if (obj instanceof Array) {
            return '[' + obj.map(function(item) { return toSource(item); }).join(',') + ']';
        }

        // default object behaviour
        var items = Object.keys(obj).map(function(k) {
            return legalKey(k) + ':' + toSource(obj[k]);
        });

        return '{' + items + '}';
    };
}));
