create schema ProyectoDefensaAraujo;
use ProyectoDefensaAraujo;

CREATE TABLE menu(
    id bigint primary key auto_increment,
    categoria varchar(255) unique not null,
    edad  TINYINT(1) NOT NULL
);

CREATE TABLE producto(
    id bigint primary key auto_increment,
    nombre varchar(255) not null unique,
    precio decimal(10,2) not null,
	idMenuCat bigint not null,
    edadCat TINYINT(1) NOT NULL,
    foreign key (idMenuCat) references menu(id) on update cascade on delete cascade
);

create table bebidas(
	id bigint primary key auto_increment,
    bebida varchar(255) not null unique,
    precio decimal(10,2) not null,
	edadBeb TINYINT(1) NOT NULL,
	idMenuBeb bigint not null,
    foreign key (idMenuBeb) references menu(id) on update cascade on delete cascade
);

create table combos(
	id int primary key auto_increment,
    combo varchar(255) not null unique,
    precio decimal(10,2),
	edadCombo TINYINT(1) NOT NULL,
	idComboCat bigint not null,
    foreign key(idComboCat) references menu(id) on update cascade on delete cascade
);

alter table combos add id_producto bigint not null;
alter table combos add id_bebida bigint not null;
alter table combos add foreign key (id_producto) references producto(id);
alter table combos add foreign key(id_bebida) references bebidas(id);


create table usuario(
	id bigint primary key auto_increment,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
	usuario varchar(255) not null unique,
    password varchar(90) not null,
	created_at timestamp(0) not null,
    updated_at timestamp(0) not null
);

alter table usuario add DNI varchar(255) not null unique;



