import {Observable} from 'rxjs';
import {Series} from '../../model/series';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Show} from '../../model/show';

@Injectable()
export class SeriesService {
  constructor(
    private http: HttpClient,
  ) {
  }

  private api = environment.API;

  private filter(item: any): Series {
    const show = item._embedded.show;
    return {
      id: item?.id,
      airdate: item?.airdate,
      airstamp: item?.airstamp,
      airtime: item?.airtime,
      name: item?.name,
      season: item?.season,
      summary: show?.summary,
      show: {
        ...this.mapShow(show)
      }
    };
  }

  private mapShow(item: any): Show {
    return {
      id: item?.id,
      image: item?.image?.medium,
      genres: item?.genres,
      summary: item?.summary,
      runtime: item?.runtime,
      name: item?.name,
      rating: item?.rating.average,
      premiered: item?.premiered,
      type: item?.type,
      airdays: item?.schedule?.days,
      airtime: item?.schedule?.time
    };
  }

  fetchSeries(date: string): Observable<Series[]> {
    const url = `${this.api}/schedule/web?date=${date}&country=US`;
    return this.http.get<any[]>(url).pipe(
      map(response => response.map((item) => {
        return {
          ...this.filter(item)
        };
      }))
    );
  }

  fetchShowById(id: number): Observable<Show> {
    const url = `${this.api}/shows/${id}`;
    return this.http.get<Show>(url).pipe(
      map(item => this.mapShow(item))
    );
  }
}
