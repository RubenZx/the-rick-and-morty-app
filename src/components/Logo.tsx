import { IconButton, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as MortyIcon } from '~Assets/img/morty.svg'
import { ReactComponent as RickIcon } from '~Assets/img/rick.svg'
import routes from '~Routes/routes'

const StyledRickIcon = styled(RickIcon)`
  position: absolute;
`

const Logo = () => {
  const [isRick, setIsRick] = useState(true)
  const [rickOpacity, setRickOpacity] = useState(1)
  const [mortyOpacity, setMortyOpacity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const laps = 10
      for (let i = 0; i < laps; i += 1) {
        // setTimeout(() => {
        console.log(i)
        console.log(rickOpacity)
        console.log(mortyOpacity)
        setRickOpacity(isRick ? rickOpacity - 1 / laps : rickOpacity + 1 / laps)
        setMortyOpacity(
          isRick ? mortyOpacity + 1 / laps : mortyOpacity - 1 / laps
        )
        // }, 100)
      }
      setIsRick(!isRick)
    }, 3000)
    return () => clearInterval(interval)
  }, [isRick, mortyOpacity, rickOpacity])

  return (
    <IconButton>
      <Link component={RouterLink} to={routes.baseUrl.path}>
        <div>
          <StyledRickIcon opacity={rickOpacity} />
          <MortyIcon opacity={mortyOpacity} />
        </div>
      </Link>
    </IconButton>
  )
}

export default Logo
