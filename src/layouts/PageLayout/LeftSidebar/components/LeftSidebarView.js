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

    handleItemClick = (name, e) => this.setState({ activeItem: name })

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
                    <div onClick={this.handleItemClick.bind(this, 'home')}>
                        <Menu.Item active={activeItem === 'home'} link>
                            <Icon name='home'/>
                            Dashboard
                        </Menu.Item>
                    </div>
                </Link>
                <Link to='offers'>
                    <div onClick={this.handleItemClick.bind(this, 'offers')}>
                        <Menu.Item active={activeItem === 'offers'} link>
                            <Icon name='gamepad'/>
                            Offers
                        </Menu.Item>
                    </div>
                </Link>
                <Link to='products'>
                    <div onClick={this.handleItemClick.bind(this, 'products')}>
                        <Menu.Item active={activeItem === 'products'} link>
                            <Icon name='camera'/>
                            Products
                        </Menu.Item>
                    </div>
                </Link>
            </Sidebar>
        );
    }
}

export default LeftSidebarView