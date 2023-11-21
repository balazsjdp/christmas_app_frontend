import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import 'animate.css';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user-selector',
  standalone: true,
  imports: [CommonModule,MatSelectModule],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss'
})
export class UserSelectorComponent implements OnInit {
  names : string[] = [];
  coords: [number, number][] = [];
  #apiService : ApiService = inject(ApiService);
  selectedName : string | null = null;
  selectionValid : boolean = false;
  
  @Output() showNext = new EventEmitter<boolean>;

  ngOnInit(): void {
    this.#apiService.getNames().subscribe((names) => {
      this.names = names;
    })
  }

  onNameSelected(e : any)
  {
    this.selectedName = e.target.value;

    if(this.selectedName !== '0' && this.selectedName !== null)
    {
      this.selectionValid = true;
    }
    else
    {
      this.selectionValid = false;
    }

  }

  onNextClick()
  {

    if(this.selectedName !== '0' && this.selectedName !== null)
    {
      this.showNext.emit(true);
    }
  }

}