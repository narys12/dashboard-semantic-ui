const SIDEBAR_VISIBILITY = 'SIDEBAR_VISIBILITY'

export function changeVisibility(value) {
  return {
    type    : SIDEBAR_VISIBILITY,
    payload : value
  }
}