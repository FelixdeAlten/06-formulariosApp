import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

//temporal
nombreApellidoPattern: string ='([a-zñA-ZÑ]+) ([a-zñA-ZÑ]+)';

miFormulario:FormGroup=this.fb.group({
  nombre:['',[Validators.required,Validators.pattern(this.nombreApellidoPattern)]]
});

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

}