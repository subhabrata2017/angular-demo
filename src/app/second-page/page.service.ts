import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PageService {
    users: string[] = ['Anant', 'Subha'];
    
    constructor( private http: Http ){}

    addUsers( userName: string ) {
        this.users.push( userName );
    } 
    
    fetchAPIData(): Promise<any> {
        
        return this.http.get( 'https://swapi.dev/api/people/' ).toPromise().then(response => {
            let data = response.json();
            if ( data.results.length > 0 ) {
                return data.results;
            }
            return undefined;
        })
    }
}