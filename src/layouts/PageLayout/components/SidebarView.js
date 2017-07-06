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

class SidebarView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    toggleVisibility = () => this.setState({
        visible: !this.state.visible
    })

    render() {
        const {visible} = this.state
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='thin'
                    visible={visible}
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
                    <Button onClick={this.toggleVisibility}/> 
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default SidebarView