import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'error',
})
export class ErrorPipe implements PipeTransform {
  private errorMessages = { required: 'is required', minlength: 'must be ' };

  transform(error: any, name: string): string {
    console.log(error);

    const { key, value } = error;

    switch (key) {
      case 'required':
        return this.getRequiredMsg(name);
      case 'minlength':
        return this.getMinlengthMsg(name, value.requiredLength);
      case 'maxlength':
        return this.getMaxlengthMsg(name, value.requiredLength);
      case 'min':
        return this.getMinMsg(name, value.min);
    }
  }

  private getRequiredMsg(name: string): string {
    return name + ' is required';
  }

  private getMinlengthMsg(name: string, requiredLength: string): string {
    return `${name} must have at least ${requiredLength} charaters`;
  }

  private getMaxlengthMsg(name: string, requiredLength: string): string {
    return `${name} can be no longer than ${requiredLength} charaters`;
  }

  private getMinMsg(name: string, min: number): string {
    return `${name} must be more then ${min}`;
  }
}
