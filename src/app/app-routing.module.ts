import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotePageComponent} from "./components/note-page/note-page.component";
import {NoteEmptyComponent} from "./components/note-empty/note-empty.component";

const routes: Routes = [
  {path: "", component: NoteEmptyComponent},
  {path: "note/:id", component: NotePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
