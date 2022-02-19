import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsImages } from 'react-icons/bs';
import * as heroesOperations from '../../../redux/heroes/heroes-operations';
import { Overlay } from './EditHeroModal.styled';
import {
  Form,
  Input,
  InputWrapper,
  Label,
  LabelText,
  SubmitButton,
} from './EditHeroModal.styled';

export default function EditHeroModal({ onClose, chosenHero }) {
  const [updatedHeroStats, setUpdatedHeroStats] = useState({
    ...chosenHero,
  });
  const [updatedHeroImages, setUpdatedHeroImages] = useState([]);
  console.log('updatedHeroStats: ', updatedHeroStats);
  console.log('updatedHeroImages: ', updatedHeroImages);

  const dispatch = useDispatch();

  //getting form value to state
  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'nickname':
        setUpdatedHeroStats({ ...updatedHeroStats, nickname: value });
        break;
      case 'realName':
        setUpdatedHeroStats({ ...updatedHeroStats, real_name: value });
        break;
      case 'originDescription':
        setUpdatedHeroStats({
          ...updatedHeroStats,
          origin_description: value.trim(),
        });
        break;
      case 'superpowers':
        setUpdatedHeroStats({ ...updatedHeroStats, superpowers: value });
        break;
      case 'catchPhrase':
        setUpdatedHeroStats({
          ...updatedHeroStats,
          catch_phrase: value,
        });
        break;

      default:
        return;
    }
  };

  const fileUploadHandler = e => {
    const images = e.target.files;
    const values = Object.values(images);
    updatedHeroImages.push(...values);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('nickname', updatedHeroStats.nickname.trim());
    formData.append('real_name', updatedHeroStats.real_name.trim());
    formData.append(
      'origin_description',
      updatedHeroStats.origin_description.trim(),
    );
    formData.append('superpowers', updatedHeroStats.superpowers.trim());
    formData.append('catch_phrase', updatedHeroStats.catch_phrase.trim());
    updatedHeroImages
      .reverse()
      .forEach(image => formData.append('images', image));
    updatedHeroStats.images.forEach(image =>
      formData.append('old_images', image),
    );

    console.log('formData', formData.getAll('old_images'));

    dispatch(heroesOperations.updateHero({ formData, id: chosenHero._id }));

    // Closing modal
    onClose();
  };

  // Listeners
  useEffect(() => {
    // Adding listener
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Removing listener
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Close modal on Esc btn push
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Close modal on backdrop click
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Form onSubmit={handleOnSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="nickname"
            value={updatedHeroStats.nickname}
            onChange={e => handleFormChange(e)}
          />
        </Label>

        <Label>
          Real name
          <Input
            type="text"
            name="realName"
            value={updatedHeroStats.real_name}
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          Description
          <Input
            type="text"
            name="originDescription"
            value={updatedHeroStats.origin_description}
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          Superpowers
          <Input
            type="text"
            name="superpowers"
            value={updatedHeroStats.superpowers}
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          Catchphrase
          <Input
            type="text"
            name="catchPhrase"
            value={updatedHeroStats.catch_phrase}
            onChange={handleFormChange}
          />
        </Label>

        <InputWrapper>
          <Label htmlFor="upload-input" tabIndex={0}>
            <LabelText>
              Add Images
              <BsImages />
            </LabelText>

            <Input
              id="upload-input"
              name="file"
              type="file"
              multiple={true}
              onChange={e => fileUploadHandler(e)}
            />
          </Label>
        </InputWrapper>

        <SubmitButton>Update Hero Stats</SubmitButton>
      </Form>
    </Overlay>
  );
}
