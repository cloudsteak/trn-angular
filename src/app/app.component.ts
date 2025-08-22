import { Component, effect, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Feedback = { name: string; message: string; rating: number; createdAt: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Visszajelzés fal';
  name = '';
  message = '';
  rating = 5;

  feedbacks = signal<Feedback[]>(this.load());

  constructor() {
    effect(() => {
      localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks()));
    });
  }

  add() {
    if (!this.name.trim() || !this.message.trim()) return;
    const fb: Feedback = {
      name: this.name.trim(),
      message: this.message.trim(),
      rating: this.rating,
      createdAt: new Date().toISOString(),
    };
    this.feedbacks.update((arr) => [fb, ...arr]);
    this.name = '';
    this.message = '';
    this.rating = 5;
  }

  remove(i: number) {
    this.feedbacks.update((arr) => arr.filter((_, idx) => idx !== i));
  }

  clearAll() {
    this.feedbacks.set([]);
  }

  private load(): Feedback[] {
    try {
      const raw = localStorage.getItem('feedbacks');
      return raw ? (JSON.parse(raw) as Feedback[]) : [];
    } catch {
      return [];
    }
  }
}
