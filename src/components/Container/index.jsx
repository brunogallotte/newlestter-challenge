import { Box, Card } from './styles'
import { Text } from '../Texto'
import { Form } from '../Form'
import { Image } from '../Images'

export const Container = () => {
  return (
    <Box>
      <Card>
        <div>
          <Text />
          <Form />
        </div>
        <Image />
      </Card>
    </Box>
  )
}
