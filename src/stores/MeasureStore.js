import { EventEmitter } from 'events';
import data from '../data/data'


class MeasureStore extends EventEmitter{
  constructor() {
    super();
    this.state ={data: data};
  }

  getAll(){
    return this.data;
  }

}

const measureStore = new MeasureStore();
export default measureStore;
