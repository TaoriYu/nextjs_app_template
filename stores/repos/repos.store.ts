import { Api } from '../api';
import { makeStore } from '../provider/MakeStore';

@makeStore(ReposStore)
export class ReposStore extends Api {

}
