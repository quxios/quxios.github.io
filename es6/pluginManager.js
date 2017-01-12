export default class PluginManager {
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
          callback(obj);
        }
      }
    }
    xhr.send(null);
  }
}
