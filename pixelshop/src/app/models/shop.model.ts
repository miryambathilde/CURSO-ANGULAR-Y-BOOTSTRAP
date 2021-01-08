export class Shop {
 
    shopItems: object; //aqui tenemos los shopItems que son los cursos que se pueden comprar//
    
    /* delcaramos los shopItems en el constructor, title, desc, picture and price*/
   constructor() {
    this.shopItems = [
      {
      title: 'Curso Wordpress',
      desc: 'Aprende Wordpress desde 0 con Miryam Bathilde',
      picture: 'wordpress.jpg',
      price: 164
      },
      {
      title: 'Curso Frontend',
      desc: 'Aprende desarrollo front end desde 0 con Miryam Bathilde',
      picture: 'frontend.jpg',
      price: 220
      },
      {
      title: 'Curso Fullstack',
      desc: 'Aprende desarrollo frontend y backend desde 0 con Miryam Bathilde',
      picture: 'fullstack.jpg',
      price: 420
      }
    ];
   }
}