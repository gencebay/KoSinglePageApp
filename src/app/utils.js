define(['jquery', 'knockout'], function($, ko) {

    var hasProp = {}.hasOwnProperty;

    (function(){
        console.log("Immediate function executed!");
    }());

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
        extends: function(child, parent){
            for(var key in parent){
                if(hasProp.call(parent, key)){
                    child[key] = parent[key];
                }
            }
            function ctor(){
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor;
            child.base = parent.prototype;
            return child;
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
                if(typeof source[k] === 'object'){
                    for(var key in source[k]){
                        console.log("Source key is", key);
                        if(typeof source[k][key] === 'object'){
                            for(var sub in source[k][key]){
                                if(sub in mapObj[k][key]){
                                    mapObj[k][key][sub](source[k][key][sub]);
                                }
                            }
                        }
                    }
                }
            }
            return source;
        }
    }
});