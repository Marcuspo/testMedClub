import { Text } from "react-native-paper"

import * as Styled from './styles'

const EmptyComponent = () => {
     return(
       <Styled.EmptyComponent>
         <Text variant='bodyMedium'>Não há itens, adicione!</Text>
       </Styled.EmptyComponent>
     )
   }

   export default EmptyComponent