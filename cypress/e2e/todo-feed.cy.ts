const BASE_URL = "http://localhost:3000";

describe("/ - todos feed", () => {
  it("when load, renders the page", () => {
    cy.visit(BASE_URL);
  });
  it("When create a new todo, it must appear in the screen", () => {
    cy.intercept("POST", `${BASE_URL}/api/todos`, (request) => {
      request.reply({
        statusCode: 201,
        body: {
          todo: {
            id: "ec168d38-6ccb-4301-9a24-902b940b0792",
            date: "2023-12-07T17:25:23.428Z",
            content: "Test todo!",
            done: false,
          },
        },
      });
    }).as("createTodo");
    cy.visit(BASE_URL);
    const inputAddTodo = "input[name='add-todo']";
    cy.get(inputAddTodo).type("Test todo!");
    const buttonAddTodo = "[aria-label='Adicionar novo item']";
    cy.get(buttonAddTodo).click();
    cy.contains("Test todo!");
  });
});
