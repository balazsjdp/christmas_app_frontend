import { Component, Input, OnInit, ViewChild, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ApiService } from '../service/api.service';
import { NoteComponent } from '../note/note.component';
import { ConfettiComponent } from '../confetti/confetti.component';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [CommonModule, NoteComponent, ConfettiComponent],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss'
})
export class DrawComponent implements OnInit {
  #apiService : ApiService = inject(ApiService);
  names : string[] = [];
  clickedCardIndex : WritableSignal<number|null> = signal(null);
  drawnName : string = '';
  canClick : boolean = true;
  @ViewChild('confetti') confetti! : ConfettiComponent;

  @Input() userName : string = '';

  ngOnInit(): void {
    this.#apiService.getNames().subscribe((names) => {
      this.names = names;
    })
  }

  onNoteClick(i : number)
  {
    if(!this.canClick) return;

    this.clickedCardIndex.set(i);
    this.#apiService.drawName(this.userName).subscribe((name) => {
      this.drawnName = name;
      this.canClick = false;
    })

    setTimeout(() => {
      this.confetti.fireChristmasConfetti();
    }, 2000);
  }



  shuffle(array : any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
