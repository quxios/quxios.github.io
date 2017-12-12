

## AboutThis plugin lets you add real time line of sight to characters. A line ofsight is similar to a sensor plugin, except characters can't see behindobjects that block their view.This plugin has built-in compatibilty for QMovement. When using QMovementthe line of sight will be more accurate since it'll use a shadow castingalgorithm. When not using QMovement it'll use a simple ray casting.

## How to use
### **Sight Notetag / Comment**To give an event sight, add a note or comment in the following format:~~~ <sight:SHAPE,RANGE,SWITCH,TARGET>~~~- SHAPE: box, circle or poly- RANGE: How far the character can see, in grid spaces- SWITCH: Which switch to toggle. Set to a number or A, B, C, D for self switch- TARGET(Optional): Set to the CHARAID of who to look for. Default: 0  * CHARAID - The character identifier.   - For player: 0, p, or player   - For events: EVENTID, eEVENTID, or eventEVENTID (replace EVENTID with a number)*Note: Notes are applied to all the pages in the event, comments are page based.*

### **Sight examples**Here's an example of a poly sight with a range of 6 and toggles self switch A~~~ <sight:poly,6,A>~~~Here's an example of a circle sight with a range of 4 and toggles switch 1~~~ <sight:circle,4,1>~~~*Note: I left out TARGET because it defaults to player*

## See through events/tiles
### **See through events**To make an event see through add the following note or comment:~~~ <invisible>~~~*Note: Notes are applied to all the pages in the event, comments are page based.*

### **See through tiles**Set the tile's terrain id to the no shadow terrain id set in the pluginparameters.When using QMovement and QM+RegionColliders, you can also create a RegionColliderand add the following in the note:~~~ <noShadow>~~~

## Plugin Commands
### **Check sight**Use this plugin command to manually check if a character can see anothercharacter.~~~ qSight CHARAID check SHAPE RANGE SWITCH TARGETID~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)- SHAPE: box, circle or poly- RANGE: How far the character can see, in grid spaces- SWITCH: Which switch to toggle. Set to a number or A, B, C, D for self switch- TARGETID: Set to the CHARAID of who to look for

### **Toggle charcter invisible**To make a character be invisible use the following~~~ qSight CHARAID visible BOOL~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)- BOOL: Set this to true or false

## LinksFormated Help: https://quxios.github.io/#/plugins/QSightRPGMakerWebs:  http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use:  https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios