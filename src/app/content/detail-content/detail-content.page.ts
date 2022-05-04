import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.page.html',
  styleUrls: ['./detail-content.page.scss'],
})
export class DetailContentPage implements OnInit {
  moduleList: any[]
  selection: string
  constructor(private navParams: NavParams, private alertCtrl: AlertController, private modalController: ModalController) { }

  ngOnInit() {
    this.selection = this.navParams.get('selection')
    this.moduleList = this.navParams.get('moduleList')
    console.log(this.moduleList[0].title)
  }
  closeModal(){
    this.modalController.dismiss()
  }

  async closeModalAlert() {
    let alert = await this.alertCtrl.create({
      header: `Close`,
      message: `Are you sure you want to exit your modules?`,
      buttons: [{
        text: 'Yes',
        cssClass: 'primary',
        handler: () => {
          this.closeModal();
        } 
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button'
          }],
    });
    alert.present();
  }

}
