import { Component,HostListener, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent  {
  @Input() name : string = '';
  @Input() canClick : boolean = true;
  @Input() fadeOut : boolean = false;

  selected : boolean = false;
  flipped : boolean = false;

  constructor()
  {
    console.log("created")

  }


  @HostListener("click") onClick(){
    if(!this.canClick) return;
    
    this.selected =  true;

    setTimeout(() => {
      this.flipped = true;
    }, 2000);
  }


}
