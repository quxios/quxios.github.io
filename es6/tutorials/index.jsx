import Axios from 'axios'
import React from 'react'

import Utils from './../ultis'

import BasePage from './../components/basePage'
import Content from './../components/content'
import TutorialBlock from './tutorialBlock'

const OFFSET_FROM_TOP = 30;
const TUTORIALS_PATH = '/data/tutorials.json';

export default class TutorialsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      tutorials: []
    }
  }
  componentWillMount() {
    Axios.get(TUTORIALS_PATH)
      .then((res) => {
        this.setState({
          tutorials: res.data
        })
      })
    if (this.props.match.params.tutorialName) {
      this.setCurrent(this.props.match.params.tutorialName);
    }
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.section;
    const tutorial = nextProps.match.params.tutorialName;
    if (tutorial !== this.props.match.params.tutorialName) {
      window.scrollTo(0, 0);
      this.setCurrent(tutorial);
    }
    if (this.props.match.params.sections !== id) {
      Utils.scrollTo(id, OFFSET_FROM_TOP);
    }
  }
  setCurrent(tutorialName) {
    if (!tutorialName) {
      return this.setState({
        current: null
      })
    }
    Axios.get(`/data/tutorials/${tutorialName}.md`)
      .then((res) => {
        let sections = Utils.getSections(res.data);
        this.setState({
          current: {
            ...this.state.tutorials[tutorialName],
            full: res.data,
            sections
          }
        })
        // TODO: scroll to section
      })
      .catch((err) => {
        window.location = '/tutorials'
      })
  }
  render() {
    const {
      current, tutorials
    } = this.state;
    const title = current ? current.title : 'Game Dev Tutorials'
    return (
      <BasePage page="Tutorial" title={title}>
        <div className="title">
          {title}
        </div>
        <Content
          selectedItem={current}
          items={tutorials}
          urlBase="tutorials"
          Component={TutorialBlock}
        />
      </BasePage>
    )
  }
}