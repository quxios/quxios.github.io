import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './home'
import PluginsPage from './plugins'
import TutorialsPage from './tutorials'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/plugins/:pluginName?/:section?" component={PluginsPage} />
      <Route path="/tutorials/:tutorialName?/:section?" component={TutorialsPage} />
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('site')
);