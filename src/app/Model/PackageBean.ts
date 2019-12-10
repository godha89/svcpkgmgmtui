import {ProductBean} from './ProductBean'
export class PackageBean{
	id: string;
	name: string;
	description: string;
	price: number;
	products: ProductBean[];
}