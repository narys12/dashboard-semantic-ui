import React from 'react'
import {Label} from 'semantic-ui-react'
import './TopMenuItem.scss'

const TopMenuItem = (props) => (
    <Label color={props.color} floating id='floating-label' size='mini'> {props.count} </Label>
);

export default TopMenuItem