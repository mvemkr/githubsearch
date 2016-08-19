import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SecretConfig } from '../config/secret';

@Injectable()
export class GithubService {
    private username:string;
    private client_id:string;
    private client_secret:string;

    constructor(private _http:Http, private _secretConfig:SecretConfig) {
        this.client_id = _secretConfig.client_id;
        this.client_secret = _secretConfig.client_secret;
        this.username = "mvemkr";
    }

    getUser(): Observable {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getRepos(): Observable {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateUser(username:string) {
        this.username = username;
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
