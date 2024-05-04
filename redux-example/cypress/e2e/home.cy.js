describe("Provando el homa page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Vamos a probar que el texto Jesus Retamozo exista", () => {
    cy.get("h1").contains("Jesus Retamozo");
  });

  it("VAmos a probar si se puede esvcribir en el input", () => {
    cy.get("input[type=text]").type("Tarea2");
    cy.wait(1000)
    cy.get("button").contains("Crear Tarea").click();
  });
});
