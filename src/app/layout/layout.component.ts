// Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
//
// This program and the accompanying materials are made available
// under the terms described in the LICENSE file which accompanies
// this distribution. If the LICENSE file was not attached to this
// distribution or for further clarifications, please contact
// legal@nseit.com.
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userType = '';
  userName='';


  constructor(private router: Router) {
  }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(user);
    let userName_ = sessionStorage.getItem('userName');
    // sessionStorage.setItem('userType', userType);
    let userType_ = sessionStorage.getItem('userType');
    
    console.log('layout :: user >>', user, userType_ );
    console.log('layout :: userNAme >>', user, userName_);

    if ( userType_ || userName_) {
      this.userType = userType_; 
      this.userName = userName_;

    }
    else {
      this.userType = 'Profile'; 
      this.userName =  sessionStorage.getItem('userName');   
    }
    console.log('layout :: userType >>', this.userType);
  }

  logout() {
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
