import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RbListComponent } from './rb-list.component';
import { RbListComponentRouting } from './rb-list.routing';

export * from './rb-list.component';
export * from './rb-list.routing';

@NgModule({
  imports: [
    CommonModule,
    RbListComponentRouting
  ],
  declarations: [
    RbListComponent
  ],
  exports: [
    RbListComponent
  ]
})
export class RbListComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RbListComponentModule,
      providers: []
    };
  }
}
