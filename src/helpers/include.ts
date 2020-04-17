import {Environment} from '../classes/Environment'

export const include = (
  environment: Environment,
  ...libraries: ((environment: Environment) => void)[]
) => {
  for (const library of libraries) {
    library(environment)
  }
}
