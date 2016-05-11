// F E

var fe = {
    g: function(type, value) {
        switch (type) {
            case "i":
                return document.getElementById(value);
            case "c":
                return document.getElementsByClassName(value);
            case "t":
                return document.getElementsByTagName(value);
            case "n":
                return document.getElementsByName(value);
            case "s":
                return document.querySelectorAll(value);

            default:
                alert("fe.g(type) is not valid");
        }
    },

    c: function(element) {
        return document.createElement(element);
    },

    open: function(oElement) {
        oElement.style.display = "block";

        return true;
    },

    close: function(oElement) {
        oElement.style.display = "none";

        return false;
    },

    click: function(oElement) {
        if (oElement.style.display == "block") fe.close(oElement);
        else fe.open(oElement);
    },

    point: function(id, point, fun) {
        var elem = fe.g("i", id);
        var start = innerHeight - point;

        if (start >= elem.getBoundingClientRect().top) {
            fun(elem);
        }
    }
};
