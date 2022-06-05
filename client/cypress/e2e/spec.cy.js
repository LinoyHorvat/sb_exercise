describe("end2end Test", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("be.visible");
    cy.get("input").should("be.visible");
  });
});

const searchTerms = {
  name: "Lou Gardner",
  age: "61",
  phone_number: "8589246",
};
describe("test search bar", () => {
  it("Case 1 - Search by Name", () => {
    cy.get("input").type(searchTerms.name);
    cy.get('[data-testid="card"]').then(($contact) => {
      expect($contact).to.contain(searchTerms.name);
    });
  });
  it("Case 1 - Search by Name & age", () => {
    cy.get("input").type(` ${searchTerms.age}`);
    cy.get('[data-testid="card"]').then(($contact) => {
      expect($contact).to.contain(searchTerms.name);
      expect($contact).to.contain(searchTerms.age);
    });
  });
  it("Case 1 - Search by Name & age & phone", () => {
    cy.get("input").type(` ${searchTerms.phone_number}`);
    cy.get('[data-testid="card"]').then(($contact) => {
      expect($contact).to.contain(searchTerms.name);
      expect($contact).to.contain(searchTerms.age);
      expect($contact).to.contain(searchTerms.phone_number);
    });
  });
});
