import { EventEmitter } from 'events';
import data from '../data/ingredients';
import Dispatcher from '../dispatchers/Dispatcher';


class IngredientStore extends EventEmitter{
  constructor() {
    super();
    this.ingredients = data;
  }

  getAll(){
    return this.ingredients;
  }

  createIngredient(ingredientName, startDate, endDate){
    let id = Date.now();
    this.brews.push({
      "name": ingredientName,
      "startDate": startDate,
      "endDate": endDate,
      "id": id,
      "userId": "userId"
    });
    this.emit('change');
  };

  handleActions = (action) =>  {
    console.log('Handle ingredient Action: '+ action);
  }

}

const ingredientStore = new IngredientStore();
Dispatcher.register(ingredientStore.handleActions);
export default ingredientStore;
