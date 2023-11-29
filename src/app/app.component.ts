import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { JokeComponent } from './joke/joke.component';
import { DrawComponent } from './draw/draw.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserSelectorComponent, JokeComponent, DrawComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    fwEnabled = true;
    step = signal(0);
    name = signal('');


    onShowNext(name : string)
    {
      this.name.set(name);
      this.step.update(s => s + 1);
    }

}
