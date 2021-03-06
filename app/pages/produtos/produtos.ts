import {Component, ViewChild, ElementRef} from '@angular/core';
import {Loading, Modal, ViewController, Alert, Popover, Content, NavParams, NavController, Platform} from 'ionic-angular';
import {Page} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/produtos/produtos.html'
})

@Page({
    templateUrl: 'build/pages/produtos/produtos.html'
})

export class ProdutosPage {
    items;

    constructor() {
      this.initializeItems();
    }

    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
        'Buenos Aires',
        'Cairo',
        'Dhaka',
        'Edinburgh',
        'Geneva',
        'Genoa',
        'Glasglow',
        'Hanoi',
        'Hong Kong',
        'Islamabad',
        'Istanbul',
        'Jakarta',
        'Kiel',
        'Kyoto',
        'Le Havre',
        'Lebanon',
        'Lhasa',
        'Lima',
        'London',
        'Los Angeles',
        'Madrid',
        'Manila',
        'New York',
        'Olympia',
        'Oslo',
        'Panama City',
        'Peking',
        'Philadelphia',
        'San Francisco',
        'Seoul',
        'Taipeh',
        'Tel Aviv',
        'Tokio',
        'Uelzen',
        'Washington'
      ];
    }

    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the ev target
      var val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
}
