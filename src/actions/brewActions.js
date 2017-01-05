import Dispatcher from '../dispatchers/Dispatcher'

export function createBrew (beerName) {
  Dispatcher.dispatch({
    type: 'CREATE_BREW',
    'beerName': beerName
  })
};

export function deleteBrew (id) {
  Dispatcher.dispatch({
    type: 'DELETE_BREW',
    'id': id
  })
};

export function changeBrew (id) {
  Dispatcher.dispatch({
    type: 'CHANGE_BREW',
    'id': id
  })
};
