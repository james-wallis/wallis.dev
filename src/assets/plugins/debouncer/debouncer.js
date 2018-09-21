var debouncer = function($,sr, of, interval){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || interval);
        };
    };
    
    jQuery.fn[sr] = function(fn){  return fn ? this.bind(of, debounce(fn)) : this.trigger(sr); };
};

// register debouncing functions
// deBouncer(jQuery, 'new eventname', 'original event', timeout);
// Note: keep the jQuery namespace in mind, don't overwrite existing functions!
debouncer(jQuery, 'smartresize', 'resize', 100);
debouncer(jQuery, 'smartload', 'load', 100);