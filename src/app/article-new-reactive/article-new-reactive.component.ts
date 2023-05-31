import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

// Validador personalizado para el campo 'name'
function nameArticleValidator(control: AbstractControl): ValidationErrors | null {
  // Si el nombre ingresado se encuentra en la lista de nombres prohibidos, se devuelve un objeto con la clave 'forbiddenNameError' y el valor del nombre ingresado.
  const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  const enteredName = control.value;
  if (forbiddenNames.includes(enteredName)) {
    return { forbiddenNameError: { value: enteredName } };
  }
  // Si el nombre ingresado no está en la lista de nombres prohibidos, se devuelve 'null', indicando que la validación ha pasado.
  return null;
}

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  // Añadimos el modificador '!' para indicar que la propiedad será inicializada en algún momento antes de su uso
  public articleForm!: FormGroup;
  // Variable para controlar si se ha enviado el formulario
  public submitted = false;
  // Almacenamos los valores enviados
  public submittedValues: any = null;
    
  constructor(private fb: FormBuilder) {
    // Creamos el formulario reactivo para asignarlo a la propiedad 'articleForm'
    this.createForm(); 
    // Se obtiene la referencia del control 'name' y se le asignan validadores
    this.articleForm.get('name')?.setValidators([Validators.required, nameArticleValidator]); 
    // Se actualiza la validez del control 'name' después de asignar los validadores
    this.articleForm.get('name')?.updateValueAndValidity();
  }

  // Creamos el formulario y sus controles con sus respectivos valores por defecto y validaciones
  createForm(): void {
    this.articleForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(0.1)]),
      imageUrl: new FormControl('', [Validators.required, Validators.pattern('^(https?:\\/\\/)(www\\.)?[A-Za-z0-9]+(\\.[A-Za-z]{2,3})\\/[^\s]*\\.(?:png|jpe?g|gif)$')]),
      isOnSale: new FormControl(false)
    });
  }

   // Obtenemos los 'FormControl' de los distintos campos
  get name() { return this.articleForm.get('name'); }
  get price() { return this.articleForm.get('price'); }
  get imageUrl() { return this.articleForm.get('imageUrl'); }
  get isOnSale() { return this.articleForm.get('isOnSale'); }
  
  // Manejamos el evento de envío del formulario
  onSubmit(): void {
    if (this.articleForm.valid) {
      // Almacenamos los valores enviados en 'submittedValues'
      this.submittedValues = { ...this.articleForm.value }; 
      // Se establece 'submitted' a true después de enviar el formulario
      this.submitted = true; 
      console.log('Creando artículo', this.articleForm.value);
    } else {
      // Aseguramos que se muestren los mensajes de error marcando los campos como 'touched'
      this.articleForm.markAllAsTouched(); 
    }  
  }
}
