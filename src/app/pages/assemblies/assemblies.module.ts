import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssembliesRoutingModule } from './assemblies-routing.module';
import { AssembliesComponent } from './assemblies.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [AssembliesComponent],
  imports: [CommonModule, SharedModule, AssembliesRoutingModule],
})
export class AssembliesModule {}
