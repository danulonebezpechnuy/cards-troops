import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SQUADS } from './mock-squads';
import { Squad } from './squad';

@Injectable({
  providedIn: 'root'
})
export class SquadService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() {}

  getSquads(): Observable<Squad[]> {
    return of(SQUADS);
  }

  getSquad( id: number ): Observable<Squad> {
    return of(this.clone(SQUADS.find( squad => squad.id === id ))!);
  }

  private clone(obj: any): any {
    var cloneObj = new (this.constructor() as any);
    for (var attribut in this) {
        if (typeof this[attribut] === "object") {
            cloneObj[attribut] = this.clone(attribut);
        } else {
            cloneObj[attribut] = this[attribut];
        }
    }
    return cloneObj;
  }

}
