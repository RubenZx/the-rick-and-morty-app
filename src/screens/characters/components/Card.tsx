import React from 'react'
import {
  Card as MaterialUiCard,
  CardContent,
  CardMedia,
  GridListTileBar,
} from '@material-ui/core'
import styled from 'styled-components'
import { Character } from '../../../services/api/types'
import CardContentItem from '~Screens/characters/components/CardContentItem'

interface CardProps {
  character: Character
}

const Card = ({
  character: { gender, image, location, name, origin, species, status },
}: CardProps) => {
  const StyledCard = styled(MaterialUiCard)`
    border-radius: 20px;
  `

  const StyledCardMedia = styled(CardMedia)`
    height: 200px;
    position: relative;
    width: 200px;
  `

  const StyledCardContent = styled(CardContent)`
    &:last-child {
      padding: 10px;
    }
    background-color: ${({ theme }) => theme.palette.secondary.main};
    padding: 10px;
  `

  return (
    <StyledCard>
      <StyledCardMedia style={{ height: 200, width: 200 }} image={image}>
        <GridListTileBar title={name} />
      </StyledCardMedia>
      <StyledCardContent>
        <CardContentItem title="STATUS" value={status} />
        <CardContentItem title="SPICES" value={species} />
        <CardContentItem title="GENDER" value={gender} />
        <CardContentItem title="ORIGIN" value={origin.name} />
        <CardContentItem title="LAST LOCATION" value={location.name} />
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card
