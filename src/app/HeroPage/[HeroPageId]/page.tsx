'use client'
import { HeroPageModule } from "@/modules/HeroPageModule";
import type { NextPage } from "next";

interface Props {
  params: { HeroPageId: string };
}

const HeroPage: NextPage<Props> = (props: Props) => {

  return (
    <HeroPageModule id={props.params.HeroPageId} />
  )
};

export default HeroPage;