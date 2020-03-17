import { alertConstants } from '../constants/alert.constants.js'

export const alertActions = {
  success,
  error,
  clear
}

function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { tyep: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}
