import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AssemblyService } from 'src/app/services/assembly.service';
import { markFormGroupTouched } from 'src/app/utils';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  parentFormGroup: FormGroup;
  controlKey = 'alex';

  componentDestroy = new Subject();

  constructor(private assemlyService: AssemblyService, private fb: FormBuilder) {
    this.parentFormGroup = this.fb.group({
      // sample: this.fb.group({})
    })
    console.log('this.parentFormGroup-parent',this.parentFormGroup)
  }

  ngOnInit(): void {
    this.assemlyService.assembliesList$
      .pipe(takeUntil(this.componentDestroy))
      .subscribe((res) => {
        console.log('behaviuor-response', res);
      });
  }
  ngOnDestroy(): void {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }
  onSave() {
    markFormGroupTouched(this.parentFormGroup)
    console.log('onsave', this.parentFormGroup.status ,this.parentFormGroup)
  }
}
