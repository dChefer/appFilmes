import { AddFilmesPage } from './../add-filmes/add-filmes';

import { Component } from '@angular/core';

import { ListPage } from './../list/list';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = AddFilmesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
