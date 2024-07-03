export default class Tarea {
  id;
  nombre;
  tipo;
  icono;

  constructor(id = 0, nombre = "", tipo = "", icono = "") {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.icono = icono;
  }

  mostrarEnLista() {
    return `
      <tr class="item-lista-tarea" id="${this.id}">
        <td>/* <img src=" */${this.icono}/* " alt="icon" width="10" height="10"> */</td>
        <td>${this.nombre}</td>
        <td>${this.tipo}</td>
      </tr>
    `;
  }

  mostrarEnListaPorTipo() {
    return `
      <tr class="item-lista-tarea" id="${this.tipo}">
        <td><img src="${this.icono}" alt="icon" width="10" height="10"></td>
        <td>${this.nombre}</td>
      </tr>
    `;
  }

  mostrarDetalle() {
    return `
    <table>
      <tr><td><b>icono</b></td><td><img src="${this.icono}" alt="icon" width="40" height="40"></td></tr>
      <tr><td><b>Nombre</b></td><td>${this.nombre}</td></tr>
      <tr><td><b>Tipo</b></td><td>${this.tipo}</td></tr>
      </table>
    `;
  }
}
