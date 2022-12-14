import { useState } from 'react';
import { Header } from '../../componentes/Header';
import ItemList from '../../componentes/ItemList';
import background from '../../assets/background.png';
import './styles.css'

interface IUser {
  avatar_url: string
  name: string
  login: string
  bio: string
}

interface IRepo {
  name: string
  description: string
}

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [repos, setRepos] = useState<IRepo[]>([])

  const getData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if (newUser.name) {
      const { avatar_url, name, login,  bio } = newUser
      setCurrentUser({ avatar_url, name, login,  bio })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepo = await reposData.json()

      if (newRepo.length) {
        setRepos(newRepo);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className="background" alt="background app" />
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username'
              value={user} onChange={event => setUser(event.target.value)} />
            <button onClick={getData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className='perfil'>
                <img className='profile' src={currentUser.avatar_url} alt='Imagem de perfil' />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos.length ? (
              <div>
                <h4 className='repositorio'>Repositórios</h4>
                {repos.map(repo => (
                  <ItemList title={repo.name} description={repo.description} />
                ))}
              </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
