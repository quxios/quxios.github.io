export default class PluginManager {
  static pluginList = [
    'QPlus',
    'QSprite',
    'QAudio',
    'QInput',
    'QInputRemap',
    'QNameInput',
    'QSpeed'
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
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', file, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == '200') {
        if (callback) {
          let obj = JSON.parse(xhr.responseText);
          if (type === 'plugins') {
            callback(this.filterPlugins(obj));
          } else {
            callback(obj);
          }
        }
      }
    }
    xhr.send(null);
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
