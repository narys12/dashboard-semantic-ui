import React from 'react'
import {Image} from 'semantic-ui-react'

const UserMenuItem = (props) => (
    <span>
        <Image avatar src={props.image}/>
        {props.name}
    </span>
);

export default UserMenuItem