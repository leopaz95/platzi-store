import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { BrandsController } from './controllers/brands.controller';
import { OrderController } from './modules/order/controller/order.controller';
import { BrandService } from './modules/brand/service/brand.service';
import { BrandModule } from './modules/brand/module/brand.module';
import { BrandController } from './modules/brand/controller/brand.controller';
import { ProductService } from './modules/product/service/product.service';
import { ProductModule } from './modules/product/module/product.module';
import { ProductController } from './modules/product/controller/product.controller';
import { CategoryService } from './modules/category/service/category.service';
import { CategoryModule } from './modules/category/module/category.module';
import { CategoryController } from './modules/category/controller/category.controller';
import { CustomerService } from './modules/customer/service/customer.service';
import { CustomerModule } from './modules/customer/module/customer.module';
import { CustomerController } from './modules/customer/controller/customer.controller';
import { UserService } from './modules/user/service/user.service';
import { UserModule } from './modules/user/module/user.module';
import { UserController } from './modules/user/controller/user.controller';
import { OrderService } from './modules/order/service/order.service';
import { OrderModule } from './modules/order/module/order.module';
import { OrderModule } from './modules/order/module/order.module';
import { OrderController } from './modules/order/controller/order.controller';

@Module({
  imports: [OrderModule, UserModule, CustomerModule, CategoryModule, ProductModule, BrandModule],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, UsersController, BrandsController, OrderController, UserController, CustomerController, CategoryController, ProductController, BrandController],
  providers: [AppService, OrderService, UserService, CustomerService, CategoryService, ProductService, BrandService],
})
export class AppModule {}
