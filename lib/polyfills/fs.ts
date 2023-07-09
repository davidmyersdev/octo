import { type PathLike } from 'node:fs'

export const existsSync = (_path: PathLike) => false
export const readFileSync = (_path: PathLike) => ''
export const writeFileSync = (_path: PathLike, _data: string) => {}
