import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'

export const math = (environment: Environment) => {
  environment.defineConst(
    'randomInt',
    withMetadata(['min', 'max'], (min: number, max: number) => {
      return min + Math.floor(Math.random() * (max - min))
    })
  )
}
