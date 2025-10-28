import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { MoveDirection, OutMode, Engine, Container } from '@tsparticles/engine';
import { ParticlesComponent } from "../particles/particles.component";

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {

  }

}