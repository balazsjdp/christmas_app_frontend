import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-confetti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confetti.component.html',
  styleUrl: './confetti.component.scss'
})
export class ConfettiComponent {
  jsConfetti : JSConfetti;


  constructor()
  {
    this.jsConfetti = new JSConfetti();
  }


  fire()
  {
    this.jsConfetti.addConfetti({
      confettiColors: ['#165b33', '#146b3a', '#f8b229', '#ea4630', '#bb2528'],
      confettiRadius: 5,
      confettiNumber: 500
    });
  }

  fireChristmasConfetti()
  {
    this.jsConfetti.addConfetti({
      emojis: ['☃︎','🎅','🎄','❄️','☃️','🎁','🦌'],
      emojiSize: 50,
      confettiNumber: 200
    });
   
  }
}
