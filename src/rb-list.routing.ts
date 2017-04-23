import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbListComponent } from './rb-list.component';

const routes: Routes = [
  {
    path: '',
    component: RbListComponent
  },
];
export const RbListComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);