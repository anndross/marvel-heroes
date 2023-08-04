import { Hero } from '@/interfaces/HeroInterface'
import * as S from './styles'
import { useRouter } from 'next/navigation'
import { Typography } from '../Typography'

interface Props {
  variant: 'primary' | 'secondary'
  list: Hero[]
}

export const HeroesList = ({ variant, list }: Props) => {
  const router = useRouter()

  return (
    <S.SearchedList variant={variant}>
      {!list.length
        ?
        <li>
          <Typography>
            Ops! Herói não encontrado
          </Typography>
        </li>
        :
        list.map((e) => {
          return (
            <li
              key={e.id}
              onClick={() => {
                router.push('/' + e.id)
              }}
            >
              <img
                src={e.thumbnail.path + '.' + e.thumbnail.extension}
                alt="character"
                height={50}
                width={50}
              />
              <Typography>
                {e.name}
              </Typography>
            </li>
          )
        })
      }
    </S.SearchedList>
  )
}