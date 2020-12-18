package com.store.store.controllers;

import com.store.store.models.Product;
import com.store.store.repos.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    @GetMapping
    public List<Product> list(){
        return productRepository.findAll();

    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Product product){
        productRepository.save(product);
    }

    @GetMapping("/{id}")
    public Product get(@PathVariable("id") long id){
        return productRepository.getOne(id);
    }

}
