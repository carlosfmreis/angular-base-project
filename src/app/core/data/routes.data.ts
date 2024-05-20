export class AppRoutes {
  static readonly homePage: string = '/';
  static readonly productsPage: string = '/products';
  static readonly productDetailsPage: (id: number) => string = (id: number) =>
    `/products/${id}`;
}
