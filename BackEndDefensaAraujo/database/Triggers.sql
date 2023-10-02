/* Creacion triggers */

DELIMITER $
CREATE TRIGGER CrearCombo
BEFORE INSERT ON combos
FOR EACH ROW
BEGIN
    DECLARE precioProducto DECIMAL(10, 2);
    DECLARE precioBebida DECIMAL(10, 2);
    
	DECLARE edadProducto tinyint(1);
    DECLARE edadBebida tinyint(1);
    DECLARE edadCategoria tinyint(1);
    
	DECLARE nombreProducto VARCHAR(255);
    DECLARE nombreBebida VARCHAR(255);
    
    SELECT precio INTO precioProducto FROM producto WHERE id = NEW.id_producto;
    SELECT precio INTO precioBebida FROM bebidas WHERE id = NEW.id_bebida;
        
    SELECT edadCat INTO edadProducto FROM producto WHERE id = NEW.id_producto;
    SELECT edadBeb INTO edadBebida FROM bebidas WHERE id = NEW.id_bebida;
    Select edad into edadCategoria from menu where id = new.idComboCat;
    
    SELECT nombre INTO nombreProducto FROM producto WHERE id = NEW.id_producto;
    SELECT bebida INTO nombreBebida FROM bebidas WHERE id = NEW.id_bebida;

	SET new.precio = (precioBebida + precioProducto) * 0.9, 
    new.edadCombo = if(edadProducto = 1 or edadBebida = 1 or edadCategoria = 1, 1 , 0),
    new.combo = CONCAT(nombreProducto, ' con ', nombreBebida);
END;
$
DELIMITER ;

DELIMITER //
CREATE TRIGGER ActualizarComboProducto
AFTER UPDATE ON producto
FOR EACH ROW
BEGIN
    UPDATE combos c
    SET c.precio = (SELECT (b.precio + p.precio) * 0.9 FROM producto p, bebidas b WHERE p.id = c.id_producto AND b.id = c.id_bebida),
        c.edadCombo = IF((SELECT p.edadCat FROM producto p WHERE p.id = c.id_producto) = 1 OR (SELECT b.edadBeb FROM bebidas b WHERE b.id = c.id_bebida) = 1, 1, 0)
    WHERE c.id_producto = NEW.id;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER ActualizarComboBebidas
AFTER UPDATE ON bebidas
FOR EACH ROW
BEGIN
    UPDATE combos c
    SET c.precio = (SELECT (b.precio + p.precio) * 0.9 FROM producto p, bebidas b WHERE p.id = c.id_producto AND b.id = c.id_bebida),
        c.edadCombo = IF((SELECT p.edadCat FROM producto p WHERE p.id = c.id_producto) = 1 OR (SELECT b.edadBeb FROM bebidas b WHERE b.id = c.id_bebida) = 1, 1, 0)
    WHERE c.id_bebida = NEW.id;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER ValidarComboActualizado
BEFORE UPDATE ON combos
FOR EACH ROW
BEGIN
    DECLARE precioProducto DECIMAL(10, 2);
    DECLARE precioBebida DECIMAL(10, 2);
    
    DECLARE edadProducto TINYINT(1);
    DECLARE edadBebida TINYINT(1);
    
	DECLARE nombreProducto VARCHAR(255);
    DECLARE nombreBebida VARCHAR(255);

    IF NEW.id_producto IS NOT NULL THEN
        SELECT precio INTO precioProducto FROM producto WHERE id = NEW.id_producto;
        SELECT edadCat INTO edadProducto FROM producto WHERE id = NEW.id_producto;
		SELECT nombre INTO nombreProducto FROM producto WHERE id = NEW.id_producto;
    END IF;
    
    IF NEW.id_bebida IS NOT NULL THEN
        SELECT precio INTO precioBebida FROM bebidas WHERE id = NEW.id_bebida;
        SELECT edadBeb INTO edadBebida FROM bebidas WHERE id = NEW.id_bebida;
		SELECT bebida INTO nombreBebida FROM bebidas WHERE id = NEW.id_bebida;
    END IF;

    SET new.precio = (precioBebida + precioProducto) * 0.9,
    new.edadCombo = IF(edadProducto = 1 OR edadBebida = 1, 1, 0),
	new.combo = CONCAT(nombreProducto, ' con ', nombreBebida);
END;
//
DELIMITER ;


