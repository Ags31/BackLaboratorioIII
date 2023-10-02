/* Insert Back Defensa*/

insert into menu(categoria, edad) values ('Pizzas', 0); 
insert into menu(categoria, edad) values ('Sanguches', 0); 
insert into menu(categoria, edad) values ('Cervezas', 1); 
insert into menu(categoria, edad) values ('Gin', 1); 
insert into menu(categoria, edad) values ('Vinos', 1); 
insert into menu(categoria, edad) values ('Bebidas', 0); 
insert into menu(categoria, edad) values ('Infusiones', 0); 
insert into menu(categoria, edad) values ('Familiar', 0); 
select * from menu;

insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza Especial',1000,1,0);
insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza Mexicana',1500,1,0);
insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza Anchoas',1250,1,0);
insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza Hawaiana',950,1,0);
insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza Napolitana',1300,1,0);
insert into producto(nombre,precio,idMenuCat,edadCat) values ('Pizza con Champiñon',1700,1,0);
select * from producto;

insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Coca-Cola',300,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Sprite',300,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Fanta',300,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Mirinda Manzana',300,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Agua con gas',250,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Agua sin gas',250,0,6);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Corona 1L',600,1,3);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Salta Negra 1L',600,1,3);
insert into bebidas(bebida,precio,edadBeb,idMenuBeb) values ('Coca-Cola 2,5L',600,0,6);
select * from bebidas;

insert into combos(idComboCat,id_producto,id_bebida) values (8,1,10);
insert into combos(idComboCat,id_producto,id_bebida) values (10,2,8);
select * from combos;

update bebidas set precio = 650 where id = 8; 
update bebidas set edadBeb = 1 where id = 8; 

update combos set id_producto = 3 where id = 1;
