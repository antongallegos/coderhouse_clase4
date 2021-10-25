const fs = require("fs");
const { resolve } = require("path");

class Contenedor {
  //productos = Array();

  constructor(productos) {
    this.productos = productos;
  }

  addProducto(title, price, th) {
    let producto = new Object();
    producto["title"] = title;
    producto["price"] = price;
    producto["thumbmail"] = th;
    producto["id"] = this.productos.length + 1;
    this.productos.push(producto);
  }

  getById(numero) {
    return this.productos[numero - 1];
  }

  getAll() {
    return this.productos;
  }

  deleteById(numero) {
    this.productos.pop[numero - 1];
    return this.productos;
  }

  deleteAll() {
    this.productos = [];
  }

  //Función para crear ruta o archivo
  crearArchivo = async () => {
    try {
      await fs.promises.appendFile("productos.txt", "");
      console.log("archivo creado con exito!");
    } catch (error) {
      console.log("Hubo un error al crear archivo!!");
    }
  };

  leerArchivo() {
    try {
      const data = fs.readFileSync("./productos.txt");
      this.productos = JSON.parse(data);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
  }

  /* 
  leerArchivo = async () => {
    await fs.promises
      .readFile("./coderhouse_clase2/productos.txt")
      .then((contenido) => {
        //resolve(console.log(contenido));
        console.log(JSON.parse(contenido));
      })
      .catch((err) => {
        console.log("Hubo un error al leer archivo!!", err);
      });
  }; */

  /* 
  //CONSIDERAR ESTE CODIGO COMO ASYNC
  leerArchivo = async () => {
    try {
      const contenido = await fs.promises.readFile(
        "./coderhouse_clase2/productos.txt"
      );
      this.productos = await JSON.parse(contenido);
      console.log(this.productos);
    } catch (error) {
      console.log("Hubo un error al leer el archivo!!!");
    }
  }; */

  /*   leerArchivo = async () => {
    try {
      let contenido = await fs.promises.readFile(
        "./coderhouse_clase2/productos.txt"
      );
      this.productos = contenido;
      return this.productos;
    } catch (error) {
      console.log("Hubo un error al leer archivo!!", error);
    }
  }; */

  saveProd = async (productos) => {
    const arrProductos = this.getAll();
    try {
      await fs.promises.writeFile(
        "./productos.txt",
        JSON.stringify(productos, null, 2)
      );
    } catch (error) {
      console.log("ERROR AL AGREGAR!!");
    }
  };
}

p = new Contenedor();

/* p.addProducto(
  "Escuadra",
  123.45,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
);
p.addProducto(
  "Calculadora",
  234.56,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
);
p.addProducto(
  "Globo Terráqueo",
  345.67,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
); */

//let productos = p.getAll();
//p.crearArchivo();
//p.saveProd(productos);

module.exports = Contenedor;
