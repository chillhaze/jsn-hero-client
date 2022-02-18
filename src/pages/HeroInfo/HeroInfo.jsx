import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import * as heroSelectors from '../../redux/heroes/heroes-selectors';
import EditHeroModal from './EditHeroModal/EditHeroModal';
import {
  Section,
  Wrapper,
  HeroAvatar,
  HeroDescription,
  InfoSubtitle,
  Title,
  RealName,
  OriginDescription,
  Superpowers,
  Phrase,
  HeroImages,
  ImageItem,
} from './HeroInfo.styled';

export default function HeroInfo() {
  const [showModal, setShowModal] = useState(false);
  const chosenHero = useSelector(heroSelectors.getChosenHero);

  const handleMmodalClose = () => {
    setShowModal(false);
  };

  const {
    nickname,
    real_name: realName,
    origin_description: originDescription,
    superpowers,
    catch_phrase: catchPhrase,
    images,
  } = chosenHero;

  return (
    <Section>
      {showModal && (
        <EditHeroModal onClose={handleMmodalClose} chosenHero={chosenHero} />
      )}

      {chosenHero && images && (
        <Wrapper>
          <button onClick={() => setShowModal(true)}>
            Edit Hero
            <FiEdit />
          </button>

          <HeroAvatar>
            <img
              src={`http://localhost:8080/${images[0]}`}
              alt={`${nickname}`}
            />
          </HeroAvatar>
          <HeroDescription>
            <InfoSubtitle>
              <Title>{nickname}</Title>
            </InfoSubtitle>

            <InfoSubtitle>
              Real name:
              <RealName>{realName}</RealName>
            </InfoSubtitle>

            <InfoSubtitle>
              Description:
              <OriginDescription>{originDescription}</OriginDescription>
            </InfoSubtitle>

            <InfoSubtitle>
              Superpowers:
              <Superpowers>{superpowers}</Superpowers>
            </InfoSubtitle>

            <InfoSubtitle>
              Catchphrase:
              <Phrase>{catchPhrase}</Phrase>
            </InfoSubtitle>
          </HeroDescription>
        </Wrapper>
      )}

      {/* {images && ( */}
      {images && images.length > 1 && (
        <HeroImages>
          {images.map(image => (
            <ImageItem key={image}>
              <Button>
                <TiDeleteOutline />
              </Button>
              <img src={`http://localhost:8080/${image}`} alt={image} />
            </ImageItem>
          ))}
        </HeroImages>
      )}
    </Section>
  );
}
