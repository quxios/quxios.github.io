import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import HomePage from './home'
import PluginsPage from './plugins'
import TutorialsPage from './tutorials'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/plugins/:pluginName?/:section?" component={PluginsPage} />
      <Route path="/tutorials/:tutorialName?/:section?" component={TutorialsPage} />
      <Route component={HomePage} />
    </Switch>
  </HashRouter>,
  document.getElementById('site')
);