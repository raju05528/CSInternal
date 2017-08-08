
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

declare var jQuery: any;



@Injectable()
export class ProjectService {
    protected baseURL: string = '';
    private isErrorOccured: boolean = false;
    private serviceCount: number = 0;    
    
    constructor(private http: Http) {

        if (window.location.hostname == 'localhost') {
            this.baseURL = 'http://localhost:3000';``
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
    
    public getSelectedEmployees(data: any){ //Observable<Response>
         return this.http.get(this.baseURL + '/TimeSheet/GetSelectedEmployees/Employee_ID/'+data).map((res) => res.json());     
    }
      private extractData(res: Response) {
	let body = res.json();
        return body.data || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	


        public getWeeklyProjects() {
        return this.http.get(this.baseURL + '/TimeSheet/GetWeeklyProjects').map((res) => res.json());
    }
    // protected post(url: string, data: any, isNoLoadingPanel?: boolean): any {
	// 	let options: RequestOptions;
	// 	return this.http.post(this.baseURL + url, JSON.stringify(data), this.getOptions(isNoLoadingPanel))
	// 		.map(res => {
	// 			this.hideLoadingPanel(isNoLoadingPanel);
	// 			return res.json();
	// 		})
	// 		.catch(err => {
	// 			this.hideLoadingPanel(isNoLoadingPanel);
	// 			return Observable.throw(err.json())
	// 		});
    // }
    //     private getOptions(isNoLoadingPanel: boolean): RequestOptions {
	// 	this.showLoadingPanel(isNoLoadingPanel);
	// 	let options: RequestOptions;
	// 	var token = localStorage.getItem('token');
	// 	let headers = new Headers({ 'Content-Type': 'application/json', 'session-id': token });
	// 	options = new RequestOptions({ headers: headers });
	// 	return options;
	// }
    // private showLoadingPanel(isNoLoadingPanel: boolean) {
	// 	if (!isNoLoadingPanel) {
	// 		this.serviceCount++;
	// 		jQuery('#someid').show();
	// 	}
    // }
    // private hideLoadingPanel(isNoLoadingPanel: boolean) {
	// 	if (!isNoLoadingPanel) {
	// 		this.serviceCount--;
	// 		if (this.serviceCount <= 0)
	// 			jQuery('#someid').hide();
	// 	}
	// }
}

