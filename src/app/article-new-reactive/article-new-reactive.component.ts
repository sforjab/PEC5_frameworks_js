import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

function nameArticleValidator(control: AbstractControl): ValidationErrors | null {
  const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  const enteredName = control.value;
  if (forbiddenNames.includes(enteredName)) {
    return { forbiddenNameError: { value: enteredName } };
  }
  return null;
}

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  public articleForm!: FormGroup;
  public submitted = false; // Variable para controlar si se ha enviado el formulario
  public submittedValues: any = null; // Almacenamos los valores enviados
    
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.articleForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(0.1)]),
      imageUrl: new FormControl('', [Validators.required, Validators.pattern('^(https?:\\/\\/)(www\\.)?[A-Za-z0-9]+(\\.[A-Za-z]{2,3})\\/[^\s]*\\.(?:png|jpe?g|gif)$')]),
      isOnSale: new FormControl(false)
    });
  }

  get name() { return this.articleForm.get('name'); }
  get price() { return this.articleForm.get('price'); }
  get imageUrl() { return this.articleForm.get('imageUrl'); }
  get isOnSale() { return this.articleForm.get('isOnSale'); }

/*   nameArticleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
      const enteredName = control.value;
      if (forbiddenNames.includes(enteredName)) {
        return { forbiddenNameError: { value: enteredName } };
      }
      return null;
    };
  } */
  
  onSubmit(): void {
    if (this.articleForm.valid) {
      this.submittedValues = { ...this.articleForm.value }; // Almacenar los valores enviados en submittedValues
      this.submitted = true; // Establecer submitted a true después de enviar el formulario
      console.log('Article Form Value', this.articleForm.value);
    } else {
      this.articleForm.markAllAsTouched();
    }
    
  }
}
