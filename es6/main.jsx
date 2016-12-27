const { Router, Route, IndexRoute, hashHistory } = ReactRouter;

import HomePage from './home/'
import PluginsLayout from './plugins/'
import PluginList from './plugins/list'
import PluginPage from './plugins/page'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/plugins" component={PluginsLayout}>
      <IndexRoute component={PluginList}/>
      <Route path="/plugins/:pluginName" component={PluginPage}/>
    </Route>
    {/*<Route path="/projects" component={ProjectsLayout}/>*/}
  </Router>,
  document.getElementById('site')
);
