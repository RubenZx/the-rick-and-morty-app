import axios, { AxiosPromise } from 'axios'
import {
  Character,
  CharacterFilters,
  Episode,
  EpisodeFilters,
  Location,
  LocationFilters,
  ResultsInfo,
} from './types'

export const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000,
  method: 'get',
})

type Filter<T> = T extends Character
  ? CharacterFilters
  : T extends Location
  ? LocationFilters
  : EpisodeFilters

type GETReturn<E extends Character | Location | Episode> = {
  (params: string | number): AxiosPromise<E>
  (params: string[] | number[]): AxiosPromise<E[]>
  (params?: Filter<E>): AxiosPromise<ResultsInfo<E>>
}
type Endpoint = 'character' | 'location' | 'episode'
type CommonArgs<T> = string | number | string[] | number[] | T | undefined
const get = (endpoint: Endpoint, args?: CommonArgs<{}>) =>
  typeof args === 'number' || typeof args === 'string' || Array.isArray(args)
    ? client(`${endpoint}/${args}`)
    : client(endpoint, { params: args })

export const getCharacter: GETReturn<Character> = (
  args?: CommonArgs<CharacterFilters>
) => get('character', args)

export const getLocation: GETReturn<Location> = (
  args?: CommonArgs<LocationFilters>
) => get('location', args)

export const getEpisode: GETReturn<Episode> = (
  args?: CommonArgs<EpisodeFilters>
) => get('episode', args)
