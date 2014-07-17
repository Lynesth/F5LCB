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

		paddings: {
			top: {
				tiny: { top: "0.9rem", bottom: "0.4125rem" },
				small: { top: "1.15rem", bottom: "0.6625rem" },
				default: { top: "1.25rem", bottom: "0.8125rem" },
				large: { top: "1.4rem", bottom: "0.9125rem" }
			},
			bottom: {
				tiny: { bottom: "0.9rem", top: "0.4125rem" },
				small: { bottom: "1.15rem", top: "0.6625rem" },
				default: { bottom: "1.25rem", top: "0.8125rem" },
				large: { bottom: "1.4rem", top: "0.9125rem" }
			}
		},


		progBarStyle: {
			top: "position: absolute; height: 10px; top: 0; left: 0; width: 100%",
			bottom: "position: absolute; height: 10px; bottom: 0; left: 0; width: 100%; margin: 0",
			inner: "position: absolute; height: 10px; top: 0; left: 0; height: 100%; width: 100%; opacity: 0.3"
		},


		init: function(options) {

			var self = this;

			self.element = options.element;
			self.complete = false;

			if (self.element.hasClass("tiny")) {
				self.bClass = "tiny";
			} else if (self.element.hasClass("small")) {
				self.bClass = "small";
			} else if (self.element.hasClass("large")) {
				self.bClass = "large";
			} else {
				self.bClass = "default";
			}


			// allowed styles : top, bottom, inner
			self.style = options.style || "top";
			self.timer = options.timer || 1000;
			self.callback = options.callback || null;
			self.progBarClass = options.progBarClass || "prog-bar";

			if (self.style != "inner") {
				self.element.css('padding-top', self.paddings[self.style][self.bClass].top)
							.css('padding-bottom', self.paddings[self.style][self.bClass].bottom)
							.css('vertical-align', 'bottom');
			}

			self.element.append('<div class="progress '+self.progBarClass+'" style="'+self.progBarStyle[self.style]+'"><span class="meter" style="width: 0"></span></div>');


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
					return false;
				}
			}).click(function() {
				if (!self.complete || self.callback != null) {
					return false;
				}
			}).drag;

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
