import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react'

import {avatar} from '../assets/man-avatar.png'
import MessageMenuItem from './MessageMenuItem'
import TopMenuItem from './TopMenuItem'
import UserMenuItem from './UserMenuItem'

const TopMenuView = (props) => {
    var date = new Date().toISOString().slice(0,10);
    return (
        <Menu attached='top' size='small'>
            <Menu.Menu>
                <div className='ui right aligned category search item'>
                    <div className='ui transparent icon input'>
                        <input className='prompt' type='text' placeholder='Search something...'/>
                        <i className='search link icon'/>
                    </div>
                    <div className='results'></div>
                </div>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Dropdown
                    pointing
                    className='link item icon top right'
                    icon='mail'
                    trigger={<TopMenuItem color='red' count='2' />}>
                    <Dropdown.Menu>
                        <Dropdown.Item content={<MessageMenuItem name='Patrick' msg='Hello theredsds qsdfqd qsdfqdfq qdfqdsfq dsjfnlqdsfnq qdfjqdlj' date={date} />} />
                        <Dropdown.Item content={<MessageMenuItem name='Jane' msg='Bye' date={date} />} />
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    pointing
                    className='link item icon top right'
                    icon='bell'
                    compact
                    trigger={<TopMenuItem color='teal' count='13' />}>
                    <Dropdown.Menu>
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Item>Cancellations</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    pointing
                    className='link item icon top right'
                    trigger={<UserMenuItem name='John Doe' image={avatar} />}
                    icon={null}>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='user circle' text='Profile'/>
                        <Dropdown.Divider/>
                        <Dropdown.Item icon='log out' text='Logout'/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    )
};

TopMenuView.propTypes = {};

export default TopMenuView;