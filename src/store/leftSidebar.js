const SIDEBAR_VISIBILITY = 'SIDEBAR_VISIBILITY'

const initialState = {
    visible: true
}

function leftSidebarReducer(state = initialState, action){
    switch (action.type) {
        case SIDEBAR_VISIBILITY:
            return Object.assign(
                {},
                state,
                {visible: action.payload}
            )
        default:
            return state
    }
}

export default leftSidebarReducer