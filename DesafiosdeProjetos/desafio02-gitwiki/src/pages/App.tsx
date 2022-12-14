import { useState } from 'react';
import Button from '../componentes/Button';
import Input from '../componentes/Input';
import ItemRepo from '../componentes/ItemRepo';
import { api } from '../services/api';
import gitLogo from '../assets/github.png'
import { Container } from './styles';
import { IRepo } from '../componentes/ItemRepo/types';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState<IRepo[]>([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado ou já adicionado!')

  }

  const handleRemoveRepo = (id: string) => {
    console.log('Removendo registro', id);
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/> 
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button name='Buscar' onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
