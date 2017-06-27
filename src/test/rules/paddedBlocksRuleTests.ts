import { RuleTester, Failure, Position, dedent } from './ruleTester';

const ruleTester = new RuleTester('padded-blocks');

// Change this function to better test the rule. In some cases the message never changes so we
// can avoid passing it in. See other rule tests for examples.
function expecting(errors: [string, number, number][]): Failure[] {
  return errors.map((err) => {
    let message = err[0];
    return {
      failure: message,
      startPosition: new Position(err[1]),
      endPosition: new Position(err[2])
    };
  });
}

ruleTester.addTestGroup('group-name', 'should ...', [
  {
    code: dedent`
     // code goes here
     `,
    options: [],
    errors: expecting([
    ])
  }
]);

ruleTester.runTests();
