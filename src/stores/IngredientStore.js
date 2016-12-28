import { EventEmitter } from 'events';
import data from '../data/data'


class IngredientStore extends EventEmitter{
  constructor() {
    super();
    this.state ={data: data};
  }

  getAll(){
    return this.data;
  }

}

const ingredientStore = new IngredientStore();
export default ingredientStore;
