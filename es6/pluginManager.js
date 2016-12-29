export default class PluginManager {
  static pluginList = [
    'QPlus',
    'QSprite',
    'QAudio'
  ]
  static pluginsPath = '/data/plugins.json';
  static tagsPath = '/data/tags.json';

  static load(type, callback) {
    let file;
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
    xml.onreadystatechange = () => {
      if (xml.readyState == 4 && xml.status == '200') {
        if (callback) {
          let obj = JSON.parse(xml.responseText);
          if (type === 'plugins') {
            callback(this.filterPlugins(obj));
          } else {
            callback(obj);
          }
        }
      }
    }
    xml.send(null);
  }
  static filterPlugins(plugins) {
    let final = [];
    this.pluginList.forEach((plugin) => {
      for (let i = 0; i < plugins.length; i++) {
        if (plugins[i].name === plugin) {
          final.push(plugins[i]);
          break;
        }
      }
    })
    return final;
  }
}
