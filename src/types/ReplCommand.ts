import {IO} from 'fp-ts/lib/IO'

export interface ReplCommand {
  value: string
  description: string
  exec: IO<void>
}
