import { EventEmitter } from 'events';
import Dispatcher from '../dispatchers/Dispatcher';

const moment = require('moment');

class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.brews = [];
    this.fetchBrews();
  }

  getAll(){
    return this.brews;
  }

  createBrew(beer){
    this.brews.push(beer);
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
        this.createBrew(action.beer);
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
