define(['jquery', 'knockout'], function($, ko) {

    return {
        each: $.each,
        isUndefined: function(o){
            return typeof o === 'undefined';
        },
        isFunction: function(value){
            return typeof value === 'function';
        },
        isArray: Array.isArray || function(value){
            return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
        },
        map: function(source, mapObj){
            for(var k in mapObj){
                if(ko.isObservable(source[k])) {
                    if(source[k].indexOf !== undefined){
                        // ko.observableArray detect
                        if(k in source){
                            source[k](mapObj[k]);
                        }
                    } else{
                        // ko.observable
                        if(k in source){
                            source[k](mapObj[k]);
                        }
                    }
                }
            }
            return source;
        }
    }
});