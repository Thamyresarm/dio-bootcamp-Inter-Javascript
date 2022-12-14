import React from 'react'
import Button from '../Button';

import { ItemContainer } from './styles';
import { IItemRepo } from './types';

function ItemRepo({repo, handleRemoveRepo}: IItemRepo) {

  // const handleRemove = () => {
  //   console.log(repo.id)
  //   handleRemoveRepo(repo.id)

  // }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <Button name='Remover' onClick={() => handleRemoveRepo(repo.id)} />
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;