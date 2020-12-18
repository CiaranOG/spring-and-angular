import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'option1',
    'option2',
    'option3'
  ];
  productform: FormGroup;
  validMessage: string="";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productform = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)


    }) 

  }

  submitRegistration() {
    if (this.productform.valid) {
      this.validMessage =  "Your product registration has been submitted. Thank you !";
      this.productService.createProductRegistration(this.productform.value).subscribe(
        data => {
          this.productform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting!";
    }


  }

}
