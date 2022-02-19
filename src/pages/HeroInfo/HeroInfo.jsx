import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import noImageKid from '../../images/noImageKid.png';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import * as heroesOperations from '../../redux/heroes/heroes-operations';
import * as heroSelectors from '../../redux/heroes/heroes-selectors';
import { setChosenHero } from 'redux/heroes/heroes-slice';
import Button from 'components/Button/Button';
import EditHeroModal from './EditHeroModal/EditHeroModal';
import { BASE_DB_URL } from '../../constants/baseDbURL';
import {
  Section,
  HeroWrapper,
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
  BtnWrapper,
  InfoWrapper,
} from './HeroInfo.styled';

export default function HeroInfo() {
  const [showModal, setShowModal] = useState(false);
  const chosenHero = useSelector(heroSelectors.getChosenHero);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMmodalClose = () => {
    setShowModal(false);
  };

  const handleHomeLinkClick = () => {
    navigate('/');
    dispatch(setChosenHero(null));
  };

  const {
    nickname,
    real_name: realName,
    origin_description: originDescription,
    superpowers,
    catch_phrase: catchPhrase,
    images,
    _id: heroId,
  } = chosenHero;

  const handleRemoveImage = (heroId, imageURL) => {
    dispatch(heroesOperations.removeImage({ heroId, imageURL }));
  };

  const handleRemoveHero = heroId => {
    dispatch(heroesOperations.deleteHero({ heroId }));
    navigate('/');
    dispatch(setChosenHero(null));
  };

  return (
    <Section>
      {showModal && (
        <EditHeroModal onClose={handleMmodalClose} chosenHero={chosenHero} />
      )}

      {chosenHero && images && (
        <HeroWrapper>
          <Button onClick={() => handleRemoveHero(heroId)}>
            <TiDeleteOutline />
          </Button>

          <BtnWrapper>
            <Button onClick={handleHomeLinkClick}>
              <MdOutlineArrowBackIos /> Back
            </Button>

            <Button onClick={() => setShowModal(true)}>
              Edit <FiEdit />
            </Button>
          </BtnWrapper>

          <InfoWrapper>
            <HeroAvatar>
              <img
                src={images[0] ? `${BASE_DB_URL}${images[0]}` : noImageKid}
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
          </InfoWrapper>
        </HeroWrapper>
      )}

      {images && images.length > 1 && (
        <HeroImages>
          {images.map(image => (
            <ImageItem key={image}>
              <Button
                heroId={heroId}
                imageURL={image}
                onClick={() => handleRemoveImage(heroId, image)}
              >
                <TiDeleteOutline />
              </Button>
              <img
                src={image ? `${BASE_DB_URL}${image}` : noImageKid}
                alt={image}
              />
            </ImageItem>
          ))}
        </HeroImages>
      )}
    </Section>
  );
}
