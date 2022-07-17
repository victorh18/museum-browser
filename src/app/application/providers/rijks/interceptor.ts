/* eslint-disable  @typescript-eslint/no-explicit-any */

import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RIJKS_URL } from "./constants";

@Injectable()
export class RijksInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;
       
        if(!url.includes(RIJKS_URL)){
            return next.handle(req)
        }

        const newRequest = req.clone({
            params: (req.params ?? new HttpParams()).set('key', 'yluGpPtn')
        })

        return next.handle(newRequest);
        
    }

}