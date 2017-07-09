import { connect } from 'react-redux'
import {changeVisibility} from '../modules/visibility'
import LeftSidebarView from '../components/LeftSidebarView'

const mapStateToProps = (state, ownProps) => {
    return {
        visibility: state.leftSidebar.visible
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleVisibility: () => {
            dispatch(changeVisibility(!ownProps.visibility))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebarView)