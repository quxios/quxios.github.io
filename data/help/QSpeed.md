

## AboutThis plugin lets you set custom move speeds for your characters. It alsoadds an acceleration / deceleration effect when that characters move speedis changing. This can be enabled / disabled.

## Plugin Commands
### **Setting custom move speed**~~~ qSpeed [CHARAID] set [MOVESPEED] [list of options]~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)- MOVESPEED: The speed to set the character too. Can be a float; ex: 3.5Possible options:- accel: Character needs to accelerate / decelerate to this new speed.

### **Enabling Acceleration**~~~ qSpeed [CHARAID] enableAccel~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)

### **Disabling Acceleration**~~~ qSpeed [CHARAID] disableAccel~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)

### **Setting Acceleration time**~~~ qSpeed [CHARAID] duration [TIME]~~~- CHARAID: The character identifier. - For player: 0, p, or player - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)- TIME: The time in frames it takes the character to reach new speeds.

### **Examples**~~~ qSpeed 1 set 3.65 qSpeed e1 set 3.65 qSpeed event1 set 3.65~~~*Note: All 3 are the same, just using a different character id method*Event 1 will have it's move speed set to 3.65. Since there's no accel optionhe won't accel to the new speed, it will be applied instantly.~~~ qSpeed 1 set 3.5 accel qSpeed e1 set 3.5 accel qSpeed event1 set 3.5 accel~~~*Note: All 3 are the same, just using a different character id method*Event 1 will have it's move speed set to 4.5. Since there's a accel optionhe will accel to the new speed.~~~ qSpeed 0 duration 60 qSpeed p1 duration 60 qSpeed player duration 60~~~*Note: All 3 are the same, just using a different character id method*The player's accel duration will be set to 60. This means it will take him60 frames to reach his new speed. Unless his acceleration is disabled.

## Notes
### **Setting default custom move speed**Adding the following to the notes or in a comment will make that event usethis custom speed by default~~~ <speed:X>~~~- X: The speed to set the character too. Can be a float; ex: 3.5

## LinksFormated Help: https://quxios.github.io/#/plugins/QSpeedRPGMakerWebs: http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use: https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios