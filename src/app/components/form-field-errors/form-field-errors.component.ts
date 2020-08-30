import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-errors',
  template: `
    <div class="errors" *ngIf="field.errors && (field.touched || field.dirty)">
      <span *ngFor="let error of field.errors | keyvalue">
        {{ error | error: fieldName }}
      </span>
    </div>
  `,
  styles: [
    `
      .errors {
        color: red;
        margin-left: 20px;
        margin-top: 5px;
      }
    `,
  ],
})
export class FormFieldErrorsComponent implements OnInit {
  @Input() field: FormControl;
  @Input() fieldName: string;

  constructor() {}

  ngOnInit(): void {}
}
