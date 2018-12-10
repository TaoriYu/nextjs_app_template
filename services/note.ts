import { Api } from './api';

export class Note extends Api {
  public async getNotes() {
    return (await this.api.get('notes')).data;
  }
}
