import { EventEmitter } from 'events';
import data from '../data/brews';
import Dispatcher from '../dispatchers/Dispatcher';

const moment = require('moment');

class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.brews = data;
    this.fetchBrews();
  }

  getAll(){
    return this.brews;
  }

  createBrew(beerName){
    this.brews.push({
      "id": moment(),
      "startDate": moment(),
      "endDate": "9999-09-09T03:00:00.000Z",
      "beerName": beerName,
      "userId": "580d60ce308e440011e556ca"
    });
    this.emit('change');
  }

  deleteBrew(id){
    this.brews.push({
      "id": id,
    });
    this.emit('change');
  }

  changeBrew(id){
    this.brews.push({
      "id": moment(),
    });
    this.emit('change');
  }

  async fetchBrews(brewwwws){
    try {
      let response = await fetch('http://birrapp-back.herokuapp.com/api/brews');
      let responseJson = await response.json();
      this.brews = responseJson;
      console.log(responseJson);
      this.emit('change');
    } catch(error) {
      console.error(error);
    }

  }

  handleActions = (action) =>  {
    console.log('Handle Brew Action: '+ action);
    switch (action.type) {
      case "CREATE_BREW":
        this.createBrew(action.beerName);
        break;
      case "DELETE_BREW":
        this.deleteBrew(action.beerName);
        break;
      case "CHANGE_BREW":
        this.changeBrew(action.beerName);
        break;
      default:
        break;
    }
  }
}


const brewStore = new BrewStore();
Dispatcher.register(brewStore.handleActions);

export default brewStore;
