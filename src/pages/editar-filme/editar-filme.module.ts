import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarFilmePage } from './editar-filme';

@NgModule({
  declarations: [
    EditarFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(EditarFilmePage),
  ],
})
export class EditarFilmePageModule {}
