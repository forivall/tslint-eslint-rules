import * as ts from 'typescript';
import * as Lint from 'tslint';

const RULE_NAME = 'padded-blocks';
interface IPaddedBlocksOptions {
  // Add the options properties
}

export class Rule extends Lint.Rules.AbstractRule {
  public static metadata: Lint.IRuleMetadata = {
    ruleName: RULE_NAME,
    hasFix: false,
    description: 'require or disallow padding within blocks',
    rationale: Lint.Utils.dedent`
      Some style guides require block statements to start and end with blank lines.
      The goal is to improve readability by visually separating the block content and the surrounding code.`,
    optionsDescription: Lint.Utils.dedent`
      The rule takes one or two options. The first is a string, which can be:

      - \`"never"\` (default) requires empty lines at the beginning and ending of block statements and classes
      - \`"always"\` disallows empty lines at the beginning and ending of block statements and classes

      The second option is an object for exceptions to the \`"never"\` option:

      - \`"blocks": true\` require one or more newlines within block statements
      - \`"classes": true\` require one or more newlines within classes
      - \`"switches": true\` require one or more newlines within switch statements

      When using the \`"always"\` option the second option takes on these exceptions:

      - \`"blocks": true\` disallow padding newlines within block statements
      - \`"classes": true\` disallow padding newlines within classes
      - \`"switches": true\` disallow padding newlines within switch statements
      `,
    options: {
      anyOf: [
        {
          type: 'array',
          items: [
            {
              enum: ['always', 'never']
            }
          ],
          minItems: 0,
          maxItems: 1
        },
        {
          type: 'object',
          properties: {
            blocks: {
              type: 'boolean'
            },
            classes: {
              type: 'boolean'
            },
            switches: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    },
    optionExamples: [
      Lint.Utils.dedent`
        "${RULE_NAME}": [true, "always"]
        `,
      Lint.Utils.dedent`
        "${RULE_NAME}": [true, "never"]
        `,
      Lint.Utils.dedent`
        "${RULE_NAME}": [true, "never", {
          "switches": true
        }]
        `
    ],
    typescriptOnly: false,
    type: 'style'
  };

  private formatOptions(ruleArguments: any[]): IPaddedBlocksOptions {
    // handle the ruleArguments
    return {};
  }

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    // Convert the 'ruleArguments' into a useful format before passing it to the constructor of AbstractWalker.
    const opt = this.formatOptions(this.ruleArguments);
    const walker = new RuleWalker(sourceFile, this.ruleName, opt);
    return this.applyWithWalker(walker);
  }
}

class RuleWalker extends Lint.AbstractWalker<IPaddedBlocksOptions> {
  public walk(sourceFile: ts.SourceFile) {
    console.log('foo');
  }

  private validateBlockSpacing(node: ts.Node, elements: ts.NodeArray<ts.Node>): void {
    console.log('TODO');
  }
}
