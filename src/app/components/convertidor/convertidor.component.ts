import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'ARG'];
  constructor() {}

  ngOnInit(): void {}

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.92;
        }
        if (this.quiero === 'ARG') {
          this.total = this.cantidad * 185;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'ARG') {
          this.total = this.cantidad * 201.9;
        }
        break;
      case 'ARG':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.0054;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.005;
        }
        if (this.quiero === 'ARG') {
          this.total = this.cantidad;
        }
        break;
    }
  }
}
