

## AboutThis plugin lets you play a random popups at a set interval over an event.It also lets you create your own popups that you can place where you want.

## PresetsPresets can be created in the plugin parameters or with plugin commands.Presets have predefined rules for a popups style and transitions.

## Event PopupsThis feature will create popup(s) at an event every X frames.To use this, you need configure these into the event's page as a comment:

### **qPopupSettings**REQUIRED~~~ <qPopupSettings> OPTIONS </qPopupSettings>~~~*Every option should be on a different line*- Possible Options: - "interval: X": Set X to the number of frames between popups - "preset: X": Set X to the preset to use. Presets are creating with plugin commands. *Preset needs to be configured before this events page starts, or it won't be applied* - "ox: X": Set X to the offset x position of this popup. Can be negative - "oy: Y": Set Y to the offset y position of this popup. Can be negative - "duration: X": Set X to the duration of the popupqPopupSettings Example~~~ <qPopupSettings> interval: 120 duration: 60 oy: -48 </qPopupSettings>~~~

### **qPopupStyle**OPTIONAL~~~ <qPopupStyle> OPTIONS </qPopupStyle>~~~*Every option should be on a different line*- Possible Options: - "fontFace: X": Set X to the name of the font to use - "fontSize: X": Set X to size of the font - "color: X": Set X to the hex color to use - "padding: X": Set X to the padding in pixels - "windowed: X": Set X to true or falseqPopupStyle Example~~~ <qPopupStyle> fontSize: 18 windowed: true color: #FF0000 </qPopupStyle>~~~

### **qPopupTransitions**OPTIONAL~~~ <qPopupTransitions> TRANSITIONS </qPopupTransitions>~~~*Every transition should be on a different line*- See transition section for details.

### **qPopup**REQUIRED~~~<qPopup>STRING</qPopup>~~~- STRING: The text to use in the popup. You can use some escape codesfrom message boxYou can add as many `<qPopups></qPopups>` as you would like. A random one willbe choosen at every interval.

## TransitionsTransition format:~~~ STARTFRAME DURATION TYPE PARAM1~~~- STARTFRAME: The frame to start this transition. In frames- DURATION: The length of this transition. In frames- TYPE: The type of transition, can be: slideUp, slideDown, fadeIn, fadeOut- PARAM1: If type is slideUp or slideDown, this is the distance in pixelsto slide.

## Plugin Commands
### **Start**~~~ qPopup start "STRING" [OPTIONS]~~~- STRING: What you want the popup to say. You can use some escape codesfrom message box. To add a new line, use \n- List of Options:  - idX: Set X to the id for this popup  - presetX: Set X to which styling preset id to use. Presets are configured  with other plugin commands  - xX: Set X to the x position of this popup. This is ignored if bindToX is  used  - yX: Set X to the y position of this popup. This is ignored if bindToX is  used  - oxX: Set X to the offset x position of this popup. Can be negative  - oyY: Set X to the offset x position of this popup. Can be negative  - bindToX: Set X to the charaId to bind to. When bind, the popup will follow  that character.  - durationX: Set X to the duration of the popup

### **configStyle**~~~ qPopup configStyle ID [OPTIONS]~~~- ID: The preset ID to apply this to. This is used for the presetX optionin the start command.- List of Options:  - fontX: Set X to the name of the font to use. If font name has spaces  wrap the option in "". Ex "fontThis is the fontname"  - sizeX: Set X to the size of the font  - colorX: Set X to the hex color to use. Ex color#FF0000 is red font color.  - paddingX: Set X to the padding  - windowed: Include this and the popup will use the windowskin*Note: If the ID was previously setup, it will be replaced with the new config*

### **configTransition**~~~ qPopup configTransition ID [TRANSITION]~~~- ID: The preset ID to apply this to. This is used for the presetX optionin the start command.- TRANSITION: A transition to add to this preset. See transition sectionfor info.*Note: If the ID was previously setup the transition will be added to it*

## LinksFormated Help: https://quxios.github.io/#/plugins/QPopupRPGMakerWebs: http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/Terms of use: https://github.com/quxios/QMV-Master-Demo/blob/master/readme.mdLike my plugins? Support me on Patreon! https://www.patreon.com/quxios