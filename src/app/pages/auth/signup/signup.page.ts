import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from '../signin/signin.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registrationForm!: FormGroup;
  component = SigninPage;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      terminosCondiciones: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Lógica para enviar los datos del formulario
      console.log(this.registrationForm.value);
    }
  }

  abrirPagina(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.router.navigate(['/tabs']);
    }, 1000);
  }
}
