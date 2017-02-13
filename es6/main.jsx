const { Router, Route, IndexRoute, hashHistory } = ReactRouter;

import HomePage from './home'

import PluginsLayout from './plugins'
import PluginList from './plugins/list'
import PluginPage from './plugins/page'

import ProjectsLayout from './projects'

import DocsLayout from './docs'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/plugins" component={PluginsLayout}>
      <IndexRoute component={PluginList}/>
      <Route path="/plugins/:pluginName(/:section)" component={PluginPage}/>
    </Route>
    <Route path="/projects" component={ProjectsLayout}/>
    <Route path="/docs/:docName(/:section)" component={DocsLayout} />
  </Router>,
  document.getElementById('site')
);
