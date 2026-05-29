import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Pronunciations from '../Pronounciation/Pronounciation';
import ResourcesLink from './ResourcesLink/ResourcesLink';
import Button from '../../UI/Form/Button/Button';
import { IFooterProps } from './Footer.types';

const footerResourcesLinks = AppContentData.footerContent.resources.links;

const { pronounciationTitleH2 } = AppContentData.footerContent.ipaPronounciation;
const { copyright } = AppContentData.icons;
const { titleH2, flags } = AppContentData.footerContent.resources;

const {
  backToTopLabel,
  backToTopAriaLabel
} = AppContentData.globalPageContent;

const {
  pronounciationContainerClasses,
  copyRightContainerClasses,
  footerResourcesContinerClasses,
  footerResourcesTitleClasses,
  footerFlagSectionClasses,
  footerResourcesLinkClasses,
  copyRightIconClasses,
  flagHolderClasses
} = AppContentData.uiClasses;

const {
  backToTopButton,
  backToTopIconClasses
} = AppContentData.uiClasses;

const { backToTopIcon } = AppContentData.icons;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  /**
    * Manages the state of the "Back to Top" button visibility based on the user's scroll position.
    *
    * The `showBackToTop` state is initialized to `false` and is updated to `true` when the user scrolls past the halfway point of the page. This is determined by checking the position of the `wordPhonemes` element relative to the window height.
    *
    * The `handleScroll` function is called whenever the user scrolls the page, and it updates the `showBackToTop` state accordingly.
    *
    * The `useEffect` hook is used to add and remove the `scroll` event listener when the component mounts and unmounts, respectively.
    */
  const handleScroll = () => {
    const element = document.getElementById('wordPhonemes');

    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setShowBackToTop(rect.top <= windowHeight / 2);
    }
  };

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <Pronunciations className={pronounciationContainerClasses} titleH2={pronounciationTitleH2} />

      <BlockElement
        className={copyRightContainerClasses}>
        {copyright(copyRightIconClasses)}&nbsp;{footerInfo}
      </BlockElement>

      <BlockElement className={footerResourcesContinerClasses}>
        <Typography
          variant='h3'
          className={footerResourcesTitleClasses}
        >{titleH2}</Typography>

        <ResourcesLink
          linkData={footerResourcesLinks}
          linkClasses={footerResourcesLinkClasses}
        />
      </BlockElement>

      <BlockElement className={footerFlagSectionClasses}>
        {flags.map((flag, index) => (
          <Typography
            key={index}
            variant='span'
            className={flagHolderClasses}
            role='img'
            ariaLabel={`${flag.ariaLabelKw} / ${flag.ariaLabelEn}`}>{flag.emoji}</Typography>
        ))}
      </BlockElement>

      {showBackToTop && (
        <Button
          buttonClass={backToTopButton}
          buttonLabel={<>
            {backToTopIcon(backToTopIconClasses)}
            <span>{backToTopLabel}</span>
          </>}
          ariaLabel={backToTopAriaLabel}
          onClickFunc={scrollToTop}
        />
      )}
    </BlockElement>
  );
}
