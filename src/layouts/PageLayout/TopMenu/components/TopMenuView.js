import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, Icon, Label, Menu, Segment} from 'semantic-ui-react'
import './topMenu.scss'

const TopMenuView = (props) => {
    return (
        <Menu attached='top' size='small'>
            <Menu.Menu position='left'>
                <div className='ui right aligned category search item'>
                    <div className='ui transparent icon input'>
                        <input className='prompt' type='text' placeholder='Search something...'/>
                        <i className='search link icon'/>
                    </div>
                    <div className='results'></div>
                </div>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Dropdown pointing className='link item icon top right' icon='mail' labeled text='3' id='message-menu'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Item>Cancellations</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown pointing className='link item icon top right' icon='user' labeled text='22' id='user-menu'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Item>Cancellations</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a'>
                    LogOut
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

TopMenuView.propTypes = {};

export default TopMenuView;