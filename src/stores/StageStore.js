import { EventEmitter } from 'events';
import Dispatcher from '../dispatchers/Dispatcher';
import BrewStore from '../stores/BrewStore';

class StageStore extends EventEmitter{
  constructor() {
    super();
    this.stages = [];
    this.fetchStages(BrewStore.getActualId());
  }

  getAll(){
    return this.stages;
  }

  createStage(stage){
    this.stages.push(stage);
    this.emit('change');
  }

  async fetchStages(id){
    try {
      let response = await fetch(`https://birrapp-back.herokuapp.com/api/brews/${id}/stages`);
      let responseJson = await response.json();
      console.log()
      this.stages = responseJson;
      this.stageActual =[0];
      console.log(this.stages);
      this.emit('change');
    } catch (e) {
      console.log(e);
    }
  }

  handleActions = (action) =>  {
    switch (action.type) {
      case "CREATE_STAGE":
        this.createStage(action.stage);
        break;
      case "DELETE_STAGE":
        this.deleteStage(action.stage);
        break;
      case "CHANGE_BREW":
        this.fetchStages(action.id);
        break;
      default:
        break;
    }
  }


}

const stageStore = new StageStore();
Dispatcher.register(stageStore.handleActions);
export default stageStore;
