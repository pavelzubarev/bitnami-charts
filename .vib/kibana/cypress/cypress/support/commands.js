// Added to slow down Cypress test execution without using hardcoded waits. If removed, there will be false positives.
const COMMAND_DELAY = 2000;

for (const command of ['click']) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(origVal);
      }, COMMAND_DELAY);
    });
  });
}

//Due to instability of the UI we use a lot of {force:true}. This is a cy.click() wrapper with {force:true} enabled
Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).click({ force: true });
});

Cypress.on('uncaught:exception', (err) => {
  // We expect an error "Cannot read properties of undefined (reading 'includes')"
  // during the installation of a template so we add an exception
  if (err.message.includes("Cannot read properties of undefined (reading 'includes')")) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})
