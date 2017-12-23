

## About
Adds additional features to Pictures. You can easily apply mouse events 
(onClick, onRightClick, onMouseEnter, onMouseExit, onMouseOver, onMouseOut)
to pictures and have a common event run or change a value of a switch. You
can also apply easing effects to a pictures movement, scaling or opacity
change.


## Plugin commands
### **Mouse Events**
~~~
 qPicture [PICID] [MOUSEEVENT] [HANDLER] [ARG1]
~~~
PICID - The ID (Picture Number) of the picture to apply this to

MOUSEEVENT - The mouse event to add to this picture, can be:
 - onClick: Runs when the picture is left clicked
 - onRightClick: Runs when the picture is right clicked
 - onMouseEnter: Runs when the mouse enters the picture
 - onMouseExit: Runs when the mouse moves off the picture
 - onMouseOver: Runs when the mouse is over the picture (for performance reasons
 may be best to use onMouseEnter instead)
 - onMouseOut: Runs when the mouse isn't over the picture (for performance reasons
 may be best to use onMouseExit instead)

HANDLER - What to do when the mouse event runs, can be:
 - switchX: Where X is the switch ID, changes a switchs value to what is set
 on ARG1
 - ceX: Where X is the common event ID, runs a common event
 - clear: Removes the handler that assigned to this picture

ARG1 - Only used when handler is `switchX`, set this to:
 - true: Makes the switch true whenever this mouse event runs
 - false: Makes the switch false whenever this mouse event runs
 - toggle: Toggles the switch value whenever this mouse event runs



### **Click Through Alpha**
Some of your pictures may have alpha (transparent) areas and you don't want
those areas to be able to trigger mouse events. So you can disable the alpha
areas per picture. Note that enabling this can impact performance!
~~~
 qPicture [PICID] alpha [TRUE or FALSE]
~~~
PICID - The ID (Picture Number) of the picture to apply this to

TRUE or FALSE - Set to true to click through alpha, set to false to
 go back to default behavior.


### **Ease**
~~~
 qPicture [PICID] ease [TYPE] [MODE]
~~~
PICID - The ID (Picture Number) of the picture to apply this to

TYPE - What to apply this easing to, can be:
 - move
 - scale
 - opacity

MODE - The easing mode (Default: linear)
 - linear
 - easeIn
 - easeOut
 - easeInOut


## Examples
~~~
 qPicture 1 onClick ce1
~~~
Runs common event 1 whenever you click on picture 1

~~~
 qPicture 1 alpha true
~~~
Will ignore the transparent areas in picture 1

~~~
 qPicture 2 onMouseEnter switch1 true
 qPicture 2 onMouseExit switch1 false
~~~
Sets switch 1 to true when the mouse is over the picture, and sets the switch
to false when it isn't.
Note: You can also use `onMouseOver` and `onMouseOut` here but `Enter` and `Exit`
perform better as they only run once when the mouse first enters or exits while
`Over` and `Out` run continuously.

~~~
 qPicture 1 ease move easeInOut
~~~
Picture 1 will `easeInOut` whenever you move it now


## Links
Formated Help:

 https://quxios.github.io/#/plugins/QPicture

RPGMakerWebs:

 http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/

Terms of use:

 https://github.com/quxios/QMV-Master-Demo/blob/master/readme.md

Like my plugins? Support me on Patreon!

 https://www.patreon.com/quxios

