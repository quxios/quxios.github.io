export default class PluginManager {
  //static repoURL = 'https://raw.githubusercontent.com/quxios/QMV-Master-Demo/master/js/plugins/';
  static repoURL = 'https://raw.githubusercontent.com/quxios/Quasi-MV-ABS-Demo/master/js/plugins/'
  /*static pluginList = [
    'Plus',
    'Sprite',
    'Audio',
    'Input',
    'InputRemap',
    'NameInput'
  ]*/
  static pluginList = [
    'uasiABS',
    'uasiMovement',
    'uasiSprite'
  ]
  static plugins = {};
  static tags = {};

  static loadAll(callback) {
    //this.pluginList.forEach((plugin) => {
      this.get('Sprite', callback);
    //})
  }
  static get(pluginName, callback) {
    if (this.plugins[pluginName]) {
      return callback({...this.plugins[pluginName]});
    }
    let request = new XMLHttpRequest();
    request.onload = (e) => {
      let script = e.target.response || '';
      let header = this.getHeader(script);
      let plugin = {
        name: pluginName,
        version: this.getVersion(header),
        tags: this.getTags(header)
      }
      let help = this.getHelp(header);
      if (help) {
        plugin.about = help.shift();
        plugin.help  = help.join('\n');
      }
      this.addTags(plugin.tags);
      this.plugins[pluginName] = plugin;
      callback({...plugin});
    }
    //const url = `${this.repoURL}Q${pluginName}.js`;
    const url = 'https://raw.githubusercontent.com/quxios/QMV-Master-Demo/master/js/plugins/QSprite.js?token=AI6eAwhWDc2-rNYVM1_kcG1X49XhR3Uwks5Ya3StwA%3D%3D';
    request.open('get', url, true);
    request.send();
  }
  static getHeader(header) {
    let match = /\/\*\:([\s\S]*?)\*\//i.exec(header);
    if (match) {
      return match[1];
    }
    return '';
  }
  static getVersion(header) {
    let match = /Version (\d+.\d+.\d+)/i.exec(header);
    if (match) {
      return match[1];
    }
    return null;
  }
  static getHelp(header) {
    let help = /@help([\s\S]*?)(\@|\*\/)/.exec(header);
    if (help) {
      help = help[1].replace(/\s\*\s/g, '');
      let sections = help.split(/\-{70,80}/);
      return sections.filter((s) => {
        return s.includes('**');
      })
    }
    return null;
  }
  static getTags(header) {
    let match = /@tags(.*)/i.exec(header);
    if (match) {
      return match[1];
    }
    return null;
  }
  static addTags(tags) {
    tags = tags.split(',').map((s) => { return s.trim() });
    tags.forEach((tag) => {
      if (this.tags[tag]) {
        this.tags[tag]++;
      } else {
        this.tags[tag] = 1;
      }
    })
    if (this.updateTags) {
      this.updateTags(this.tags);
    }
  }
}
