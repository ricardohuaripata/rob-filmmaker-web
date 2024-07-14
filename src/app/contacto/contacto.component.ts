import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
//import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
  providers: [MessageService]
})
export class ContactoComponent {
  form: FormGroup;
  submited: boolean = false;
  loading: boolean = false;
  successSubmit: boolean = false;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      message: ['', [Validators.required]],
    });
  }

  async onSubmit(): Promise<void> {
    this.submited = true;
    this.successSubmit = false;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    /*
    emailjs.init('T9GCaCcJtOv0DqMFT');

    let response = await emailjs.send('service_uzu2m04', 'template_ss4qu9k', {
      to_name: 'Rafa',
      from_name: this.form.get('name')!.value,
      from_email: this.form.get('email')!.value,
      from_phone_number: this.form.get('phoneNumber')!.value,
      message: this.form.get('message')!.value,
    });
    */

    this.form.reset();
    this.submited = false;
    this.loading = false;

    //if (response.status == 200) {
      //this.messageService.add({ severity: 'success', summary: 'Enviado', detail: 'El mensaje se ha enviado correctamente.', life: 3000 });
      this.successSubmit = true;
    //}

  }
}
