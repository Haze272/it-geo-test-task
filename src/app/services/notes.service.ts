import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Note} from "../models/note.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _notes = new BehaviorSubject<Note[]>([]);
  notes: Note[] = new Array<Note>();

  constructor() {
    this._notes = new BehaviorSubject<Note[]>(new Array<Note>())
    if (localStorage.getItem('notes')) {
      this.notes = JSON.parse(localStorage.getItem('notes')!);
      this._notes.next(this.notes);
    }
  }

  private generateId(): number {
    if (localStorage.getItem('id')) {
      let uniqueId: number = Number(localStorage.getItem('id')) + 1
      localStorage.setItem('id', uniqueId.toString())
      return uniqueId
    }
    else {
      let uniqueId = 1;
      localStorage.setItem('id', uniqueId.toString())
      return uniqueId
    }
  }

  addNote() {

    const note: Note = {
      id: this.generateId(),
      header: 'govno',
      content: 'ААААА',
      dateCreated: new Date()
    }
    if (localStorage.getItem('notes') === null) {
      this.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this._notes.next(this.notes)
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes')!);
      this.notes.push(note);
      this._notes.next(this.notes)
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }

  deleteNote(noteId: number) {
    this.notes.splice(this.notes.findIndex(item => item.id === noteId), 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this._notes.next(this.notes);
  }

  updateNote(note: Note) {
    this.notes.forEach((item, i) => {
      if (item.id === note.id) this.notes[i] = note;
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this._notes.next(this.notes);
  }

  getNotes(): Subject<Note[]> {
    return this._notes;
  }

  getNoteById(id: number) {
    const foundNote: Note | undefined = this.notes.filter(x => x.id == id)[0];
    if (foundNote) {
      return foundNote;
    } else {
      return null;
    }
  }
}
