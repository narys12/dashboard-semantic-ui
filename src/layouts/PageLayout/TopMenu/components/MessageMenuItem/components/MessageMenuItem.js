import React from 'react'
import {Header, Image, Label} from 'semantic-ui-react'
import './MessageMenuItem.scss'

const MessageMenuItem = (props) => (
    <Header id='message-menu-item'>
        <Image avatar src='/assets/images/avatar/large/patrick.png' />
        {props.name} {' : '}
        <Header.Content>
            <Header.Subheader id='message-menu-content'>
                {props.msg}
                <Label attached='bottom right' className='date' >{props.date}</Label>
            </Header.Subheader>
        </Header.Content>
    </Header>
);

export default MessageMenuItem