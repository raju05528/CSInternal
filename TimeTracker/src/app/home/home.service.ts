
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@Injectable()
export class ProjectService {
    protected baseURL: string = '';
    private isErrorOccured: boolean = false;
    private serviceCount: number = 0;
    constructor(private http: Http) {

        if (window.location.hostname == 'localhost') {
            this.baseURL = 'http://localhost:3000';
            console.log('base_url test : ' + this.baseURL);
        }
        // else {
        //     this.baseURL = window.location.protocol + '//' + window.location.hostname + '/services/api/';
        // }
    }
    private nodeUrl = 'http://localhost:3000';
    public getAllEmployees() {
        return this.http.get(this.baseURL + '/TimeSheet/selectEmp').map((res) => res.json());
    }
}

