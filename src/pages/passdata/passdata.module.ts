import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassdataPage } from './passdata';

@NgModule({
  declarations: [
    PassdataPage,
  ],
  imports: [
    IonicPageModule.forChild(PassdataPage),
  ],
})
export class PassdataPageModule {}
