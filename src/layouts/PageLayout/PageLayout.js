import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Container, Sidebar, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import LeftSidebar from './LeftSidebar'
import TopMenuView from './TopMenu'
import './PageLayout.scss'

class PageLayout extends React.Component {

  render() {
    const {children} = this.props
    return (
      <Sidebar.Pushable as={Segment}>
        <LeftSidebar />
        <Sidebar.Pusher>
          <TopMenuView />
          <Container>
            {children}
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
