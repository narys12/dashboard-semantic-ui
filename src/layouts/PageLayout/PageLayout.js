import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import SidebarView from './components/SidebarView'
import './PageLayout.scss'

class PageLayout extends React.Component {

  render() {
    const {children} = this.props
    return (
      <div>
        <SidebarView />  
        {this.children}
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
