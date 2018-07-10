import { Routes, RouterModule } from '@angular/router';

import { PageContactListComponent } from '../pages/page-contact-list/page-contact-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'contactList', pathMatch: 'full' },
    { path: 'contactList', component: PageContactListComponent},  
  ]; 

export const appRoutingProviders: any[] = [
];
 
export const routing = RouterModule.forRoot(appRoutes);  