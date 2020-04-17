import {Environment} from '../classes/Environment'
import {AstNodeType, Ast} from '../types/Ast'

export const functionMetadata = Symbol('metadata')

export const createFunction = (
  environment: Environment,
  expression: Ast<AstNodeType.anonymousFunction>,
  evaluate: (
    _expression: typeof expression.body,
    scope: Environment
  ) => Promise<unknown>
) => (...params: unknown[]) => {
  const names = expression.arguments
  const scope = environment.extend()

  if (params[0] === functionMetadata) {
    return names
  }

  for (let i = 0; i < names.length; i++) {
    if (params[i] === undefined) {
      throw new Error(`Expected an argument for ${names[i]}. Got undefined.`)
    }

    scope.defineConst(names[i], params[i])
  }

  return evaluate(expression.body, scope)
}
