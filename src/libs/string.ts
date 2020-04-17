import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'

export const string = (environment: Environment) => {
  environment.defineConst(
    'concat',
    withMetadata(['...strings'], (...strings: string[]) => {
      return strings.reduce((previous, current) => `${previous}${current}`, '')
    })
  )
}
