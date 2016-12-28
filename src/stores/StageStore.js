import { EventEmitter } from 'events';
import data from '../data/data'


class StageStore extends EventEmitter{
  constructor() {
    super();
    this.state ={data: data};
  }

  getAll(){
    return this.data;
  }

}

const stageStore = new StageStore();
export default measureStore;
