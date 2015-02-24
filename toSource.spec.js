describe('toSource', function () {

    // load toSource module
    var toSource;
    beforeEach(function (done) {
        toSource = toSource || require('./toSource');
    });

    it('toSource is Loaded', function () {
        expect(toSource).toBeDefined();
        expect(typeof toSource).toBe('function');
    });

    it('stringify strings nulls and undefineds', function () {
        expect(toSource('asd\'d')).toBe('\'asd\\\'d\'');
        expect(toSource('asd"d')).toBe('\'asd"d\'');
        expect(toSource("")).toBe('\'\'');
        expect(toSource(null)).toBe('null');
        expect(toSource(undefined)).toBe('undefined');
    });

    it('stringify booleans', function () {
        expect(toSource(true)).toBe('true');
        expect(toSource(false)).toBe('false');
    });

    it('stringify regex', function () {
        expect(toSource(/[1-3]/g)).toBe('/[1-3]/g');
        expect(toSource(/a+./)).toBe('/a+./');
    });

    it('stringify function', function test() {
        expect(toSource(test)).toBe(test.toString());
    });

    it('stringify date', function () {
        var aDate = new Date(2014, 4, 2);
        var now = new Date;
        expect(toSource(aDate)).toBe('new Date(' + aDate.getTime() + ')');
        expect(toSource(now)).toBe('new Date(' + now.getTime() + ')');
    });

    it('stringify Numbers', function () {
        expect(toSource(0)).toBe('0');
        expect(toSource(10)).toBe('10');
        expect(toSource(0.48)).toBe('0.48');
        expect(toSource(-5)).toBe('-5');
        expect(toSource(-5.5)).toBe('-5.5');
        expect(toSource(4e-8)).toBe('4e-8');
    });

    it('stringify Arrays', function () {
        expect(toSource([])).toBe('[]');
        expect(toSource([1, 'asd'])).toBe('[1,\'asd\']');
        var now = new Date;
        expect(toSource([now, false])).toBe('[new Date(' + now.getTime() + '),false]');
    });

    it('stringify Objects', function () {
        expect(toSource({})).toBe('{}');
        expect(toSource({ a: 1, banana: 'describe' })).toBe('{a:1,banana:\'describe\'}');
        expect(toSource({a:1,banana:'describe',subObj:{a:1,banana:'describe'}})).toBe('{a:1,banana:\'describe\',subObj:{a:1,banana:\'describe\'}}');
    });

    it('stringify ilegal keys', function () {
        var getSource = function (key) {
            var o = {};
            o[key] = null;
            return function() {toSource(o);}
        }

        expect(getSource('1')).toThrow();
        expect(getSource('abstract')).toThrow();
        expect(getSource('boolean')).toThrow();
        expect(getSource('break')).toThrow();
        expect(getSource('byte')).toThrow();
        expect(getSource('case')).toThrow();
        expect(getSource('catch')).toThrow();
        expect(getSource('char')).toThrow();
        expect(getSource('class')).toThrow();
        expect(getSource('const')).toThrow();
        expect(getSource('continue')).toThrow();
        expect(getSource('debugger')).toThrow();
        expect(getSource('default')).toThrow();
        expect(getSource('delete')).toThrow();
        expect(getSource('do')).toThrow();
        expect(getSource('double')).toThrow();
        expect(getSource('else')).toThrow();
        expect(getSource('enum')).toThrow();
        expect(getSource('export')).toThrow();
        expect(getSource('extends')).toThrow();
        expect(getSource('false')).toThrow();
        expect(getSource('final')).toThrow();
        expect(getSource('finally')).toThrow();
        expect(getSource('float')).toThrow();
        expect(getSource('for')).toThrow();
        expect(getSource('function')).toThrow();
        expect(getSource('goto')).toThrow();
        expect(getSource('if')).toThrow();
        expect(getSource('implements')).toThrow();
        expect(getSource('import')).toThrow();
        expect(getSource('in')).toThrow();
        expect(getSource('instanceof')).toThrow();
        expect(getSource('int')).toThrow();
        expect(getSource('interface')).toThrow();
        expect(getSource('long')).toThrow();
        expect(getSource('native')).toThrow();
        expect(getSource('new')).toThrow();
        expect(getSource('null')).toThrow();
        expect(getSource('package')).toThrow();
        expect(getSource('private')).toThrow();
        expect(getSource('protected')).toThrow();
        expect(getSource('public')).toThrow();
        expect(getSource('return')).toThrow();
        expect(getSource('short')).toThrow();
        expect(getSource('static')).toThrow();
        expect(getSource('super')).toThrow();
        expect(getSource('switch')).toThrow();
        expect(getSource('synchronized')).toThrow();
        expect(getSource('this')).toThrow();
        expect(getSource('throw')).toThrow();
        expect(getSource('throws')).toThrow();
        expect(getSource('transient')).toThrow();
        expect(getSource('true')).toThrow();
        expect(getSource('try')).toThrow();
        expect(getSource('typeof')).toThrow();
        expect(getSource('undefined')).toThrow();
        expect(getSource('var')).toThrow();
        expect(getSource('void')).toThrow();
        expect(getSource('volatile')).toThrow();
        expect(getSource('while')).toThrow();
        expect(getSource('with')).toThrow();
    });
});
