import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {
  Section,
  Form,
  Label,
  LabelText,
  Input,
  InputWrapper,
  SubmitButton,
} from './NewHero.styled';
import FormData from 'form-data';

import * as heroesOperations from '../../redux/heroes/heroes-operations';

export default function NewHero() {
  const dispatch = useDispatch();

  const [newHero, setNewHero] = useState({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
  });

  const [heroImages, setHeroImages] = useState([]);

  //getting form value to state
  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'nickName':
        setNewHero({ ...newHero, nickname: value.trim() });
        break;
      case 'realName':
        setNewHero({ ...newHero, real_name: value.trim() });
        break;
      case 'originDescription':
        setNewHero({ ...newHero, origin_description: value.trim() });
        break;
      case 'superpowers':
        setNewHero({ ...newHero, superpowers: value.trim() });
        break;
      case 'catchPhrase':
        setNewHero({ ...newHero, catch_phrase: value.trim() });
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('nickname', newHero.nickname);
    formData.append('real_name', newHero.real_name);
    formData.append('origin_description', newHero.origin_description);
    formData.append('superpowers', newHero.superpowers);
    formData.append('catch_phrase', newHero.catch_phrase);
    heroImages.forEach(image => formData.append('images', image));

    dispatch(heroesOperations.addNewHero(formData));

    e.traget.form.reset();
  };

  const fileUploadHandler = e => {
    const images = e.target.files;
    const values = Object.values(images);
    heroImages.push(...values);
  };

  return (
    <Section>
      <Form onSubmit={e => handleFormSubmit(e)} encType="multipart/form-data">
        <Label>
          <LabelText>Nickname:</LabelText>

          <Input
            name="nickName"
            value={newHero.nickname}
            autoFocus
            required
            placeholder="..Superman"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Real name:</LabelText>
          <Input
            name="realName"
            value={newHero.real_name}
            required
            placeholder="..Clark Kent"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Origin Description:</LabelText>
          <Input
            name="originDescription"
            value={newHero.origin_description}
            required
            placeholder="...he was born Kal-El on the planet Krypton"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Superpowers:</LabelText>
          <Input
            name="superpowers"
            value={newHero.superpowers}
            required
            placeholder="...solar energy absorption and healing factor"
            onChange={handleFormChange}
          />
        </Label>

        <Label>
          <LabelText>Catchphrase:</LabelText>
          <Input
            name="catchPhrase"
            value={newHero.catch_phrase}
            required
            placeholder="...Look, up in the sky, it's a bird, it's Superman!"
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
              required
              onChange={e => fileUploadHandler(e)}
            />
          </Label>
        </InputWrapper>

        <SubmitButton>Create new Hero</SubmitButton>
      </Form>
    </Section>
  );
}
