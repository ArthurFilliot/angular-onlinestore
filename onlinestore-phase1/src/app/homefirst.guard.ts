import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HomeFirstGuard { 
    private firstnavigation = true;
    constructor(private router: Router) {

    }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : boolean {
        if (this.firstnavigation) {
            this.firstnavigation=false
            if (route.component!=HomeComponent) {
                this.router.navigateByUrl("/")
                return false;
            }
        }
        return true;
    }
}