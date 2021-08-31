import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { markFormGroupTouched } from 'src/app/utils';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent {
  sampleForm: FormGroup;
  // @Input() parentFormGroup:FormGroup;
  @Input() parentFormGroup:any;
  @Input() controlKey = 'sample';

  genderOptions = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
    { label: 'Other', value: 'o' },
  ];

  constructor(private fb: FormBuilder) {
    this.sampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      subjects: this.fb.array([this.createSubjects(), this.createSubjects()]),
      desc: '',
      gender: new FormControl('', Validators.required),
    });
    // this.parentFormGroup
  }
  
  ngOnInit() {
    this.parentFormGroup.setControl(this.controlKey,this.sampleForm)
  }

  get subjects(): FormArray {
    return this.sampleForm.get('subjects') as FormArray;
  }

  createSubjects(): FormGroup {
    return this.fb.group({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit(evt: any) {
    // markFormGroupTouched(this.sampleForm);
    // console.log('onsubmit', this.sampleForm.value);
  }
}
