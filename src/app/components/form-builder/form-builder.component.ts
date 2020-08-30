import { Component, OnInit } from '@angular/core';
import { IFormFields, FieldType } from 'src/app/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  get FieldType(): typeof FieldType {
    return FieldType;
  }

  fields: IFormFields = [
    {
      name: 'fullname',
      type: FieldType.String,
      placeholder: 'enter your name here...',
      label: 'Fullname',
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    },
    {
      name: 'age',
      value: 20,
      type: FieldType.Number,
      label: 'Age',
      validators: [Validators.required, Validators.min(18)],
    },
    {
      name: 'isMarried',
      value: false,
      type: FieldType.Checkbox,
      label: 'Is Married',
      validators: Validators.requiredTrue,
    },
    {
      name: 'language',
      type: FieldType.Select,
      label: 'Language',
      options: [
        { value: '', display: '--- choose language ---' },
        { value: 'ru', display: 'Russian' },
        { value: 'en', display: 'English' },
        { value: 'hi', display: 'Hindi' },
      ],
      validators: Validators.required,
    },
    { name: 'gender', value: 'male', type: FieldType.Radio, label: 'Male' },
    { name: 'gender', value: 'female', type: FieldType.Radio, label: 'Female' },
    { name: 'bio', type: FieldType.Text, label: 'Tell me about yourself (optional)' },
  ];

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.initalizeFormFields();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.myForm.valid) {
      alert('form is not valid');
    } else {
      alert('check console!');
      console.log(this.myForm.value);
    }
  }

  private initalizeFormFields(): FormGroup {
    const controls = {};

    for (const field of this.fields) {
      controls[field.name] = this.fb.control(field.value || this.defaultValue(field.type), field.validators);
    }

    return this.fb.group(controls);
  }

  private defaultValue(type: FieldType): any {
    if (type !== FieldType.Checkbox) {
      return '';
    }

    return false;
  }
}
