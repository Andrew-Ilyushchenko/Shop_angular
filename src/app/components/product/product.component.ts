import { Component, Input } from "@angular/core";
import { IProduct } from "../../models/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class Product {
    @Input() product: IProduct

    details = false
}