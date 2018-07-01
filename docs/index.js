import React from 'react'
import XRay from 'react-x-ray'
import { ThemeProvider } from 'styled-components'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import { Flex, Box } from '../src'
import {
  Color,
  Bar,
  Button,
  colors
} from './_components'
import examples from './examples'

const scope = {
  Flex,
  Box,
  Color,
  Bar,
  Button,
  colors
}

export default ({
  xray,
  index,
  update
}) => {
  const code = examples[Math.abs(index) % examples.length] || '<pre>missing example</pre>'

  return (
    <React.Fragment>
      <LiveProvider
        code={code}
        scope={scope}
        mountStylesheet={false}>
        <XRay
          disabled={!xray}
          style={sx.xray}
          color={colors.magenta}
          backgroundColor='#000'>
          <div style={sx.top}>
            <LivePreview style={sx.preview} />
          </div>
        </XRay>
        <LiveError style={sx.error} />
        <LiveEditor style={sx.bottom} />
      </LiveProvider>
      </React.Fragment>
  )
}

const sx = {
  top: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
  },
  preview: {
    width: '100%'
  },
  bottom: {
    minHeight: '40vh',
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    margin: 0,
    padding: 16,
    overflow: 'auto',
    color: colors.cyan,
    backgroundColor: '#000',
    outline: 'none',
    WebkitFontSmoothing: 'antialiased'
  },
  error: {
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
    padding: 16,
    color: '#fff',
    backgroundColor: '#f00'
  },
  xray: {
    transition: 'background-color .3s ease-out'
  }
}
