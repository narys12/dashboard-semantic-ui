import { connect } from 'react-redux'
import {changeVisibility} from './modules/visibility'
import LeftSidebarView from '../components/LeftSidebarView'

const mapStateToProps = (state, ownProps) => {
    return {
        visiblility: state.leftSidebarVisibility
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleVisibility: (bool) => {
            dispatch(changeVisibility(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebarView)