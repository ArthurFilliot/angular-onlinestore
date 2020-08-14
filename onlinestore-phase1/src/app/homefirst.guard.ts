import { Injectable } from '@angular/core';
import { StoreComponent } from '../components/components.module';
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
            if (route.component!=StoreComponent) {
                this.router.navigateByUrl("/")
                return false;
            }
        }
        return true;
    }
}