

## AboutImproved camera control for RPG Maker MV. Lets you scroll diagonally,towards a character, set the time it takes to scroll in frames, change whothe camera is following and smooth scrolling which makes the camera 'lag'behind the player or target.

## Plugin Commands
### **Scroll**Similar to the Event command "Scroll Map". Except you can scroll horz andvert directions are same time, for diagonal scrolls.~~~ qCamera scroll [List of options]~~~Possible options:- xX: Set X to the distance, in grid tiles, to travel in x direction- yY: Set Y to the distance, in grid tiles, to travel in y direction- speedX: Set X to the camera speed value. Default: 4- framesX: Set X to the amount of time, in frames, it takes to reach the scroll. Ignores speedX if frames is set.

### **Scroll to**Scroll directly to an event.~~~ qCamera scrollTo [CHARAID] [List of options]~~~- CHARAID - The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)Possible options:- speedX: Set X to the camera speed value. Default: 4- framesX: Set X to the amount of time, in frames, it takes to reach the scroll. Ignores speedX if frames is set.

### **Focus**Set which character the camera should follow.~~~ qCamera focus [CHARAID] [List of options]~~~- CHARAID - The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)Possible options:- speedX: Set X to the camera speed value. (Default is 4)- framesX: Set X to the amount of time, in frames, it takes to reach the scroll. Ignores speedX if frames is set. Default: 15

### **Bars**Draws 2 bars on top and bottom of screen to create a cinematic effect.~~~ qCamera bars [List of options]~~~Possible options:- heightX: Set X to the height of the bars in pixels. Default: 0- framesX: Set X to the amount of time, in frames, it takes to reach the scroll.

## LinksFormated Help: https://quxios.github.io/#/plugins/QCameraRPGMakerWebs: http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use: https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios