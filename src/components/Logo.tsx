import { IconButton, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ReactComponent as MortyIcon } from '~Assets/img/morty.svg'
import { ReactComponent as RickIcon } from '~Assets/img/rick.svg'
import routes from '~Routes/routes'

const Logo = () => {
  const [isRick, setRick] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setRick(rick => !rick)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <IconButton>
      <Link component={RouterLink} to={routes.baseUrl}>
        {isRick ? <RickIcon /> : <MortyIcon />}
      </Link>
    </IconButton>
  )
}

export default Logo
