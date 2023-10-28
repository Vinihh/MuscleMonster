create database musclemonsterdb;
use musclemonsterdb;


create table tb_produto (
	id_produto 			int primary key auto_increment,
	nm_produto 			varchar(200),
	vl_valor 			decimal,
	qtd_estoque 		int,
	ds_categoria 		varchar(200),
	ds_descricao 		varchar(200),
    id_imagem			int,
    foreign key (id_imagem) references tb_imagem (id_imagem)
);

select * from tb_produto;
drop table tb_produto;

create table tb_imagem (
	id_imagem			int primary key auto_increment,
    ds_url				varchar(200)
);

select * from tb_imagem;
drop table tb_imagem;

create table tb_cliente (
	id_cliente 			int primary key auto_increment,
	nm_cliente 			varchar(200),
	ds_email 			varchar(200),
	ds_telefone 		varchar(200),
	ds_senha 			varchar(200),
	id_endereco 		int,
    foreign key (id_endereco) references tb_endereco (id_endereco)
);
select * from tb_cliente;
drop table tb_cliente;

create table tb_endereco (
	id_endereco 		int primary key auto_increment,
	nm_nome_completo 	varchar(200),
	nr_telefone			varchar(200),
	ds_rua 				varchar(200),
	ds_bairro 			varchar(200),
    ds_cidade 			varchar(100),
	nr_cep 				int,
	nr_numero 			int,
	ds_complemento 		varchar(200)
);

select * from tb_endereco;
drop table tb_endereco;


create table tb_pedido(
id_pedido 				int primary key auto_increment,
ds_nota_fiscal 			varchar(100),
qtd_parcelas 			int,
dt_pedido 				datetime,
ds_situacao 			varchar(100),
id_cliente 				int,
id_endereço 			int,
foreign key (id_cliente) references tb_cliente (id_cliente),
foreign key (id_endereço) references tb_endereco (id_endereco)
);

select * from tb_pedido;
drop table tb_pedido;

create table tb_item_pedido(
id_item_pedido 			int primary key auto_increment,
qtd_item 				int,
id_pedido 				int,
id_produto 					int,
foreign key(id_pedido) references tb_pedido (id_pedido),
foreign key (id_produto) references tb_produto (id_produto)
);

select * from tb_item_pedido;
drop table tb_item_pedido;

create table tb_carrinho (
	id_carrinho 			int primary key auto_increment,
	id_cliente 				int,
	id_produto 				int,
    foreign key (id_cliente) references tb_cliente (id_cliente),
    foreign key (id_produto) references tb_produto (id_produto)
);

select * from tb_carrinho;
drop table tb_carrinho;


