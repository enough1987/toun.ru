'use strict';

// filters

customFilters.filter("firstUpperCase", function () {
    return function (value) {
        if (angular.isString(value)) {
            return value.slice(0, 1).toUpperCase() + value.slice(1);
        }
    };
});

customFilters.filter("onlyCharacters", function () {
    return function (value, len) {
        if (angular.isString(value)) {              	       	
        	return value.length < +len ? value : 
        	value.substr(0,+len) + '...';
        }
    };
});

customFilters.filter("replaceNtoBR", function () {
    return function(value){
        if (angular.isString(value)) { 
            var newstr = value.replace(/\\n/gi, '<br />');       
            return newstr;
        }
        return '';
   };
});

customFilters.filter("replaceNtoBR", function () {
    return function(value){
        if (angular.isString(value)) { 
            var newstr = value.replace(/\\n/gi, '<br />');       
            return newstr;
        }
        return '';
   };
}); 


customFilters.filter("changestartpath", function () {
    return function (value, startpath) {
        if (angular.isString(value)) { 
            if ( !startpath) startpath = '';                                                                 
            return startpath+value;
        }
    };
});


customFilters.filter("changeendpath", function () {
    return function (value, endpath) {
        if (angular.isString(value)) { 
            if ( !endpath ) endpath = '';                                                                  
            return value+endpath;
        }
    };
});

customFilters.filter('trusted', function ($sce) {
    return function(url) {
        if (angular.isString(url)) { 
            return $sce.trustAsResourceUrl(url);
        }
    };
});


customFilters.filter('fromtimestamp', function () {
    return function(value) {
        if (angular.isNumber(+value) && 
            value != '' &&
            value ) { 
            
            var timestamp = +value;          
            var date = new Date(timestamp*1000);

            var newdata =  '';

            var d = date.getDate() ? date.getDate() : 1;
            newdata += d + '/';

            var m = date.getMonth() ? (date.getMonth() + 1) : 1;
            newdata += m + '/' ;

            var y = date.getFullYear() ? date.getFullYear() : 2016;
            newdata += y ;
                                
            return newdata;            
        }
    };
});


customFilters.filter("trustashtml", function ($sce) {
    return function (value) {
        if (angular.isString(value)) {
            return $sce.trustAsHtml(value);
        }
    };
});

