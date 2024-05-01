import { HeroContainer } from "./HeroContent.styled";
import { HeroCotentContainer } from "./HeroContent.styled";
import { HeroContent } from "./HeroContent.styled";

const HeroSectionContent = () => {
  return (
    <>
      <HeroContainer>
        <HeroCotentContainer>
          <HeroContent>100 Thousand Songs, ad-free</HeroContent>
        </HeroCotentContainer>
        <HeroCotentContainer>
          <HeroContent>Over thousands podcast episodes</HeroContent>
        </HeroCotentContainer>
      </HeroContainer>
    </>
  );
};

export default HeroSectionContent;
