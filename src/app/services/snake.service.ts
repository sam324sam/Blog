import { Injectable } from '@angular/core';
import { CtxSquare } from '../models/ctx-square/ctx-square-model';

@Injectable({ providedIn: 'root' })
export class SnakeService {
  velocidad = 5;

  crearSerpientes(cantidad: number, velocidad: number, canvas: HTMLCanvasElement): CtxSquare[] {
    const serpientes: CtxSquare[] = [];

    for (let i = 0; i < cantidad; i++) {
      serpientes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: '#543291',
        //color: this.colorAleatorio(),
        direccion: this.obtenerDireccionAleatoria(),
        historial: [],
         posicionesStela: new Array(5).fill(0).map(() => ({ x: 0, y: 0, color: '#543291' })),
        //posicionesStela: new Array(5).fill(0).map(() => ({ x: 0, y: 0, color: this.colorAleatorio() })),
      });
    }

    return serpientes;
  }

  moverSerpiente(serpiente: CtxSquare, canvas: HTMLCanvasElement) {
    // Cambiar direccion aleatoriamente con baja probabilidad luego cambio el mat a ver si cada frame es pòco o mul probables
    if (Math.random() < 0.01) {
      // 1% de probabilidad por frame en teoria
      serpiente.direccion = this.obtenerDireccionAleatoria();
    }

    switch (serpiente.direccion) {
      case 'arriba':
        serpiente.y -= this.velocidad;
        break;
      case 'abajo':
        serpiente.y += this.velocidad;
        break;
      case 'izquierda':
        serpiente.x -= this.velocidad;
        break;
      case 'derecha':
        serpiente.x += this.velocidad;
        break;
    }

    if (serpiente.x <= 0) serpiente.direccion = 'derecha';
    if (serpiente.x + 10 >= canvas.width) serpiente.direccion = 'izquierda';
    if (serpiente.y <= 0) serpiente.direccion = 'abajo';
    if (serpiente.y + 10 >= canvas.height) serpiente.direccion = 'arriba';

    this.actualizarEstela(serpiente);
  }

  private actualizarEstela(serpiente: CtxSquare) {
    serpiente.historial.unshift({ x: serpiente.x, y: serpiente.y });
    if (serpiente.historial.length > 100) serpiente.historial.pop();

    const distancia = 7;
    for (let i = 0; i < serpiente.posicionesStela.length; i++) {
      const pos = serpiente.historial[(i + 1) * distancia];
      if (pos) {
        serpiente.posicionesStela[i].x = pos.x;
        serpiente.posicionesStela[i].y = pos.y;
      }
    }
  }

  private obtenerDireccionAleatoria(): string {
    const dirs = ['arriba', 'abajo', 'izquierda', 'derecha'];
    return dirs[Math.floor(Math.random() * dirs.length)];
  }

  private colorAleatorio(): string {
    return `hsl(${Math.random() * 360}, 70%, 60%)`;
  }
}
