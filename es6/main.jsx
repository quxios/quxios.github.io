const { Router, Route, hashHistory } = ReactRouter;

import HomePage from './home/'
import PluginsPage from './plugins/'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/plugins" component={PluginsPage}/>
    {/*<Route path="/projects" component={ProjectsPage}/>*/}
  </Router>,
  document.getElementById('site')
);
