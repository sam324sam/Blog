import { Component, AfterViewInit } from '@angular/core';
import { SnakeService } from '../../services/snake.service';
import { CtxSquare } from '../../models/ctx-square/ctx-square-model';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrls: ['./background.css'],
})
export class Background implements AfterViewInit {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  serpientes: CtxSquare[] = [];

  // para el resposive del dibujado
  escala: number = Math.min(window.innerWidth, window.innerHeight) / 1920;
  velocidadBase: number = 5;
  tamaño = 20 * this.escala;
  velocidad = this.velocidadBase * this.escala;
  // Truncvo para arriba por que si
  cantidad = Math.ceil(this.escala * 35);

  // sacado de la web para que esto no explote
  fps: number = 30;
  interval: number = 1000 / this.fps;
  lastTime: number = 0;

  constructor(private readonly snakeService: SnakeService) {}

  ngAfterViewInit() {
    console.log(this.cantidad)
    this.canvas = document.getElementById('snake-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.serpientes = this.snakeService.crearSerpientes(this.cantidad, this.velocidad, this.canvas);
    // La t es del tiempo en el que se ejecuta
    requestAnimationFrame((t) => this.animar(t));
  }

  private animar(timestamp: number) {
    requestAnimationFrame((t) => this.animar(t));
    const delta = timestamp - this.lastTime;
    if (delta < this.interval) return;

    this.lastTime = timestamp - (delta % this.interval);

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (const serpiente of this.serpientes) {
      this.snakeService.moverSerpiente(serpiente, this.canvas);
      this.dibujarSerpiente(serpiente);
    }
  }

  private dibujarSerpiente(serpiente: CtxSquare) {
    this.ctx.fillStyle = serpiente.color;
    this.ctx.shadowColor = serpiente.color;
    this.ctx.shadowBlur = 15;
    this.ctx.fillRect(serpiente.x, serpiente.y, 20, 20);

    for (const parte of serpiente.posicionesStela) {
      this.ctx.fillStyle = parte.color;
      this.ctx.fillRect(parte.x, parte.y, 20, 20);
    }
  }
}
