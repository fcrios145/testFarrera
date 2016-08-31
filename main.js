var SLIDER = (function() {

    var _slide = function(evnt, index) {
        event.preventDefault();
        $(".main-slider li").hide();
        $(".main-slider li:nth-child("+index+")").fadeIn();
    };

    return {
        slide: function(event, index) {
            _slide(event, index);
        }
    }
})();

var MAIN = (function() {
    return {
        modal: function() {
            $('#myModal').modal('show');
        }
    }
})();

