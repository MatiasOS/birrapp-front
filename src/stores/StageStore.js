import { EventEmitter } from 'events';
import data from '../data/stages';
import Dispatcher from '../dispatchers/Dispatcher';

class StageStore extends EventEmitter{
  constructor() {
    super();
    this.stages = data;
  }

  getAll(){
    return this.stages;
  }
  handleActions = (action) =>  {
    console.log('Handle stage Action: '+ action);
  }
}

const stageStore = new StageStore();
Dispatcher.register(stageStore.handleActions);
export default stageStore;
