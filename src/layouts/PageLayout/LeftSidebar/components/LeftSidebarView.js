import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar
} from 'semantic-ui-react'
import {IndexLink, Link} from 'react-router'

class LeftSidebarView extends React.Component{
    constructor(props){
        super(props)
        this.state = { activeItem: 'home' }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const {visibility} = this.props
        const {activeItem} = this.state
        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                visible={visibility}
                width='thin'
                vertical
                inverted>
                <Link to='/'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                        <Icon name='home'/>
                        Dashboard
                    </Menu.Item>
                </Link>
                <Link to='offers'>
                    <Menu.Item name='offers' active={activeItem === 'offers'} onClick={this.handleItemClick}>
                        <Icon name='gamepad'/>
                        Offers
                    </Menu.Item>
                </Link>
                <Link to='products'>
                    <Menu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick}>
                        <Icon name='camera'/>
                        Products
                    </Menu.Item>
                </Link>
            </Sidebar>
        );
    }
}

export default LeftSidebarView