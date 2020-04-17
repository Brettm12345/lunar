import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'

export const async = (environment: Environment) => {
  environment.defineConst(
    'parallel',
    withMetadata(
      ['...functions'],
      async (...functions: (() => Promise<unknown>)[]) => {
        const result = await Promise.all(
          functions.map(_function => _function())
        )

        return result[result.length - 1]
      }
    )
  )

  environment.defineConst(
    'race',
    withMetadata(
      ['...functions'],
      async (...functions: (() => Promise<unknown>)[]) =>
        Promise.race(functions.map(_function => _function()))
    )
  )
}
