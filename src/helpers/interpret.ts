import {LunarCommand} from '../types/Command'
import {createAst} from './createAst'
import {evaluate} from './evaluate'
import {resolve} from 'path'
import {LunarSourceReader} from '../classes/FileReader'
import {createStdEnv} from './createStandardEnvironment'

export const interpret = async (path: string, command: LunarCommand) => {
  const reader = new LunarSourceReader(command.logger)

  await reader.fromFile(resolve(process.cwd(), path))

  const ast = await createAst(reader, command)

  try {
    await evaluate(ast, createStdEnv(reader))
  } catch (error) {
    reader.endWith(error.message)
  }
}
