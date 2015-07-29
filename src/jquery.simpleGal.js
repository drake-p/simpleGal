(function($){

  $.fn.extend({

    simpleGal: function (options) {

      var defaults = {
        mainImage: ".placeholder",
        thumbnails: "a"
      };

      options = $.extend(defaults, options);

      return this.each(function () {

        var thumbnail = $(this).find(options.thumbnails),
            mainImage = $(options.mainImage);

        thumbnail.on("click", function (e) {
          e.preventDefault();
          var galleryImage = $(this).attr("href");
          mainImage.attr("src", galleryImage);
        });

      });

    }

  });

})(jQuery);
