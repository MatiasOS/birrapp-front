import { EventEmitter } from 'events';
import data from '../data/brews';
import Dispatcher from '../dispatchers/Dispatcher';
const moment = require('moment');

class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.brews = data;
  }

  getAll(){
    return this.brews;
  }

  createBrew(beerName){
    console.log('createBrew: ' + beerName);
    this.brews.push({
      "id": moment(),
      "startDate": "9999-09-09T03:00:00.000Z",
      "endDate": "9999-09-09T03:00:00.000Z",
      "beerName": beerName,
      "userId": "580d60ce308e440011e556ca"
    });
    this.emit('change');
  }


  handleActions = (action) =>  {
    console.log('Handle Brew Action: '+ action);
    switch (action.type) {
      case "CREATE_BREW":
        this.createBrew(action.beerName);
        break;
      default:
        break;
    }
  }
}


const brewStore = new BrewStore();
Dispatcher.register(brewStore.handleActions);

export default brewStore;
