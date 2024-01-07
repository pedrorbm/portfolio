import React from 'react';
import astroProfile from '../images/astro-skill.png';

function Profile() {
  return (
    <section id="container-profile">
      <h1 className="title-profile">
        <span className="title-profile title-about">SOBRE </span>
        MIM
      </h1>
      <div className="sub-container-profile">
        <div className="profile-image">
          <img src={astroProfile} alt="Imagem de um astronauta" className="img-astro-profile" />
        </div>
        <artcile className="profile-group">
          <h3 className="profile-description">
            Meu nome é Pedro, tenho 24 anos e atualmente moro em Natal/RN. Aprendi a usar o
            computador sozinho desde pequeno, sempre pesquisando e interessado em aprender e
            resolver os problemas que encontrava no caminho. Amo tecnologia, sempre tive interesse
            na área e só bastou ter meu primeiro contato com a programação para me apaixonar.
          </h3>
          <br />
          <h3 className="profile-description">
            Diante aos desafios cativantes que a programação me ofereceu foi o que me conquistou
            e então nasceu a vontade insaciável de conhecimento na área. Acabei conhecendo a Trybe,
            fiz o processo seletivo e entrei sabendo que meu lugar é na programação! Ao longo do
            curso adquiri muito conhecimento e fiz mais de 30 projetos para fixar o conhecimento,
            divididos entre a área de Front-End e Back-End até conquistar o tão sonhado Full Stack.
          </h3>
        </artcile>
      </div>
    </section>
  );
}

export default Profile;
