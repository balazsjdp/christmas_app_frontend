import { Component,HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnInit {
  @Input() name : string = '';
  @Input() fold : boolean = false;

  constructor()
  {
    console.log("created")
  }

  ngOnInit(): void {
    console.log(this.name)
  }

  @HostListener("click") onClick(){
    //console.log("User Click using Host Listener")
  }


}
