import React, {Component} from 'react'
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar
} from 'semantic-ui-react'

const LeftSidebarView = (props) => {
    const {toggleVisibility, visibility} = props
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='thin'
                    visible={visiblility}
                    vertical
                    inverted>
                    <Menu.Item name='home'>
                        <Icon name='home'/>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad'/>
                        Offers
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera'/>
                        Products
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Button onClick={toggleVisibility(visiblility)}/> 
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
}

export default LeftSidebarView