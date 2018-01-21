# RPG Maker MV plugin dev intro

This isn't a full guide on how to be a pro RPG Maker MV plugin dev, but more of tips / guides from me (Quxios). I'll go over my tools I use during development, what languages you should learn and some plugin basics!

# Tools!

For MV Plugin dev there are not much tools you will need. You mainly just need RPG Maker MV and a text editor of your choice. You can use an IDE instead of a text editor, but since it's just JS and we won't be compiling anything there's no need for an IDE so a text editor is fine.

## Text editors
- [**Atom**](https://atom.io/)
  - Pretty simple and nice text editor, although some people have problems with it being slow
  - My favorite when working with multiple panels
  - I used to use this! Though I've switched because I started having issues with it after an update
- [**VS Code**](https://code.visualstudio.com/)
  - Not to be confused with visual studio!
  - Another nice and fast editor! 
  - Like Atom, it's very customizable with lots of extensions
  - I am currently using this editor

There are others but I haven't tried them. These 2 tend to be the most popular when it comes for js development.

## Other tools 
List of other tools I use during js dev, although not needed for MV Plugin dev:
- [**ConEmu**](https://conemu.github.io/)
  - A console emulator for windows. When working with *node js* you'll be using the console quite a bit so this makes using the console lot more enjoyable. + Having console tabs!
- [**GitKraken**](https://www.gitkraken.com/)
  - When dealing with git, having a gui client can be nice! Although I still use the console from time to time

# What to learn?

This part is probably the hard part for most people. What do you need to learn to be able to make plugins? Well this varies from person to person and what you're aiming to create. But the the most important / obvious one is JS *(Javascript not to be confused with java, completely different language)*. 

## Javascript

Now the question becomes how much JS do you need to know? In my opinion the more you know the better! From what I've seen in the plugin dev community, most dev's hardly know any JS besides the basics (syntax, arrays, and objects) which is a vary small part of JS. 

So you should learn the basics of JS, which you can learn online from sites like [Codecademy](https://www.codecademy.com/) which should take about a week or less.

MV uses ES5 and has minimal support for ES6(es2015). ES6 is more popular and I would recommend you learning that as well. But I wouldn't recommend using it in MV plugin development. MV 1.6.0 will have a newer version of node that will allow for ES6 so you can write your plugins in ES6 and it will work but in my opinion you should continue writing in ES5. The reason being that when someone uses your plugin and builds for web, ES6 will not work on all web browsers while ES5 has a lot more compatibility. And I doubt MV will have a ES6 to ES5 compiler when building. Though you can compile your plugins your self with something like [Babel](https://babeljs.io/)

### Classes you should know!
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  * You will use .call, .apply and .bind quite a bit. So you should know what they do
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * You should know how to manipulate arrays and loop through them.
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
  * Know how to use the console will help when debugging! *(You can open the console in an MV game by pressing F8 during test play.*

Like I mentioned before, there are a ton of JS APIs. Though for MV Plugin dev I consider those to be the most important.

### JS Libraries

Now JS has tons of libraries that extend it / add new functionality! MV currently only runs off of [PIXI.js](http://pixijs.download/release/docs/index.html). Though MV builds over most of PIXI, so it's not really worth learning and you should stick to all the MV classes. Though MV classes are extended from PIXI classes, so you may want to look into [PIXI.Sprite](http://pixijs.download/release/docs/PIXI.Sprite.html)

[List of libraries](https://www.javascripting.com/)

## HTML / CSS

These two are optional to learn. They're not programming languages and they are both very easy to learn. Typically can learn both in a few days! You probably won't use these at all when working with MV Plugins but learning them can help you master JS! Since most of JS deals with modifying the DOM.

You can also learn both of these at [Codecademy](https://www.codecademy.com/)

# MV Plugin Basics

Now that we got the tools and languages out of the way we can start with how to make a MV Plugin!

## Headers

Every plugin should have a header that passes information to the plugin manager! A very basic header would be:

~~~js
/*:
 * @plugindesc A description for the plugin
 * 2 lines at max (plugin manager limitation)
 * 
 * @author Author of this plugin
 * 
 * @help
 * Some details on how to use the plugin
 */
~~~

I won't be going over all of it, but you can find more info by following these steps:
- Inside RPGMakerMV: Click Help > Contents
- Inside the page it opens: Under RPG Maker MV > Documentation > Plugin Specifications

*That page also goes over meta and plugin commands which are used a lot in plugin dev*

That page doesn't seem to be updated and contains all of the new parameters that MV 1.5.0 introduced. So you can find the rest of that info [*here*](https://forums.rpgmakerweb.com/index.php?threads/introduction-to-the-new-plugin-manager-in-rpg-maker-mv-1-5-0.79764/)

## Getting Plugin Parameters

If you visited any of the 2 pages I listed in the previous section you should have noted that they use `PluginManager.parameters('FILENAME')` to get the parameters. While using that is fine, there's an issue that the file name of the plugin needs to match exactly. If a user renames the plugin for what ever reason, that function will no longer work! So a better way to grab parameters is to do something like:

~~~js
var plugin = $plugins.filter(function(p) {
  return p.description.contains('<UniqueID>') && p.status
})[0];
~~~

`$plugins` is a global array created by MV that contains the info stored in `data/plugins.js` which contains all the info from the plugin manager.

So we need to loop through all the plugins that are installed to find our plugin. To do that we will first filter the array and look for `'<UniqueID>'` inside the plugins description (that's set within the plugins header using `@plugindesc`) and we also check the status to make sure it's turned on in the plugin manager. Once the filter is done we grab the first element from that filtered array!

This approach is very common in the plugin dev community so make sure you do have a unique ID for all your plugins! The format should be something like: `'<AuthorNamePluginName>'`

## No globals!

A common mistake with beginners is that declare their variables to the global space. This is bad because there's a chance you overwrite a global another plugin is using or something along those lines!

To avoid this make sure you always declare your variables with the `var` keyword. You can enable strict mode in js by adding `'use strict';` at the top of your plugin. [*More info here*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Another best practice is to keep your code inside a function scope. We can do this by using a self involking function:

~~~js
(function() {
  var someVar = 1;

  console.log(someVar); // returns 1
})();
console.log(someVar); // returns undefined
~~~

This might look confusing at first glance, but if you take a close look all we did was create an unnamed function, wrapped it in ()'s and then called it right away. You can also pass in a value to the function like a normal function. Some people may do this to pass in an alias. For example:

~~~js
// not really a class but too lazy to create a proper one
var SomeClassWithALongName = {
  foo: 'bar'
}; 

(function($) {
  console.log($.foo); // returns 'bar'
  $.foo = 'foobar';
})(SomeClassWithALongName);

console.log($.foo); // returns 'foobar'
~~~

You might even use multiple self invoking functions if you'd like. You can create one for each class! Tends to look more cleaner specially when dealing in ES5.

When using these self invoking functions, be careful with declaring variables inside of them! Since they can't be accessed outside of the scope, make sure to only declare something that will only be needed inside that scope, like aliases. **Don't declare new classes inside here!** That's a common mistake I see even veteran plugin devs make! That makes it hard to create compatibility patches when needed or addons!

## Aliases

Another common technique you will need to know is how to alias! Aliasing is useful for adding code to an existing function without overriding it! The general rule is, if you don't need to override, alias it.

How it looks
~~~js
var myAlias = SomeClass.prototype.someFunction;
SomeClass.prototype.someFunction = function() {
  console.log('ran before the original func');
  myAlias.call(this);
  console.log('ran after the original func');
}
~~~

If you're confused and whats going on, here's a breakdown:
~~~js
var myAlias = SomeClass.prototype.someFunction;
~~~
Here we create a reference to the the function we will be modifying.

~~~js
SomeClass.prototype.someFunction = function() {
~~~
Now we redefine the function so we can "inject" some code!

~~~js
  console.log('ran before the original func');
  myAlias.call(this);
  console.log('ran after the original func');
~~~
Here we add our new code in the function and call the old function thats stored inside the var `myAlias`. If your function had parameters, you'll need to pass them into the `.call`. You can also use `.apply` instead of `.call` if you prefer that

Links:
- [Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## NameSpaces

NameSpaces are used to keep information between an authors plugins. You will define this as a global at the top of you plugin by doing something like:
~~~js
// If it's already defined use whats defined
// if not create an empty obj
window.Quxios = window.Quxios || {};

// you can also do the following if you're inside the
// window scope
var Quxios = Quxios || {};
~~~

A commonly used namespace in RM is the `imported` var. We typically store the name of the plugin in here and set the value to `true` or the version number. This is useful for making patches or checking if another plugins exists.

Lot of devs will store their alias's in their NameSpace, but personally I see no point in keeping the alias's public.

## Example

And that's about all that's needed to be able to start creating plugins! Here's how an example plugin might look!

~~~js
var Imported = Imported || {};
Imported.QuxiosExamplePlugin = true;

/*:
 * @plugindesc A Test plugin
 * <QuxiosExamplePlugin>
 * 
 * @author Quxios
 * 
 * @help
 * Some details on how to use the plugin
 */

function MyStaticClass() {
  throw new Error('This is a static class');
}

function MyNewClass() {
  this.initialize.apply(this, arguments);
}

(function() {
  MyStaticClass.getParams = function() {
    return $plugins.filter(function(p) {
      return p.description.contains('<QuxiosExamplePlugin>') && p.status;
    })[0];
  };

  console.log(MyStaticClass.getParams());

  MyNewClass.prototype.initialize = function(value) {
    this.value = value;
  };

  var alias_SomeClass_someFunc = SomeClass.prototype.someFunc;
  SomeClass.prototype.someFunc = function(arg1, arg2) {
    console.log('runs before the original func');
    alias_SomeClass_someFunc.call(this, arg1, arg2);
    console.log('runs after the original func');
  };
})();
~~~

# Where to go from here!

Now that you know how to create a plugin and set it up, the next step is to figure out how to make it do what you want to do! Most beginners will get stuck here and begin asking on forums for questions on how to do certain things. But that won't get you very far if you don't spend some time to research the MV Core files!

To learn which MV classes do what I suggest looking through all the `rpg_***.js` files. The class names are pretty easy to understand. For example, if you want to make changes to a event the class you will want to edit is "Game\_Event". If you want to change some sprite then it'll most likely be one of the "Sprite\_***" classes. Though for ease I suggest you look through the split source which can be [found here](https://github.com/rpgtkoolmv/corescript), there's even a bit more additional MV info in that help!

There's no need to learn each function in every class. But you should learn what classes are available and what they do. So if you want to make a plugin that plays some effect on an Event you would know you would need to add functions to `Game_Event` and `Sprite_Character`