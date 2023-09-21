import React, { useState, useEffect } from 'react'

import { Box, Card, ContainerMobile } from './styles'
import { Text } from '../Texto'
import { Form } from '../Form'
import { Image, ImageMobile } from '../Images'

export const Container = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ContainerMobile>
      {isMobile ? <ImageMobile /> : null}
      <Box>
        <Card>
          <div>
            <Text />
            <Form />
          </div>
          {isMobile ? null : <Image />}
        </Card>
      </Box>
    </ContainerMobile>
  )
}
