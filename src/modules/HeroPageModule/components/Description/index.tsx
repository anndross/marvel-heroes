import { Typography } from "@/components/Typography"
import * as S from './styles'
import {  useState } from "react"
import { useHeroesStore } from "@/context"
import { Favorite } from "@/components/Favorite"


export const Description = () => {
  const heroesContext = useHeroesStore()
  const [hero] = heroesContext.heroById

  const [ratingURL, setRatingURL] = useState<string[]>([
    "../assets/review/ratingstar.png",
    "../assets/review/ratingstar.png",
    "../assets/review/ratingstar.png",
    "../assets/review/ratingstar.png",
    "../assets/review/ratingstar.png"
  ])

  return (
    <S.Container>
      <S.Description>
        <S.Name>
          <Typography color='primary' size='large' weight='bold'>
            {hero?.name}
          </Typography>
          <Favorite />
        </S.Name>
        <Typography className="text" color='tertiary' size='medium' weight='lighter'>
         {hero?.description || 'sem descrição'}
        </Typography>
        <S.Collection>
          <S.Job>
            <Typography color='primary' size='medium' weight='lighter'>
              Quadrinhos
            </Typography>
            <div>
              <img src="../assets/icones/book/Group.png" height={30} />
              <Typography className="text" color='primary' size='medium' weight='lighter'>
                {hero?.comics.available}
              </Typography>
            </div>
          </S.Job>
          <S.Job>
            <Typography color='primary' size='medium' weight='lighter'>
              Filmes
            </Typography>
            <div>
              <img src="../assets/icones/video/Shape.png" height={30} />
              <Typography className="text" color='primary' size='medium' weight='lighter'>
              {hero?.series.available}
              </Typography>
            </div>
          </S.Job>
        </S.Collection>
        <S.Rating>
          <Typography className="text" color='primary' size='medium' weight='lighter'>
            Rating:
          </Typography>
          {ratingURL.map((e, i) => {
            return (
              <img
                onClick={() => {
                  const reMappedURLs = ratingURL.map((_, index) => {
                    if (index <= i)
                      return "../assets/review/ratingstarred.png"
                    return "../assets/review/ratingstar.png"
                  })

                  setRatingURL(reMappedURLs)
                }}
                key={i}
                src={e}
                alt=""
                height={20}
              />
            )
          })}
        </S.Rating>
        <S.LastComic>
          <Typography color='primary' size='medium' weight='lighter'>
            Último quadrinho:
          </Typography>
          <Typography color='primary' size='medium' weight='lighter'>
            13 fev 2020
          </Typography>
        </S.LastComic>
      </S.Description>
      <img className="character" src={hero?.thumbnail.path + '.' + hero?.thumbnail.extension} alt="" height={'320px'} />
    </S.Container>
  )
}