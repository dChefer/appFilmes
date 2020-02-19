import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssistirFilmePage } from './assistir-filme';

@NgModule({
  declarations: [
    AssistirFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(AssistirFilmePage),
  ],
})
export class AssistirFilmePageModule {}
