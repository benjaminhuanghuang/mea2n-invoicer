## Install angular-cli
    $ npm install -g @angular/cli

## Create client-side project
    $ ng new invoicer-angular
    The client side project runs on port 4200, so we need enable CORS
    https://enable-cors.org

## Run client side app
    $ ng serve

## angular-cli create component
    $ ng g component navbar
    angular cli will update app.module.ts to involve the new component automatically.

## Router
    add <base href="/"> in index.html
    add Router in app.module.ts
        import { RouterModule, Routes } from '@angular/router'
        imports:[
            RouterModule.forRoot(appRoutes),
        ]
        const appRoutes: Routes = [
            {
                path:'', component: CustomersComponent
            }
        ]   
    Use router in app.component.html
        <router-outlet></router-outlet>

    Use router link in html
        <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}">
            <a [routerLink]="['/']">Dashboard</a>
        </li>

## Bootstrap css can navbar
    https://bootswatch.com -> Simplex ->download
    Use the css in index.html

    bootstrap -> Getting started -> Example -> Starter template -> view page source 
    copy <nav>