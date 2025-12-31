import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  contentToShow: boolean[] = [false, false, false, false];

  showContent(index: number) {
    this.contentToShow[index] = !this.contentToShow[index];
    console.log("Estaod cambiado", this.contentToShow)
  }
}
