#F5LCB : Foundation 5 Long Click Buttons !

It's just a simple jquery plugin (still in developpement, many things to be added) to add a progress bar on a button and make it only work on long click.


##How to use it

If you're using Foundation (I guess you are) you already included **jquery** somewhere on your page, just include F5LCB under it !

```html
<script type="text/javascript" src="/js/vendor/jquery.js"></script>
<script type="text/javascript" src="/js/jquery.f5lcb.js"></script>
```

HTML Markup is a simple button :

```html
<a id="myButton" class="button">Super button</a>
```

Javascript is as simple too :

```javascript
$("#myButton").f5lcb({
        style: "top",
        timer: 1000,
        progBarClass: "prog-bar",
        callback: function() {
                alert('This works !');
        }
});
```

##Allowed options :

- **style**: (string) "top", "bottom" or "inner". Refers to the position of the progress bar. Default is "top".
- **timer**: (int). How long in milliseconds should the button be hold to trigger the callback. Default is 1000.
- **progBarClass**: (string). Class that will be used for the progress bar to allowed you to customize it. Default is "prog-bar".
- **callback**: (function). Function that will be called when the button is pressed long enough.


### What's to come :

- Styling and colors according to the button class (secondary, success, alert, disabled)
- More things again I don't know what yet :)


F5LCB is released under the MIT License.
