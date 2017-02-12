export default class PluginManager {
  static docsPath = '/data/docs/';

  static load(name, callback) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', this.docsPath + name + '.json', true);
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
