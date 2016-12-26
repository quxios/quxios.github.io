const { Router, Route, hashHistory } = ReactRouter;

import HomePage from '/js/home/'
import PluginsPage from '/js/plugins/'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/plugins" component={PluginsPage}/>
  </Router>,
  document.getElementById('site')
);
