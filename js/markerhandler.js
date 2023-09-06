AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("Se encontró el marcador");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("Se perdió el marcador");
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function() {
    // Cambia la visibilidad del botón div
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    // Usa los eventos de clic
    orderButtton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "¡Gracias por tu orden!",
        text: "  ",
        timer: 2000,
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Resumen de la orden",
        text: "Operación en curso"
      });
    });
  },

  handleMarkerLost: function() {
    // Cambia la visibilidad del botón div
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
