import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  jobs: string[] = [];
  addjob(value: any) {
    if (value !== "") {
      this.jobs.push(value)
    }
    else {
      alert("Bir görev girmelisin.")
    }
  }
  removeJob(job: any) {
    for (let i = 0; i <= this.jobs.length; i++) {
      if (job == this.jobs[i]) {
        this.jobs.splice(i, 1)
      }
    }

  }
}

