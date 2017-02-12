import { EventEmitter } from 'events';
import Dispatcher from '../dispatchers/Dispatcher';

class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.brews = [];
    this.idActual = '';
    this.beerActual = '';
    this.fetchBrews();
  }

  getAll(){
    return this.brews;
  }

  getActualName(){
    return this.beerActual;
  }
  getActualId(){
    return this.idActual;
  }

  createBrew(beer){
    this.brews.push(beer);
    this.emit('change');
  }

  deleteBrew(id){
    let toDel = -1;
    for (let i = 0; i < this.brews.length; i++) {
      if (this.brews[i].id === id ) {
        toDel = i;
      }
    }
    this.brews.splice(toDel,1);
    this.emit('change');
  }

  changeBrew(id, name){
    this.idActual = id;
    this.beerActual = name;
    this.emit('change');
  }

  async fetchBrews(){
    try {
      let response = await fetch('http://birrapp-back.herokuapp.com/api/brews');
      let responseJson = await response.json();
      this.brews = responseJson;
      this.beerActual = this.brews[0].name;
      this.idActual = this.brews[0].id;
      this.emit('change');
    } catch(error) {
      console.error(error);
    }

  }

  handleActions = (action) =>  {
    switch (action.type) {
      case "CREATE_BREW":
        this.createBrew(action.beer);
        break;
      case "DELETE_BREW":
        this.deleteBrew(action.beerName);
        break;
      case "CHANGE_BREW":
        this.changeBrew(action.id, action.name);
        break;
      default:
        break;
    }
  }
}


const brewStore = new BrewStore();
Dispatcher.register(brewStore.handleActions);

export default brewStore;
