import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'
import {sleep} from '../helpers/sleep'
import {performance} from 'perf_hooks'

export const time = (environment: Environment) => {
  const start = performance.now()

  environment.defineConst(
    'sleep',
    withMetadata(['seconds'], (time: number) => sleep(time * 1000))
  )

  environment.defineConst(
    'now',
    withMetadata([], () => performance.now() - start)
  )
}
