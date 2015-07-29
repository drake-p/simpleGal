/*
 * simpleGal -v0.0.1
 * A simple image gallery plugin
 * https://github.com/steverydz/simpleGal
 * 
 * Made by Steve Rydz
 * Under MIT License
 */
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
