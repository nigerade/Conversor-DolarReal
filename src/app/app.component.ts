import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  quantiaDolar: number;
  quantiaReal: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 10000,
      color: 'sucess',
    });
    toast.present();
  }

  async converterDollares() {
    const alert = await this.alertController.create({
      header: 'Digite a Quantia que Deseja Doar!!',
      inputs: [
        {
          name: 'inputNome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },

        {
          name: 'inputQuantia',
          type: 'number',
          placeholder: 'Quantia a ser doada em Dólares',
          max: 500,
          min: 0,
        },
      ],

      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.nome = valor['inputNome'];
            this.quantiaDolar = valor['inputQuantia'];
            this.quantiaReal = this.quantiaDolar * 5.22;
            this.exibirToast(
              `Nome: ${this.nome} | Quantia Doada em Dólares: ${this.quantiaDolar} | Quantia Doada em Reais: ${this.quantiaReal}`
            );
          },
        },
      ],
    });

    await alert.present();
  }
}
