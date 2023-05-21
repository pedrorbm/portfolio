import React from 'react';
import astroProfile from '../images/astro-sobre.png';

function Profile() {
  return (
    <div className="container-profile">
      <h1 className="title-profile">SOBRE MIM</h1>
      <div className="sub-container-profile">
        <div className="profile-group">
          <h3 className="profile-description">
            Olá, meu nome é Pedro, tenho 24 anos e atualmente moro em Natal/RN. Aprendi a usar o computador sozinho desde pequeno, 
            sempre pesquisando e interessado em aprender e resolver os problemas que encontrava no caminho. 
            Amo tecnologia, sempre tive interesse na área e só bastou ter meu primeiro contato com a programação para me apaixonar. 
          </h3>
          <br />
          <h3 className="profile-description">
            Diante aos desafios cativantes que a programação me ofereceu foi o que me conquistou e então nasceu a vontade insaciável de conhecimento na área. 
            Ao procurar por um curso específico de programação acabei conhecendo a Trybe, fiz o processo seletivo e entrei já sabendo que meu lugar é na programação! 
          </h3>
          <br />
          <h3 className="profile-description">
            Durante esse tempo de curso já adquiri muito conhecimento e já fiz muitos projetos para fixar o conhecimento. 
            Sempre em busca de evoluir, novos desafios, adquirir novos conhecimentos e a caminho de se tornar um Desenvolvedor Web Full Stack!
          </h3>
        </div>
        <div className="profile-image">
          <img src={ astroProfile } alt="Imagem de um astronauta" className="img-astro-profile" />
        </div>
      </div>
    </div>
  )
};

export default Profile;
