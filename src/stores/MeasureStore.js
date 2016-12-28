import { EventEmitter } from 'events';
import data from '../data/measures';
import dispatcher from '../dispatchers/dispatcher';


class MeasureStore extends EventEmitter{
  constructor() {
    super();
    this.measures = data;
  }

  getAll(){
    return this.measures;
  }
  
  handleActions = (action) =>  {
    console.log('Handle measure Action: '+ action);
  }

}

const measureStore = new MeasureStore();
dispatcher.register(measureStore.handleActions);

export default measureStore;
