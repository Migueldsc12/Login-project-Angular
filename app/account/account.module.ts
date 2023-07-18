import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

//materials

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatSlideToggleModule
    ],
    declarations: [
        LayoutComponent,
        RegisterComponent,
        LoginComponent
    ]
})
export class AccountModule { }