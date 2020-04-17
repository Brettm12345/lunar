import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'

export const cast = (environment: Environment) => {
  environment.defineConst(
    'int',
    withMetadata(['value'], (x: unknown) => {
      return Math.floor(Number(x))
    })
  )

  environment.defineConst('float', withMetadata(['value'], Number))
  environment.defineConst('string', withMetadata(['value'], String))
}
