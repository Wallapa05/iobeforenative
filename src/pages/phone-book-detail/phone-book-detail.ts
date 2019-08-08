import { SMS } from '@ionic-native/sms/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {

  contact = {name:'' , telephone: '' , imageUrl: ''};

  constructor(public navCtrl: NavController, public navP: NavParams,private mysms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);

  }
call(){
 alert("call");
 window.open('tel:'+this.contact.telephone);
}
sms(){
  alert("sms");
  this.mysms.send('this.contact.telephoneC', 'Hello world!');
}
}//end class
