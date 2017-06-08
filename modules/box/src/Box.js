import styled from 'styled-components'
import { space } from 'grid-styled-constants'

const REG = /^[mp][trblxy]?$/

export const parse = scale => props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  return keys.map(key => {
    const p = getProperties(key)
    const val = px(scale)(props[key])
    return p.map(prop => `${prop}:${val}`).join(';')
  }).join(';')
}

export const getProperties = key => {
  const [ a, b ] = key.split('')
  const prop = properties[a]
  const dirs = directions[b] || [ '' ]
  return dirs.map(dir => prop + dir)
}

export const px = scale => n => typeof n === 'number' ? (scale[n] || n) + 'px' : n

const properties = {
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: [ '-top' ],
  r: [ '-right' ],
  b: [ '-bottom' ],
  l: [ '-left' ],
  x: [ '-left', '-right' ],
  y: [ '-top', '-bottom' ]
}

const Box = styled.div`
  ${parse(space)}
`

export default Box
