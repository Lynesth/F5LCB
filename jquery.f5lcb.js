/**
 * FOUNDATION 5 LONG CLICK BUTTONS
 * 
 * @author Robin "Lynesth" GOMES
 * @mail lyn@tweefox.nc
 * 
 * ** THIS PLUGIN IS IN DEVELOPMENT -- VERY EARLY STAGE ** *
 */

(function($) {

	function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

	F5LCB = clazz(Object, {

		init : function(options) {

			var self = this;

			self.element = options.element;
			self.complete = false;

			// allowed styles : top, bottom, inner
			self.style = options.style || "top";
			self.timer = options.timer || 1000;
			self.callback = options.callback || null;
			self.progBarClass = options.progBarClass || "prog-bar";

			if (self.style == "inner") {
				self.element.append('<div class="progress '+self.progBarClass+'" style="position: absolute; height: 10px; top: 0; left: 0; height: 100%; width: 100%; opacity: 0.3"><span class="meter" style="width: 0"></span></div>');
			} else if (self.style == "bottom") {
				self.element.css('padding-top', '15px').css('padding-bottom', '22px');
				self.element.append('<div class="progress '+self.progBarClass+'" style="position: absolute; height: 10px; bottom: 0; left: 0; width: 100%; margin: 0"><span class="meter" style="width: 0"></span></div>');
			} else {
				self.element.css('padding-top', '22px').css('padding-bottom', '15px');
				self.element.append('<div class="progress '+self.progBarClass+'" style="position: absolute; height: 10px; top: 0; left: 0; width: 100%"><span class="meter" style="width: 0"></span></div>');
			}


			this.element.on('mousedown', function() {
				if (!self.complete) {
					$(this).children("div."+self.progBarClass).children(".meter").animate({ width: "100%" }, self.timer, function() {
						self.complete = true;
						if (self.callback != null) {
							self.callback();
						} else {
							self.element[0].click();
						}
						$(document).trigger('mouseup');
					});
				}
			}).click(function() {
				if (!self.complete || self.callback != null) {
					return false;
				}
			});

			$(document).on('mouseup', function() {
				$("div."+self.progBarClass).children(".meter").each(function() {
					var $this = $(this);
					$this.stop();
					if ($this[0].style.width != "100%") {
						$this.css('width', 0);
					}
				});
			});

		}

	});


	$.fn.f5lcb = function(options) {
		var options = options || {};
		this.each(function() {
			options.element = $(this);
			f5lcb = new F5LCB();
			f5lcb.init(options);
		});
	};

})( jQuery );
