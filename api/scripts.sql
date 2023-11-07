
create database musclemonsterdb;
use musclemonsterdb;


create table tb_adm_login(
id_adm		int primary key auto_increment,
nm_adm		varchar(200),
ds_senha	varchar(200)
);

insert into tb_adm_login(nm_adm,ds_senha)
			values('Ruan Gomes','admin@123');
            
insert into tb_adm_login(nm_adm,ds_senha)
			values('Michel Vitor','admin@123');
            
insert into tb_adm_login(nm_adm,ds_senha)
			values('Vinicius Silva','admin@123');            

create table tb_produto (
	id_produto int primary key auto_increment,
	nm_produto varchar(200),
	vl_valor decimal,
	qtd_estoque int,
	ds_categoria varchar(200),
	ds_descricao varchar(200),
    url_img		varchar(200)
);

create table tb_endereco (
	id_endereco int primary key auto_increment,
	ds_rua varchar(200),
	ds_bairro varchar(200),
    ds_cidade varchar(100),
	nr_cep int,
	nr_numero int,
	ds_complemento varchar(200),
    nm_contato	varchar(200),
    tel_contato	varchar(200),
    ds_referencia	varchar(200)
);


create table tb_cliente (
	id_cliente int primary key auto_increment,
    url_img		varchar(300),
	nm_cliente varchar(200),
	ds_email varchar(200),
	ds_telefone varchar(200),
    dt_nascimento	date,
	ds_senha varchar(200),
	id_endereco int,
    foreign key (id_endereco) references tb_endereco (id_endereco)
);



create table tb_pedido(
id_pedido int primary key auto_increment,
ds_nota_fiscal varchar(100),
qtd_parcelas int,
dt_pedido datetime,
ds_situacao varchar(100),
id_cliente int,
id_endereço int,
foreign key (id_cliente) references tb_cliente (id_cliente),
foreign key (id_endereço) references tb_endereco (id_endereco)
);

create table tb_item_pedido(
id_item_pedido int primary key auto_increment,
qtd_item int,
id_pedido int,
id_produto int,
foreign key(id_pedido) references tb_pedido (id_pedido),
foreign key (id_produto) references tb_produto (id_produto)
);

create table tb_carrinho (
	id_carrinho int primary key auto_increment,
	id_cliente int,
	id_produto int,
    foreign key (id_cliente) references tb_cliente (id_cliente),
    foreign key (id_produto) references tb_produto (id_produto)
);



