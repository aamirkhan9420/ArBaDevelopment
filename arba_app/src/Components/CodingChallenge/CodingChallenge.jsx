import { Box } from '@chakra-ui/react'
import React from 'react'
import ProblemBox from './ProblemBox'
import UserInputBox from './UserInputBox'

function CodingChallenge() {
  return (
    <Box>
        <ProblemBox />
        <UserInputBox />
    </Box>
  )
}

export default CodingChallenge