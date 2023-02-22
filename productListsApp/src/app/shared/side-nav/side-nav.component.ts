import { Component, OnInit, ChangeDetectorRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @Input() appTitle: string;
  @Input() fillerNav: any[];

    constructor(private observer: BreakpointObserver,
                private changeDetectRef: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
    this.changeDetectRef.detectChanges();
  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

}
