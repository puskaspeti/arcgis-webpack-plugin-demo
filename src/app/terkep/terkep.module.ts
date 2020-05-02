import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonLibModule } from '@eing/common';

import { HomeComponent } from './home/home.component';
import { TerkepComponent } from './terkep.component';
import { TerkepRoutingModule } from './terkep-routing.module';

@NgModule({
  declarations: [TerkepComponent, HomeComponent],
  imports: [CommonModule, CommonLibModule, TerkepRoutingModule],
})
export class TerkepModule {}
