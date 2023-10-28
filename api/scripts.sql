use musclemonsterdb;

create table tb_produto (
	id_produto          int primary key auto_increment,
    url_img				varchar(200),
	nm_produto          varchar(200),
	ds_categoria        varchar(200),
	vl_preco	        decimal(5,2),
	qtd_estoque         int
);

insert into tb_produto (url_img,nm_produto, ds_categoria, vl_valor, qtd_estoque, id_produto) values (?, ?, ?, ?, ?);

select * from tb_produto;

select * from tb_produto
where id_produto = ?;

select 
        url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_preco        as preco,
        qtd_estoque     as estoque
        from tb_produto
        where id_produto = 1
        ;

drop table tb_produto;

create table tb_cliente (
	id_cliente          int primary key auto_increment,
	nm_cliente          varchar(200),
	ds_email            varchar(200),
	ds_telefone         varchar(200),
	ds_senha            varchar(200)
);

select * from tb_cadastro_cliente;


drop table tb_cadastro_cliente;

insert into tb_cadastro_cliente (nm_cliente, ds_email, ds_telefone, ds_senha) values (?, ?, ?, ?, ?);

SELECT ds_email  as email, ds_senha AS senha
      FROM tb_cadastro_cliente;

 SELECT ds_email, ds_senha FROM tb_cadastro_cliente WHERE ds_email = ? and ds_senha = ?;