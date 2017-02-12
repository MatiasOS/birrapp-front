import Dispatcher from '../dispatchers/Dispatcher'
import BrewStore from '../stores/BrewStore'

const moment = require('moment');

export async function addStage(stageName){

    let raw = {
      "name": stageName,
      "description": "noDescription",
      "startDate": moment(),
      "brewId": BrewStore.getActualId()
    }
    let data = new FormData();

    data.append('json', JSON.stringify(raw));

    let request = new Request(`https://birrapp-back.herokuapp.com/api/brews/${raw.brewId}/stages`,{
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(raw)
    });
    let response = await fetch(request);
    let responseJson = await response.json();

    Dispatcher.dispatch({
      type: 'CREATE_STAGE',
      stage: responseJson
  });

};

export async function deleteStage(id){

  let request = new Request('https://birrapp-back.herokuapp.com/api/stages/'+id,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    method: 'DELETE'
    });
    await fetch(request);
  Dispatcher.dispatch({
    type: 'DELETE_STAGE',
    'id': id
  })
}
