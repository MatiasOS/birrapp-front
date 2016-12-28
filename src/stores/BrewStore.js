import { EventEmitter } from 'events';
import data from '../data/data'


class BrewStore extends EventEmitter{
  constructor() {
    super();
    this.state ={data: data};
  }

  getAll(){
    return this.data;
  }

}

const brewStore = new BrewStore();
export default brewStore;
