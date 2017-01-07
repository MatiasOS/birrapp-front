import Dispatcher from '../dispatchers/Dispatcher'
const moment = require('moment');

export async function createBrew (beerName) {
  console.log("Beer name in acrtion : " + beerName);
  let raw = {
        "beerName": beerName,
        "startDate": moment(),
        "endDate": "9999-09-09T03:00:00.000Z",
        "userId": "580d60ce308e440011e556ca"
      };

  let data = new FormData();

  data.append("json", JSON.stringify(raw));

  let request = new Request('http://birrapp-back.herokuapp.com/api/brews',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(raw)
    });

  let response = await fetch(request);
  let responseJson = await response.json();

  Dispatcher.dispatch({
    type: 'CREATE_BREW',
    beer: responseJson
  });


};

export async function deleteBrew (id) {
  let request = new Request('https://birrapp-back.herokuapp.com/api/brews/'+id,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    method: 'DELETE'
    });
    await fetch(request);
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
