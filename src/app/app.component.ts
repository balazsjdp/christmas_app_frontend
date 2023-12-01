import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { JokeComponent } from './joke/joke.component';
import { DrawComponent } from './draw/draw.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserSelectorComponent, JokeComponent, DrawComponent, ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    fwEnabled = true;
    comingSoon = true;
    step = signal(0);
    name = signal('');
    @ViewChild('audio') audioPlayer! : ElementRef<HTMLAudioElement>;
    playButtonContent = "Play some music :)";


    toggleMusic()
    {
      if(this.audioPlayer.nativeElement.paused)
      {
        this.audioPlayer.nativeElement.play()
        this.playButtonContent = "Stop the music :("
      }
      else
      {
        this.audioPlayer.nativeElement.pause();
        this.playButtonContent = "Play some music :)";
      }
    }


    onShowNext(name : string)
    {
      this.name.set(name);
      this.step.update(s => s + 1);
    }

}
