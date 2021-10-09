import {
	HeroSectionContainer,
	HeroSectionContent,
	HeroSectionHeading,
	HeroSectionParagraph,
	SearchMoviesLink,
} from './StyledHeroSection';

export const HeroSection = () => {
	return (
		<HeroSectionContainer>
			<HeroSectionContent>
				<HeroSectionHeading>
					I'm gonna make you an offer you can't refuse.
				</HeroSectionHeading>
				<HeroSectionParagraph>
					Your personal movies library.
					<span>Save.</span>
					<span>Note.</span>
					<span>Rate.</span>
					<span>Enjoy.</span>
				</HeroSectionParagraph>
				<SearchMoviesLink to="/search">Search</SearchMoviesLink>
			</HeroSectionContent>
		</HeroSectionContainer>
	);
};
