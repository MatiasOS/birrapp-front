import { EventEmitter } from 'events';
import data from '../data/brews';
import dispatcher from '../dispatchers/dispatcher';


class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.brews = data;
  }

  getAll(){
    return this.brews;
  }

  createBrew(beerName, startDate, endDate, userId){
    let id = Date.now();
    this.brews.push({
      "beerName": beerName,
      "startDate": startDate,
      "endDate": endDate,
      "id": id,
      "userId": userId
    });
    this.emit('change');
  }

  handleActions = (action) =>  {
    console.log('Handle Brew Action: '+ action);
  }
}


const brewStore = new BrewStore();
dispatcher.register(brewStore.handleActions);
export default brewStore;
