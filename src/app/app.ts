import { Component, signal } from '@angular/core';
import { Background } from './components/background/background';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Welcome } from "./components/welcome/welcome";
import { Skills } from "./components/skills/skills";
import { MyServices } from "./components/my-services/my-services";

@Component({
  selector: 'app-root',
  imports: [Background, Header, About, Projects, Welcome, Skills, MyServices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog-personal');
}
