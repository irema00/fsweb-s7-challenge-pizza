describe("PizzaForm E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/pizza");
  });
  it("allows selection of multiple toppings", () => {
    cy.get("#topping-0").check();
    cy.get("#topping-1").check();
    cy.get("#topping-2").check();
    cy.get("#topping-3").check();
    cy.get("#topping-0").should("be.checked");
    cy.get("#topping-1").should("be.checked");
    cy.get("#topping-2").should("be.checked");
    cy.get("#topping-3").should("be.checked");
  });

  it("should not submit with empty required fields", () => {
    cy.get("#order-button").click();
    cy.contains("You must select at least 4 toppings.").should("be.visible");
    cy.contains("Please select a size.").should("be.visible");
    cy.contains("Please select a crust type.").should("be.visible");
  });
  it("should not submit if the minimum topping requirement is not met", () => {
    cy.get("#topping-0").check();
    cy.get("#order-button").click();
    cy.contains("You must select at least 4 toppings.").should("be.visible");
  });
  it("allows only one size to be selected and reflects the choice", () => {
    cy.get("#size-small").check().should("be.checked");
    cy.get("#size-medium").should("not.be.checked");
    cy.get("#size-large").should("not.be.checked");
  });
  it("should display error for invalid name input", () => {
    cy.get("#name-input").type("A");
    cy.contains("Name must be at least 2 characters long").should("be.visible");
  });
  it("allows a dough type to be selected and reflects the choice", () => {
    cy.get("#crust-type")
      .select("Flex-Container-Crunch")
      .should("have.value", "Flex-Container-Crunch");
    cy.get("#crust-type")
      .select("Grid-Layout-Gourmet")
      .should("have.value", "Grid-Layout-Gourmet");
  });
  it("allows multiple toppings to be selected and unselected", () => {
    cy.get("#topping-0").check().should("be.checked");
    cy.get("#topping-1").check().should("be.checked");
    cy.get("#topping-0").uncheck().should("not.be.checked");
  });
  it("allows a special instruction note to be entered", () => {
    cy.get("#order-note")
      .type("Extra cheese on half the pizza, please.")
      .should("have.value", "Extra cheese on half the pizza, please.");
  });
  it("increments and decrements the count", () => {
    cy.get("#counter-right").click();
    cy.get(".counter-container span").should("contain", "2");
    cy.get("#counter-left").click();
    cy.get(".counter-container span").should("contain", "1");
  });

  it("calculates the total price correctly", () => {
    const basePrice = parseFloat(85.5);
    const toppingPrice = parseFloat((5).toFixed(2));
    cy.get("#counter-right").click();
    cy.get(".counter-container span").should("contain", "2");
    cy.get("#topping-0").check();
    cy.get("#topping-1").check();
    const expectedTotal = parseFloat(191.0).toFixed(2);
    cy.get("#total").should("contain", expectedTotal + "₺");
  });
  it("restricts the user from selecting more than 10 toppings", () => {
    for (let i = 0; i < 11; i++) {
      cy.get(`#topping-${i}`).check();
    }
    cy.get(".toppings-container")
      .contains("You cannot select more than 10 toppings.")
      .should("be.visible");
  });

  it("submits the form only when all validations pass", () => {
    cy.get("#size-medium").check();
    cy.get("#crust-type").select("Grid-Layout-Gourmet");
    for (let i = 0; i < 4; i++) {
      cy.get(`#topping-${i}`).check();
    }
    cy.get("#name-input").type("Jane Doe");
    cy.get("#order-note").type("No onions, please.");
    cy.intercept("POST", "https://reqres.in/api/users").as("createOrder");
    cy.get("#order-button").click();
    cy.wait("@createOrder");
    cy.get("@createOrder").its("response.statusCode").should("eq", 201);
    cy.get("@createOrder").its("response.body").should("have.property", "id");
  });
});
