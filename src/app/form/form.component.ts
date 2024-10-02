import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importação necessária para o ngModel
import { CommonModule } from '@angular/common'; // Importação necessária para *ngIf

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // Inclua FormsModule e CommonModule
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  currentStep = 1;

  formData = {
    name: '',
    email: '',
    phone: ''
  };

 
  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;

      console.log('Dados atuais do formulário:', this.formData); // Verifica os dados no console
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    console.log('Dados do formulário para envio:', this.formData); // Verifica os dados no envio final
    alert('Formulário enviado com sucesso!');
  }
}
