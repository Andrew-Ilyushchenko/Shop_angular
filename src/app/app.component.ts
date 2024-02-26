import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from '../../services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  products$: Observable<IProduct[]>
  loading = true

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = false
    this.products$ = this.productsService.getAll().pipe(
      tap( () => this.loading = false)
    )
  }
}
