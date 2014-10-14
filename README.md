# F5LCB : Foundation 5 Long Click Buttons !

It's just a simple jQuery plugin (still in development, many things to be added) to add a progress bar on a button and make it only work on long click.


## How to use it

You can find a simple demonstration here: http://codepen.io/Lynesth/full/acokd/

If you're using Foundation (I guess you are) you already included **jQuery** somewhere on your page, just include F5LCB under it!

```html
<script type="text/javascript" src="/js/vendor/jquery.js"></script>
<script type="text/javascript" src="/js/jquery.f5lcb.js"></script>
```

HTML Markup of a simple button:

```html
<a id="myButton" class="button">Super button</a>
```

JavaScript is as simple too:

```javascript
$("#myButton").f5lcb({
        position: "top",
        timer: 1000,
        progBarClass: "prog-bar",
        resetOnMouseUp: true,
        tooltip: {
                show: true,
                text: "This button needs to be kept pressed in order to work !",
                ttl: 2000
        }
        callback: function(button, progressBar) {
                alert('This works !');
        }
});
```

## Allowed options:

- **position**: (string) "top", "bottom" or "inner". Refers to the position of the progress bar. Default is "top".
- **timer**: (int). How long in milliseconds should the button be hold to trigger the callback. Default is 1000.
- **progBarClass**: (string). Class that will be used for the progress bar to allowed you to customize it. Default is "prog-bar".
- **resetOnMouseUp**: (boolean). Whether the bar should directly go back to 0 if not completed on mouse up. Default is true.
- **tooltip**: (object). Options for the tooltip that is shown if the user simply clicks the button to say that this is a special button that needs to be kept pressed. Options are :
  - **show**: (boolean). Wheter to show or not the tooltip. Default to true.
  - **text**: (string). The text that will appear inside the tooltip.
  - **ttl**: (int). The amount of time that the tooltip needs to be shown in ms. Default is 2000.
- **callback**: (function). Function that will be called when the button is pressed long enough. If no callback is provided, it will simply act like a click on the button, and will use the href attribute. Will be called with 2 arguments refering to the button and progress bar jquery objects.


### What's to come:

- Support for disabled state
- Foundation-less version of the plugin with custom CSS
- More things again I don't know what yet :)


F5LCB is released under the MIT License.
