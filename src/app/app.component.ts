import {Component} from '@angular/core';

interface NoteItem {
  title: string;
  content: string;
}

const NOTE_KEY: string = "notes"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Note App';
  public notes: Array<NoteItem> = [];
  public noteTitle: string = "";
  public noteContent: string = "";

  public activeIndexNote = -1;

  constructor() {
    this._syncData(true);
  }

  saveNote() {
    //destructor // rest operator // spread operator
    if (this.activeIndexNote != -1) {
      this.notes[this.activeIndexNote] = {
        title: this.noteTitle,
        content: this.noteContent
      };
    } else {
      this.notes = [
        ...this.notes,
        {
          title: this.noteTitle,
          content: this.noteContent
        }
      ]
    }

    /*this.notes.push({

    })*/
    this.resetForm();
    this._syncData();
  }

  public resetForm() {
    this.noteTitle = "";
    this.noteContent = "";
    this.activeIndexNote = -1;
  }

  public deleteNote(index: number) {
    const c = confirm("Are you sure you want to delete this note?");
    if (!c) return;
    this.notes.splice(index, 1);
    this._syncData();
  }

  public updateNote(index: number) {
    this.activeIndexNote = index;
    const note = this.notes[index];
    this.noteTitle = note.title;
    this.noteContent = note.content;
  }


  private _syncData(isFirstTime: boolean = false) {
    if (isFirstTime) {
      this._readData();
    } else {
      this._writeData();
    }
  }

  private _readData() {
    this.notes = JSON.parse(localStorage.getItem(NOTE_KEY) || '[]');
  }

  private _writeData() {
    const notes = JSON.stringify(this.notes);
    localStorage.setItem(NOTE_KEY, notes);
  }
}
