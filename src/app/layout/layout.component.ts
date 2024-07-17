import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  implements OnInit, AfterViewInit {
  sidebarExpanded = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Initialization logic that should run on component initialization
  }

  ngAfterViewInit(): void {
    // Initialize the sidebar toggle functionality
    this.initializeSidebar();
  }

  toggleSidebar(): void {
    this.sidebarExpanded = !this.sidebarExpanded;
    const sidebar = this.el.nativeElement.querySelector('#sidebar');
    if (sidebar) {
      this.sidebarExpanded ?
        this.renderer.addClass(sidebar, 'expand') :
        this.renderer.removeClass(sidebar, 'expand');
    }
  }

  private initializeSidebar(): void {
    // Optionally, you can handle initial sidebar state here if needed
  }
}