'use client';

import { BannerTitle, ContentWrapper } from "./styles";

interface IPublicBannerProps {
  title: string;
}

export const Banner = ({ title }: IPublicBannerProps) => {
  return (
    <ContentWrapper>
      <BannerTitle>
        {title}
      </BannerTitle>
    </ContentWrapper>
  )
}