import { Component } from '@angular/core';
import{AlertController} from '@ionic/angular'
import{ActionSheetController} from '@ionic/angular'
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private alertController: AlertController, private actionSheet: ActionSheetController){
  }
  async presentAlert(){
    const alert = await this.alertController.create({ 
      header: 'Alert',
      subHeader: 'Sub Alert',
      message: 'This is alert message',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler:() => {
          console.log('You click me');
        }
    },
      {
        text: 'Okay',
        cssClass: 'secundary',
        handler:() => {
          console.log('second hanler');
        }
      },
      {
          text: 'Open Action Sheet',
          cssClass: 'primary',
          handler:async() => {
            const action = await this.actionSheet.create({
              header: 'text action',
              buttons: [
                {
                  text: 'Test',
                  role: 'Cancel',
                  handler: () => {
                    console.log('hey hello');
                  }
                }
              ]
            });
            await action.present();
          }
        }
      ]
  });
    await alert.present();
  }
}
