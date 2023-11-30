import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import 'animate.css';
import { ApiService } from '../service/api.service';
import { Helper } from '../utils/helper';
import { ConfettiComponent } from '../confetti/confetti.component';

@Component({
  selector: 'app-user-selector',
  standalone: true,
  imports: [CommonModule,MatSelectModule, ConfettiComponent],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.scss'
})
export class UserSelectorComponent implements OnInit {
  names : string[] = [];
  coords: [number, number][] = [];
  #apiService : ApiService = inject(ApiService);
  selectedName : string | null = null;
  selectionValid : boolean = false;
  @ViewChild('userImage') userImage!: ElementRef;
  @Output() showNext = new EventEmitter<string>;

  @ViewChild('confetti') confetti! : ConfettiComponent;


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

    let imageName = Helper.replaceHungarianSpecialCharacters(this.selectedName!);
    let imageFilePath = '../assets/users/' + imageName + '.jpeg';

    this.userImage.nativeElement.src = imageFilePath;


    this.confetti.fire();
  }

  onNextClick()
  {

    if(this.selectedName !== '0' && this.selectedName !== null)
    {
      this.showNext.emit(this.selectedName);
    }
  }

  handleImageError()
  {
    this.userImage.nativeElement.src = "../assets/users/unknown.jpeg"
  }
}