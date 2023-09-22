import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swiper from 'swiper';


// ...



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopkart';
  selectedCategory: string | null = null; 
  myForm: FormGroup;

  
  constructor(private fb: FormBuilder,private HttpClient:HttpClient,private swiperInstance: Swiper,private elementRef: ElementRef   ){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
   
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log("yes");
    }
    console.log("no");
  }

  




  ngOnInit(): void {
      this.callProducts('electronics');
      this.selectedCategory='electronics';
     this.getcategorylist();       
  }

  navbar = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    {
      name: 'OUR PRODUCTS',
      id: 'product',
      child: [
        { name: 'PRODUCT 1', id: 'p1' },
        { name: 'PRODUCT 2', id: 'p2' },
        { name: 'PRODUCT 3', id: 'p3' },
        { name: 'PRODUCT 4', id: 'p4' },
      ],
    },
    { name: 'CONTACT US', id: 'contact' },
  ];

  
products:any[]=[];
callProducts(cat:any) {
  this.HttpClient.get('https://fakestoreapi.com/products').subscribe((result: any) => {
   
    this.products=[];
    for (let i = 0; i < result.length; i++) {
      const newProduct: product = {
        image: result[i].image,
        category: result[i].category,
        description: result[i].description,
        id: result[i].id,
        price: result[i].price,
        title: result[i].title,
      };

      if(newProduct.category==cat){
      this.products.push(newProduct);
      console.log(this.products);
      } // Push the new product into the products array
    }
    // Now, products array contains the product objects
  });


  
}

onScroll(){
  console.log("scroll");
}

ngAfterViewInit() {
  
    
  this.swiperInstance = new Swiper('swiper-container', {
    // Swiper options go here
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
    // Additional options...
  });



  
}

scrollLeft() {
  if (this.swiperInstance) {
    this.swiperInstance.slideNext();
  } else {
    console.error("Swiper instance is not initialized.");
  }
}

scrollRight() {
  console.log('Swiper instance:', this.swiperInstance);
  this.swiperInstance.slideNext();
}
category:string[]=[];

getcategorylist(){
  this.HttpClient.get('https://fakestoreapi.com/products/categories').subscribe((result: any) => {
    console.log(result);

    for(let i=0;i<result.length;i++){
      this.category.push(result[i]);
    }
    
});



}

handleCategoryClick(category: string) {
  // Handle the click event here, e.g., navigate to a different page, filter content, etc.
  console.log(`Category "${category}" clicked`);
  this.selectedCategory=category;
  this.callProducts(category);
}

}

interface product{
  image:string;
  category:string;
  description:string;
  id:number;
  price:number;
  title:string;
}
