import {Environment} from '../classes/Environment'
import {withMetadata} from '../helpers/withMetadata'
import {question} from '../helpers/question'

export const inputOutput = (environment: Environment) => {
  environment.defineConst(
    'print',
    withMetadata(['...strings'], (...strings: string[]) => {
      process.stdout.write(
        Buffer.from(
          strings.reduce(
            (previous, current) => previous + current.toString(),
            ''
          )
        )
      )
    })
  )

  environment.defineConst('clear', withMetadata([], console.clear))
  environment.defineConst('println', withMetadata(['...strings'], console.log))
  environment.defineConst('question', withMetadata(['query'], question))
  environment.defineConst('exit', withMetadata(['code'], process.exit))
}
