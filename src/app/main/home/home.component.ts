import { CakeComponent } from './../cake/cake.component';
import { ProductServicesService } from './../../product-services.service';
import { LazyLoadScriptService } from './../../lazy-load-script.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() transactionTransmit: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private lazyLoadScript: LazyLoadScriptService,
    private proService: ProductServicesService
  ) {}
  displayItem: any = {
    // id: 0,
    // name: 'itemDefault',
    // image: 'assets/img/Gearvn_Cyberpunk anime_ (11).jpg',
    // price: '10$',
    // discountPrice: '5$',
    // des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum voluptatem atque!Doloribus similique commodi accusantium vitae optio officia quaerat? Quaerat sed asperiores deserunt sunt velit,',
  };
  offers: any[] = [
    // {
    //   id: 1,
    //   name: 'Banana Nutella Cake',
    //   image: 'assets/img/Kỷ niệm cấp 3_ (10).jpg',
    //   price: '15$',
    //   discountPrice: '10$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum voluptatem atque!Doloribus similique commodi accusantium vitae optio officia quaerat? Quaerat sed asperiores deserunt sunt velit,',
    // },
    // {
    //   id: 2,
    //   name: 'ハルジオン',
    //   image: 'assets/img/Kỷ niệm cấp 3_ (10).jpg',
    //   price: '1300$',
    //   discountPrice: '200$',
    //   des: 'bisbuicsdv sdhjfvbasdbfvbadvbjiadbvjdabivbadvjkadbviu',
    // },
    // {
    //   id: 3,
    //   name: 'Shinra Tensei',
    //   image: 'assets/img/Kỷ niệm cấp 3_ (10).jpg',
    //   price: '2000$',
    //   discountPrice: '1600$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    // },
    // {
    //   id: 4,
    //   name: 'Bansho Tenin',
    //   image: 'assets/img/Gearvn_Cyberpunk anime_ (11).jpg',
    //   price: '3000$',
    //   discountPrice: '2780$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisiciia quaerat? Quaerat sed asperiores deserunt sunt veli,',
    // },
    // {
    //   id: 5,
    //   name: 'Kotoamatsukami',
    //   image: 'assets/img/Kỷ niệm cấp 3_ (10).jpg',
    //   price: '100$',
    //   discountPrice: '58$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum voluptatem atqu',
    // },
    // {
    //   id: 6,
    //   name: 'Ara Ara',
    //   image: 'assets/img/Gearvn_Cyberpunk anime_ (11).jpg',
    //   price: '1000$',
    //   discountPrice: '577$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum voluptatem atque!Do,',
    // },
    // {
    //   id: 7,
    //   name: 'ZA WARUDO !',
    //   image: 'assets/img/Gearvn_Cyberpunk anime_ (11).jpg',
    //   price: '3212$',
    //   discountPrice: '342$',
    //   des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum voluptatem atque!Doloribus similique commodi accusantium vitae optio off',
    // },
  ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }

  showItems(idcheck: number): void {
    for (let item of this.offers) {
      if (item.id === idcheck) {
        this.displayItem = item;
        break;
      }
    }
  }
  showRate(item: any) {
    let starRate: any[] = new Array(item.rate);
    return starRate;
  }
  data: any[] = [];
  onActive(componentRef: any) {
    if (componentRef instanceof CakeComponent) {
      componentRef.clickBuy.subscribe(() => {
        this.data = localStorage.getItem('carts')
          ? JSON.parse(localStorage.getItem('carts') || '{}')
          : [];
        this.transactionTransmit.emit();
      });
    }
  }
  ngOnInit(): void {
    // this.setCake();
    // console.log(this.products);
    // this.loadPagination(1);
    this.proService
      .getFromApi('http://localhost:3000/products')
      .subscribe((param) => {
        this.offers = param.slice(1, 5);
        this.displayItem = this.offers[0];
      });
    this.lazyLoadScript.loadScript('assets/js/bakery.js').subscribe((x) => {
      console.log('Jquery is loaded!');
    });
  }
}
