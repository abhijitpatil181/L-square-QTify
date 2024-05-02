import { HeroContainer } from "./HeroContent.styled";
import { HeroContentContainer } from "./HeroContent.styled";
import { HeroContent } from "./HeroContent.styled";

const HeroSectionContent = () => {
  return (
    <>
      <HeroContainer>
        <HeroContentContainer>
          <HeroContent>100 Thousand Songs, ad-free</HeroContent>
        </HeroContentContainer>
        <HeroContentContainer>
          <HeroContent>Over thousands podcast episodes</HeroContent>
        </HeroContentContainer>
      </HeroContainer>
    </>
  );
};

export default HeroSectionContent;
