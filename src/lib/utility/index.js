import slugger from 'slugger'
import getSize from 'get-folder-size'
import { promisify } from 'util'
import fs from 'fs'
import shell from 'shelljs'
import { join } from 'path'

export const checkFileSize = promisify(getSize)

export const simpliFileName = (text) => {
  if (text) {
    // TODO: nanti harus pakai regex untuk misahin mime type
    let splitMimeType = text.split('.')
    let fileSlug = slugger(splitMimeType[0])
    return `${fileSlug}.${splitMimeType[1]}`
  }

  throw new Error('text not found')
}

export const simpliFileNameCompress = (text, mimeType) => {
  if (text) {
    // TODO: nanti harus pakai regex untuk misahin mime type
    let splitMimeType = text.split('.')
    let fileSlug = slugger(splitMimeType[0])
    return `${fileSlug}.${mimeType}`
  }

  throw new Error('text not found')
}

export const defaultFilename = (file, mime) => {
  return `${file.filename}.${mime}`
}

export const buildTargetDirPath = (...args) => {
  const [storagePath, dir, type, name] = args
  if (dir && type && name) {
    return join(storagePath, dir, type, name)
  }
  let data = join(storagePath, '/')
  return (data)
}

export const isDirectoryExists = (dir) => fs.existsSync(dir)

export const makeDir = (dir) => shell.mkdir('-p', dir)

export const removeDir = (dir) => shell.rm('-r', dir)

export const copy = (tempDir, destDir) => shell.cp('-R', tempDir, destDir)
