export default class Producto {
  id;
  nombre;
  tipo;

  constructor(id = 0, nombre = "", tipo = "") {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
  }

  mostrarEnLista() {
    return `
      <tr class="item-lista-producto" id="${this.id}">
        <td>${this.id}</td>
        <td>${this.nombre}</td>
        <td>${this.tipo}</td>
      </tr>
    `;
  }

  mostrarDetalle() {
    return `
    <table>
      <tr><td><b>ID</b></td><td>${this.id}</td></tr>
      <tr><td><b>Nombre</b></td><td>${this.nombre}</td></tr>
        <tr><td><b>Tipo</b></td><td>${this.tipo}</td></tr>
        </table>
    `;
  }
}
