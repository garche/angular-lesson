import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { USER_NAME_TOKEN } from "../../storage-tokens/storage-tokens";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @ViewChild('input')
  public input!: ElementRef<HTMLInputElement>

  private _value = ''

  constructor(
    private _router: Router
  ) {
  }

  public ngOnInit(): void {
    localStorage.removeItem(USER_NAME_TOKEN)
  }

  public onInput(): void {
    this._value = this.input.nativeElement.value
  }

  public login(): void {
    localStorage.setItem(USER_NAME_TOKEN, this._value);
    this._router.navigate(['main'])
  }
}
