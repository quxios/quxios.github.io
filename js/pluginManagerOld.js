'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);
  }

  _createClass(PluginManager, null, [{
    key: 'loadAll',

    //static repoURL = 'https://raw.githubusercontent.com/quxios/QMV-Master-Demo/master/js/plugins/';
    value: function loadAll(callback) {
      //this.pluginList.forEach((plugin) => {
      this.get('Sprite', callback);
      //})
    }
    /*static pluginList = [
      'Plus',
      'Sprite',
      'Audio',
      'Input',
      'InputRemap',
      'NameInput'
    ]*/

  }, {
    key: 'get',
    value: function get(pluginName, callback) {
      var _this = this;

      if (this.plugins[pluginName]) {
        return callback(_extends({}, this.plugins[pluginName]));
      }
      var request = new XMLHttpRequest();
      request.onload = function (e) {
        var script = e.target.response || '';
        var header = _this.getHeader(script);
        var plugin = {
          name: pluginName,
          version: _this.getVersion(header),
          tags: _this.getTags(header)
        };
        var help = _this.getHelp(header);
        if (help) {
          plugin.about = help.shift();
          plugin.help = help.join('\n');
        }
        _this.addTags(plugin.tags);
        _this.plugins[pluginName] = plugin;
        callback(_extends({}, plugin));
      };
      //const url = `${this.repoURL}Q${pluginName}.js`;
      var url = 'https://raw.githubusercontent.com/quxios/QMV-Master-Demo/master/js/plugins/QSprite.js?token=AI6eAwhWDc2-rNYVM1_kcG1X49XhR3Uwks5Ya3StwA%3D%3D';
      request.open('get', url, true);
      request.send();
    }
  }, {
    key: 'getHeader',
    value: function getHeader(header) {
      var match = /\/\*\:([\s\S]*?)\*\//i.exec(header);
      if (match) {
        return match[1];
      }
      return '';
    }
  }, {
    key: 'getVersion',
    value: function getVersion(header) {
      var match = /Version (\d+.\d+.\d+)/i.exec(header);
      if (match) {
        return match[1];
      }
      return null;
    }
  }, {
    key: 'getHelp',
    value: function getHelp(header) {
      var help = /@help([\s\S]*?)(\@|\*\/)/.exec(header);
      if (help) {
        help = help[1].replace(/\s\*\s/g, '');
        var sections = help.split(/\-{70,80}/);
        return sections.filter(function (s) {
          return s.includes('**');
        });
      }
      return null;
    }
  }, {
    key: 'getTags',
    value: function getTags(header) {
      var match = /@tags(.*)/i.exec(header);
      if (match) {
        return match[1];
      }
      return null;
    }
  }, {
    key: 'addTags',
    value: function addTags(tags) {
      var _this2 = this;

      tags = tags.split(',').map(function (s) {
        return s.trim();
      });
      tags.forEach(function (tag) {
        if (_this2.tags[tag]) {
          _this2.tags[tag]++;
        } else {
          _this2.tags[tag] = 1;
        }
      });
      if (this.updateTags) {
        this.updateTags(this.tags);
      }
    }
  }]);

  return PluginManager;
}();

PluginManager.repoURL = 'https://raw.githubusercontent.com/quxios/Quasi-MV-ABS-Demo/master/js/plugins/';
PluginManager.pluginList = ['uasiABS', 'uasiMovement', 'uasiSprite'];
PluginManager.plugins = {};
PluginManager.tags = {};
exports.default = PluginManager;