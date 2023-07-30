import { Typography } from "@/components/typography"
import * as S from './styles'
import { useEffect, useState } from "react"
import axios from "axios"

interface Props {
  hero: any
}

export const Description = ({ hero }: Props) => {
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
            {hero[0]?.name}
          </Typography>
          <img src="../assets/icones/heart/heart1.png" alt="" height={20} />
        </S.Name>
        <Typography className="text" color='tertiary' size='medium' weight='lighter'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <S.Collection>
          <S.Job>
            <Typography color='primary' size='medium' weight='lighter'>
              Quadrinhos
            </Typography>
            <div>
              <img src="../assets/icones/book/Group.png" height={30} />
              <Typography className="text" color='primary' size='medium' weight='lighter'>
                3000
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
                3000
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
      <img src={hero[0]?.thumbnail.path + '.' + hero[0]?.thumbnail.extension} alt="" height={'400px'} />
    </S.Container>
  )
}