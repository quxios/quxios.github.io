const { Router, Route, browserHistory } = ReactRouter;

import HomePage from '/js/home/'
import PluginsPage from '/js/plugins/'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/plugins" component={PluginsPage}/>
  </Router>,
  document.getElementById('site')
);
