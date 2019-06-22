import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../model/event';
import {MongoService} from "../mongo/mongo.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUri = 'http://127.0.0.1:84/event';

  constructor(private http: HttpClient, private mongoService: MongoService) {
  }

  public async save(event: Event) {

    if (event.id) {
      return await this.post(event);
    } else {
      return await this.http.post<string>(this.eventUri, JSON.stringify(event), {
        headers:
          {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
      }).toPromise();
    }
  }

  public async fetch(id: number) {
    return await this.http.get<Event[]>(
      `${this.eventUri}/timeline/${id}`,
      {
        headers:
          {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
      }).toPromise();
  }

  private async post(event: Event) {

    event.content = await this.mongoService.create(event);

    return await this.http.put<string>(`${this.eventUri}/${event.id}`, JSON.stringify(event), {
      headers:
        {
          authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    }).toPromise();
  }
}
