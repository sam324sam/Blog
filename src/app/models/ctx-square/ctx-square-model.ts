export interface CtxSquare {
  posicionesStela: PosicionesStela[];
  x: number;
  y: number;
  direccion: string;
  color: string;
  historial: { x: number; y: number }[];
}

interface PosicionesStela {
  x: number;
  y: number;
  color: string;
}
