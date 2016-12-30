import { Dispatcher } from '../dispatchers/dispatcher';


export function createBrew(beerName, startDate, endDate, userId){
  Dispatcher.dispatch({
    type: 'CREATE_BREW',
    "beerName": beerName,
    "startDate": startDate,
    "endDate": endDate,
    "userId": userId
    }
  );
};
