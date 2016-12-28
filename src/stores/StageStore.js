import { EventEmitter } from 'events';
import data from '../data/stages';
import dispatcher from '../dispatchers/dispatcher';

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
dispatcher.register(stageStore.handleActions);
export default stageStore;
