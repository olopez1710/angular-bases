import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{name: 'Trunks', power: 10}]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string):void{
    if (!id) return;
    this.onDelete.emit(id);
  }
}
