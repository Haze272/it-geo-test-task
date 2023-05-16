import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteMenuComponent } from './components/note-menu/note-menu.component';
import { NotePageComponent } from './components/note-page/note-page.component';
import { NoteEmptyComponent } from './components/note-empty/note-empty.component';
import { NoteItemComponent } from './components/note-menu/note-item/note-item.component';
import {FormsModule} from "@angular/forms";
import { MenuControlComponent } from './components/note-menu/menu-control/menu-control.component';
import { NoteFilterPipe } from './pipes/note-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteMenuComponent,
    NotePageComponent,
    NoteEmptyComponent,
    NoteItemComponent,
    MenuControlComponent,
    NoteFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
