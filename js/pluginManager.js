'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);
  }

  _createClass(PluginManager, null, [{
    key: 'load',
    value: function load(type, callback) {
      var _this = this;

      var file = void 0;
      if (type === 'plugins') {
        file = this.pluginsPath;
      } else if (type === 'tags') {
        file = this.tagsPath;
      } else {
        return;
      }
      var xml = new XMLHttpRequest();
      xml.overrideMimeType("application/json");
      xml.open('GET', file, true);
      xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == '200') {
          if (callback) {
            var obj = JSON.parse(xml.responseText);
            if (type === 'plugins') {
              callback(_this.filterPlugins(obj));
            } else {
              callback(obj);
            }
          }
        }
      };
      xml.send(null);
    }
  }, {
    key: 'filterPlugins',
    value: function filterPlugins(plugins) {
      var final = [];
      this.pluginList.forEach(function (plugin) {
        for (var i = 0; i < plugins.length; i++) {
          if (plugins[i].name === plugin) {
            final.push(plugins[i]);
            break;
          }
        }
      });
      return final;
    }
  }]);

  return PluginManager;
}();

PluginManager.pluginList = ['QPlus', 'QSprite', 'QAudio'];
PluginManager.pluginsPath = '/data/plugins.json';
PluginManager.tagsPath = '/data/tags.json';
exports.default = PluginManager;