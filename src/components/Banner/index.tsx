'use client';

import { BannerTitle, ContentWrapper } from "./styles";

interface IPublicBannerProps {
  title: string;
  withOverlay?: boolean;
}

export const Banner = ({ title, withOverlay }: IPublicBannerProps) => {
  return (
    <ContentWrapper withOverlay={!!withOverlay}>
      <BannerTitle>
        {title}
      </BannerTitle>
    </ContentWrapper>
  )
}