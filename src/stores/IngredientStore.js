import { EventEmitter } from 'events';
import data from '../data/ingredients';
import dispatcher from '../dispatchers/dispatcher';


class IngredientStore extends EventEmitter{
  constructor() {
    super();
    this.ingredients = data;
  }

  getAll(){
    return this.ingredients;
  }

  createIngredient(){};

  handleActions = (action) =>  {
    console.log('Handle ingredient Action: '+ action);
  }

}

const ingredientStore = new IngredientStore();
dispatcher.register(ingredientStore.handleActions);
export default ingredientStore;
