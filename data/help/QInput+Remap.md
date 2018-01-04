

## AboutThis plugin adds an input remapping window to the Scene_Options. This letsplayers change the games keyboard and gamepad inputs inside of the optionsmenu.

## How to usePlace this anywhere below QInput plugin. Input configs are saved into the`saves/config.rpgsave` file**_Note_** If you remap your keys that config will get saved. So if you goback to QInput and change the parameters, those parameter changes won't applybecause the game will always load the saved config! So you will need to eitherdelete that `saves/config.rpgsave` file or hit `Set Default` button in theremap window.

## TipTo make best use of this, in your QInput parameters, each action should onlyhave 2 keys. One for the keyboard input and 1 for the gamepad input. This pluginonly remaps the first input. So for example:Lets say you had `enter` action as:~~~#space, #e, $A~~~When the player goes to remap the enter key, they'll see either Space or A,depending on which input type they are currenting using. So they will never be able to remap the #e key. Now in some cases this may be fine. But just know that the only the 1st instance of the input type is remappable!

## LinksFormated Help: https://quxios.github.io/#/plugins/QInput+RemapRPGMakerWebs: http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use: https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios