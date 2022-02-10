(function ($) {
    /**
     *
     * @param options
     */
    $.fn.scrollfading = function (options) {

        this.fadeTo(0, 0); // reset

        var defaults = $.extend({
            speed: 300
        }, options);

        var $w = $(window), $d = $(document);

        var $scrollfading = $.proxy(function (speed) {
            this.each(function (i, e) {
                var $e = $(e), a = $e.offset().top + $e.height(), b = $w.scrollTop() + $w.height();
                if (a < b) {
                    $e.fadeTo(speed, 1);
                }
            });
        }, this);

        // $w.load("#", function (e) {
        //     $scrollfading(defaults.speed);
        // });

        $w.scroll(function (e) {
            if ($w.scrollTop() + $w.height() <= $d.height()) {
                $scrollfading(defaults.speed * 2);
            }
        });
    }
})(jQuery);