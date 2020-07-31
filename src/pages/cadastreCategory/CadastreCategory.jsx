/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CategoryWrapper from './style';
import Form from '../../components/form/Form';
import FormField from '../../components/formField/FormField';
import FormButtonGroup from '../../components/formButtonGroup/FormButtonGroup';
import Button from '../../components/button/Button';

const URL_BASE = 'http://localhost:8080/categories';

export default function CadastreCategory() {
  const initialState = {
    name: '',
    description: '',
    color: '#FF0000',
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ ...initialState });

  useEffect(() => {
    axios.get(URL_BASE)
      .then(async (resp) => {
        const response = await resp.data;
        setCategories([...response]);
      });
  }, [
  ]);

  function updateField(event) {
    const newCategory = { ...category };
    newCategory[event.target.name] = event.target.value;
    setCategory(newCategory);
  }

  function getUpdatedCategories(newCategory) {
    const newCategories = categories.filter((c) => c.id !== newCategory.id);
    newCategories.unshift(newCategory);
    setCategories(newCategories);
  }

  function clear() {
    setCategory({ ...initialState });
  }

  function save() {
    if (!category.name.trim() || !category.description.trim()) return;

    axios.post(URL_BASE, category)
      .then((resp) => {
        getUpdatedCategories(resp.data);
        clear();
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    save();
  }

  return (
    <CategoryWrapper>
      <h1>Cadastro de categoria</h1>

      <Form onSubmit={handleSubmit}>

        <FormField
          idField="name-category"
          type="text"
          name="name"
          label="Nome da categoria"
          placeholder="Informe o nome da categoria..."
          value={category.name}
          onChange={updateField}
        />

        <FormField
          idField="description-category"
          type="textarea"
          name="description"
          label="Descrição da categoria"
          placeholder="Informe a descrição da categoria..."
          value={category.description}
          onChange={updateField}
        />

        <FormField
          idField="color-category"
          type="color"
          name="color"
          label="Cor da categoria"
          value={category.color}
          onChange={updateField}
        />

        <FormButtonGroup>
          <Button className="register" onClick={handleSubmit}>Cadastrar</Button>
          <Button className="clean" onClick={clear}>Limpar</Button>
        </FormButtonGroup>
      </Form>

      <ul>
        { categories.map((category) => (
          <li key={category.id}>
            {category.name}
            {' '}
            -
            {' '}
            {category.description}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </CategoryWrapper>
  );
}