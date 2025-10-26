import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { MoveDirection, OutMode, Engine, Container } from '@tsparticles/engine';

@Component({
  selector: 'app-home',
  imports: [NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  id = 'tsparticles';

  // Test with LARGE VISIBLE particles first
  particlesOptions = {
    background: {
      color: { value: "#000000" }
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 60,  // Reduced for better visibility
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ffffff"  // Pure white for maximum visibility
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1,  // Full opacity for testing
        animation: {
          enable: false  // Disabled for testing
        }
      },
      size: {
        value: 4,  // LARGER size for visibility test
        animation: {
          enable: false  // Disabled for testing
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.8,  // Higher opacity
        width: 2  // Thicker lines
      },
      move: {
        enable: true,
        speed: 2,  // Faster for visibility
        direction: MoveDirection.none,
        random: false,
        straight: false,
        outModes: {
          default: OutMode.bounce
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: {
          enable: true
        }
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  ngOnInit() {
    console.log('🏠 HomeComponent initialized');
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log('🎨 Initializing particles engine...');
    try {
      await loadSlim(engine);
      console.log('✅ Particles engine loaded successfully');
    } catch (error) {
      console.error('❌ Error loading particles:', error);
    }
  }

  particlesLoaded(container: Container): void {
    console.log('✅ Particles container loaded');
    console.log('📊 Particle count:', container.particles?.count || 0);
    console.log('📦 Container:', container);

    // Check if particles are actually rendered
    if (container.particles?.count === 0) {
      console.warn('⚠️ No particles found in container!');
    }
  }
}