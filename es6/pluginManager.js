import Axios from 'axios'

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
    Axios.get(file)
      .then((res) => {
        if (callback) {
          callback(res.data);
        }
      })
  }
}
