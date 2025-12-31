import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  proyectos: { titulo: string; descripcion: string; imagen: string; web: string; repo: string }[] =
    [
      {
        titulo: 'Pokedex',
        descripcion:
          'Este proyecto es una aplicación web que muestra una lista de Pokémon con información básica de cada uno.',
        imagen: 'assets/img_proyectos/Pokedex.png',
        web: 'https://sam324sam.github.io/Pokedex/',
        repo: 'https://github.com/sam324sam/Pokedex',
      },
      {
        titulo: 'To do list Frontend',
        descripcion:
          'Proyecto de una lista de tareas (To-Do List) desarrollado con Angular. Permite a los usuarios agregar, eliminar y marcar tareas como completadas.',
        imagen: 'assets/img_proyectos/To-do-list-Frontend.png',
        web: 'https://sam324sam.github.io/To-do-list-Frontend/',
        repo: 'https://github.com/sam324sam/To-do-list-Frontend',
      },
      {
        titulo: 'To do list Backend',
        descripcion:
          'API REST desarrollada con Spring Boot y Java 17 que permite gestionar usuarios, crear listas de tareas con etiquetas y compartirlas de forma colaborativa.',
        imagen: 'assets/img_proyectos/To-do-list-Backend.png',
        web: '',
        repo: 'https://github.com/DannaPatricia/To-do-list-Backend',
      },
      {
        titulo: 'Proyecto fct',
        descripcion:
          'Este repositorio contiene el proyecto final de ciclo formativo de grado superior, desarrollado como parte de la Formación en Centros de Trabajo (FCT).',
        imagen: 'assets/img_proyectos/Proyecto_fct.png',
        web: 'https://sam324sam.github.io/Proyecto-fct/',
        repo: 'https://github.com/sam324sam/Proyecto-fct',
      },
      {
        titulo: 'Soporte-Tecnico-App',
        descripcion:
          'Aplicación web de soporte técnico para la creación, gestión y seguimiento de diferentes casos de soporte.',
        imagen: 'assets/img_proyectos/Soporte-Tecnico-App.png',
        web: 'https://dannapatricia.github.io/Soporte-Tecnico-App/',
        repo: 'https://github.com/DannaPatricia/Soporte-Tecnico-App',
      },
      {
        titulo: 'Juego de Naves en Godot',
        descripcion:
          'Este es un juego de naves en 2D desarrollado con Godot, creado como un reto personal para aprender a usar este motor de desarrollo en un mes.',
        imagen: 'assets/img_proyectos/Primer_Juego_En_Godot.png',
        web: '',
        repo: 'https://github.com/sam324sam/Primer_Juego_En_Godot',
      },
      {
        titulo: 'Juego de Memoria',
        descripcion: 'Un juego hecho con HTML, CSS y JavaScript.',
        imagen: 'assets/img_proyectos/Juego_De_Memoria.png',
        web: 'https://sam324sam.github.io/Juego_De_Memoria/',
        repo: 'https://github.com/sam324sam/Juego_De_Memoria',
      },
      {
        titulo: 'Tienda Videojuegos Java',
        descripcion:
          'Este proyecto es una aplicación web que gestiona el stock de una tienda de videojuegos en java.',
        imagen: 'assets/img_proyectos/Servlet_Inicio.PNG',
        web: '',
        repo: 'https://github.com/sam324sam/Tienda_Videojuegos_Java',
      },
      {
        titulo: 'Gestion FCT con nodejs',
        descripcion:
          'Proyecto de principiante para aprender node js. Donde se simulara la gestion de una aplicacion para la asignacion de empresas para alumnos de FCT',
        imagen: 'assets/img_proyectos/Gestion_FCT_Nodejs.png',
        web: '',
        repo: 'https://github.com/sam324sam/Gestion_FCT_Nodejs',
      },
      {
        titulo: 'Gestion Profesorado PHP',
        descripcion: 'En este proyecto daremos uso de una DB conjunto a PHP',
        imagen: 'assets/img_proyectos/Gestion_Profesores_PHP.PNG',
        web: '',
        repo: 'https://github.com/sam324sam/Gestion_Profesorado_PHP',
      },
      {
        titulo: 'Juego Conecta 4',
        descripcion: 'Un juego hecho con HTML, CSS y JavaScript.',
        imagen: 'assets/img_proyectos/Conecta4.png',
        web: 'https://sam324sam.github.io/Conecta_4/',
        repo: 'https://github.com/sam324sam/Conecta_4',
      },
      {
        titulo: 'Calculadora Interactiva',
        descripcion:
          'Un proyecto interactivo en JavaScript que simula el uso de una calculadora simple.',
        imagen: 'assets/img_proyectos/Calculadora.png',
        web: 'https://sam324sam.github.io/Calculadora/',
        repo: 'https://github.com/sam324sam/Calculadora',
      },
      {
        titulo: 'Juego Tres en raya',
        descripcion: 'Juego con enfoque en lógica de programación.',
        imagen: 'assets/img_proyectos/Tres_En_raya.webp',
        web: 'https://sam324sam.github.io/Tres_En_Raya/',
        repo: 'https://github.com/sam324sam/Tres_En_Raya',
      },
      {
        titulo: 'Mini animación de escribir',
        descripcion: 'Mini animación que simula la escritura de hola mundo usando JS.',
        imagen: 'assets/img_proyectos/Hola_Mundo.png',
        web: 'https://sam324sam.github.io/Hola_Mundo/',
        repo: 'https://github.com/sam324sam/Hola_Mundo',
      },
      {
        titulo: 'Ficheros en PHP',
        descripcion:
          'Pequeño proyecto en php que simula la gestión de permisos para vehículos para diferentes tipos de usuarios.',
        imagen: 'assets/img_proyectos/movilidad_PHP.webp',
        web: '',
        repo: 'https://github.com/sam324sam/Practica1PHP',
      },
    ];
}
