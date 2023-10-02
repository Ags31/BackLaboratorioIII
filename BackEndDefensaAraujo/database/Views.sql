/* Creacion Vistas */

/* Muestra todos los alimentos */
create view ComidaMenu as
select m.categoria as Categoria, p.nombre as NombreComida ,p.precio as PrecioComida
from menu m
inner join producto p on p.idMenuCat = m.id;


/* Muestra todas las bebidas */
create view BebidasMenu as 
select m.categoria as Categoria, b.bebida as nombreBebida, b.precio as precioBebida
from menu m
inner join bebidas b on b.idMenuBeb = m.id;


/* Muestra todos los combos */
create view CombosMenu as 
select m.categoria as Categoria, c.combo as combos , c.precio as precioCombos
from menu m
inner join combos c on c.idComboCat = m.id;


/* Muestra los alimentos aptos para todo publico */
create view ComidaATP as
select m.categoria as Categoria, p.nombre as NombreComida ,p.precio as PrecioComida
from menu m
join producto p on p.idMenuCat = m.id
where m.edad = 0 or p.edadCat = 0;

/* Muestra las bebidas aptas para todo publico */
create view BebidasATP as 
select m.categoria as categoria, b.bebida as nombreBebida, b.precio as precioBebida
from menu m
join bebidas b on b.idMenuBeb = m.id
where m.edad = 0 or b.edadBeb = 0;

/* Muestra los combos aptos para todo publico */
create view CombosATP as 
select m.categoria as categoria, c.combo as combos , c.precio as precioCombos
from menu m
join combos c on c.idComboCat = m.id
where m.edad = 0;

/* Muestra los alimentos solo para mayores de edad */
create view BebidasMayores as
select m.categoria as Categoria, b.bebida as NombreBebida, b.precio as PrecioBebida
from menu m
join bebidas b on b.idMenuBeb = m.id
where m.edad = 1 or b.edadBeb = 1;

/* Muestra las bebidas solo para mayores */
create view CombosMayores as 
select m.categoria as Categoria, c.combo as NombreCombo , c.precio as PrecioCombo
from menu m
join combos c on c.idComboCat = m.id
where m.edad = 1;

/* Muestra los combos solo para mayores */
create view AlimentoMayores as 
select m.categoria as Categoria, p.nombre as NombreComida , p.precio as PrecioComida
from menu m
join producto p on p.idMenuCat = m.id
where m.edad = 1 or p.edadCat = 1;

create view VistasUsuarios as
select id as IdUsuario, usuario as Usuario, CONCAT(apellido, ' ', nombre) as NombreCompleto, dni as Documento
from usuario;
