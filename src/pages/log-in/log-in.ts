import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import EmployeeArray from '../../app/array.1';

import RegisterArray from '../../app/array';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {


  loginArray=RegisterArray;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  
logIn(username,password){


  for (let index = 0; index < this.loginArray.length; index++) {

    if(this.loginArray[index].Username  == username && this.loginArray[index].Password){


      console.log(this.loginArray[0].Username) ;
      console.log(username);
      this.navCtrl.push(HomePage);

    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Confrimation!',
        subTitle: 'Username or Password is wrong',
        buttons: ['OK']
      });
      alert.present();
    }
    }
  
  }




  
}

