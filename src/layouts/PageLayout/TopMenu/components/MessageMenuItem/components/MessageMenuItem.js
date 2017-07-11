import React from 'react'
import {Header, Image, Label, Icon, Table} from 'semantic-ui-react'
import {Link} from 'react-router'
import Moment from 'react-moment';
import './MessageMenuItem.scss'

const MessageMenuItem = (props) => (
  <Table.Row id='message-menu-item'>
    <Link to='user'>
      <Table.Cell>
        <Label ribbon>
          <Header image>
            <Image avatar src='/' />
            <Header.Content id='message-user'>
              {props.name}
            </Header.Content>
          </Header>
        </Label>
      </Table.Cell>

    </Link>
    <Table.Cell id='message-menu-content'>
      <Link to='message'>
        {props.msg}
        <Header.Subheader>
          <Moment fromNow className='date'>{props.date}</Moment>
        </Header.Subheader>
      </Link>
    </Table.Cell>
  </Table.Row>
);

export default MessageMenuItem