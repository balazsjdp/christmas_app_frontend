import { Component,ElementRef,HostListener, Input, OnChanges, SimpleChanges, ViewChild, signal, effect} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Helper } from '../utils/helper';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnChanges {
  @Input() name : string = '';
  @Input() canClick : boolean = true;
  @Input() fadeOut : boolean = false;

  selected : boolean = false;
  flipped = signal(false);

  userImageSrc = "../../assets/users/unknown.jpeg"

  constructor()
  {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['name'])
    {
      this.userImageSrc = '../../assets/users/' + Helper.replaceHungarianSpecialCharacters(this.name) + '.jpeg';
    }
  }

  handleUserImageError()
  {
      this.userImageSrc = "../../assets/users/unknown.jpeg";
  }



  @HostListener("click") onClick(){
    if(!this.canClick) return;
    
    this.selected =  true;

    setTimeout(() => {
      this.flipped.set(true);
    }, 2000);
  }


}
