import {LunarSourceReader} from '../classes/FileReader'
import {Environment} from '../classes/Environment'
import {include} from './include'
import {inputOutput} from '../libs/io'
import {math} from '../libs/math'
import {cast} from '../libs/cast'
import {string} from '../libs/string'
import {async} from '../libs/async'
import {time} from '../libs/time'

export const createStdEnv = (reader: LunarSourceReader) => {
  const environment = new Environment(null, reader)

  include(environment, inputOutput, math, cast, string, async, time)

  return environment
}
