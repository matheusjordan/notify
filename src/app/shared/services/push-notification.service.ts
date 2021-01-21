import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { firebaseConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class PushNotificationService {

  constructor(
    private firebase: FirebaseX
  ) { }

  startNotificationsListenning(): void {
    this.firebase.setConfigSettings(firebaseConfig)
    alert('Escutando Notificações')
    this.firebase.onMessageReceived()
      .subscribe(
        (res) => {
          alert('Notificação Recebida');
          alert(JSON.stringify(res));
        },
        (err) => {
          alert('Falha ao Receber Notificação');
          alert(JSON.stringify(err));
        });
  }
}
