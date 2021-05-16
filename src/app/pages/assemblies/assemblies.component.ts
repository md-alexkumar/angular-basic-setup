import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CATEGORIES_PATH } from 'src/app/constants';
import { AssemblyService } from 'src/app/services/assembly.service';

@Component({
  selector: 'app-assemblies',
  templateUrl: './assemblies.component.html',
  styleUrls: ['./assemblies.component.scss'],
})
export class AssembliesComponent implements OnInit, OnDestroy {
  componentDestroyed = new Subject();

  constructor(
    private assemlyService: AssemblyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssemblies();
  }
  getAssemblies() {
    this.assemlyService
      .getAssemblies()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((res) => {
        console.log('this.assemlyService.getAssemblies', res);
      });
  }
  navigateTo(): void {
    this.router.navigateByUrl(CATEGORIES_PATH);
  }
  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }
}
