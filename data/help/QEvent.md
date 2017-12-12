

## AboutThis plugin adds some extra functionality to common events to make themmore powerful for advanced users.

## QEventA QEvent is a new type of common event. You can run a QEvent multiple timesin a single frame compared to a common event which you can only run 1common event per frame (unless it's a parallel trigger).QEvents also pass in some extra info about where / who called the event. Youcan grab that info with some script calls.To make a common event as a QEvent, you need to add a comment with the following:~~~ <QEvent>~~~

### **Extra into**The extra info is stored inside an Object which can be accessed with thescript call:~~~ this.q~~~What is contained in the object depends on what calls it. By default they willall contain a `type` property which returns a string based on where it wascalled from.

## TriggersI've added a few extra common event triggers:- move: Will run the common event when anything moves- eventMove: Will run the common event when any event moves- playerMove: Will run the common event when the player movesTo set the trigger you need to add a comment in the common event with the format:~~~<trigger:TYPE>~~~Where TYPE can be; move, eventMove, or playerMoveAll these common events will run as a QEvent even if they aren't maked as aQEvent. For the extra info they will pass the following properties:~~~this.q.type // returns 'CHARA'this.q.chara // returns the character objectthis.q.charaId // returns the charaId, event id for eventsthis.q.x // returns the grid x positionthis.q.y // returns the grid y positionthis.q.region // returns the regions the character is currently on~~~

## CooldownsYou can add a cooldown to a QEvent, if you try to run the QEvent while it'son cooldown, it will not run.To add a cooldown, add the a comment in the common event with the format:~~~<cooldown:TICK>~~~- TICK: the time until it can run again, in frames (60 frames = 1 second)If the QEvent was called fom a CHARA type then the cooldown is unique per character

## LinksFormated Help: https://quxios.github.io/#/plugins/QEventRPGMakerWebs: http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use: https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios