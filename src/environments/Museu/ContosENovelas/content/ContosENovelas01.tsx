import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { LoadedContentContainer, ContentTitle, PagesContainer, ContentPage, PaginationFooter, PaginationArrow, PaginationCounter } from '../../sidebarContentStyles';

interface IContent{
  contentTitle: string;
  pages: {
    title: string;
    content: string;
  }[]
}

const contosEnovelas01Content: IContent = {
  contentTitle: 'último domingo',
  pages: [
    {
      title: 'I',
      content: 'Quase uma hora debaixo de quarenta graus na Praça da Bandeira. É duro esperar. Porque os pés estão doendo. Porque o sol de verão está queimando. Porque estou com muita saudade e cada minuto é eternidade. \n\nAté que finalmente. Estendo o braço e tenho que me esticar o corpo todo porque o ônibus vem pela pista de fora quase raspando a lataria do outro que está encostando no meio-fio. Disputam quem vai parar na frente do outro. O de dentro diminui. O de fora acelera. Diminui, o de fora . Acelera, o de dentro. “Filho da puta”, resmungam os motoristas. Na calçada as pessoas recuam: “filhos da puta”. As carcaças enferrujadas rangem. \n\nDe repente um silêncio. Os ônibus seguiram adiante sem parar no ponto. Eu tenho vontade de chorar. Gritar. Espernear. Por que fizeram isso comigo? Eu tenho vontade de pegar um táxi. Fechar o ônibus. Chamar o motorista pra porrada. Acertar um direto no olho dele . Esmagar a cara dele. Acertar um chute no estômago dele . Um outro chute no saco dele. Mas não tenho dinheiro para gastar no táxi. Não tenho coragem pra chamar alguém pra porrada. Mas ninguém sabe disso. Porque digo que acho um absurdo a violência. O uso da força bruta. Agredir um ser humano. Assim eu me preservo. Engano os outros. Engano a mim. \n\nAntigamente eu tinha um carro e não precisava esperar o ônibus. Tinha um salário que me permitia gastar com gasolina. Às vezes dirigia por aí sem rumo certo só pelo prazer de dirigir por aí sem rumo certo. Agora eu digo que acho um absurdo alguém manter um luxo como carro particular. Desperdiçando um combustível em vias de extinção. Contribuindo para a poluição. Para as desigualdades sociais. Digo que o transporte coletivo é a única maneira democrática de locomoção. Mais uma das mentiras que eu falo pra enganar os outros e principalmente a mim mesmo. \n\nAinda bem que não demorou quase nada e chega outro ônibus. No caminho eu fico pensando como acontecerão (têm acontecido) as coisas quando o ônibus parar na pracinha. \n\nCompro um pão doce e um chocolate na padaria. Ele adora aquele sorvete que vem enrolado num laminado dourado mas é muito caro.'
    },
    {
      title: 'I',
      content: 'Compro a revista do Homem Aranha no jornaleiro e aproveito para dar uma olhada nos jornais pendurados. \n\nAtravesso a pracinha pensando em quando eu chegava cedo do trabalho e levava o pequeno para brincar no balanço e no escorrega. Aperto a campainha me sentindo diminuído e estranho do lado de fora da casa enorme e branca onde um dia eu já morei. \n\n“tudo bem com vocês? de noite trago ele de volta” \n\n(não precisava falar: não me interessa como estão; claro que vou trazer ele) \n\n“como eu tava com saudade de você, filho” \n\n(não precisava falar, eu sempre choro na hora do reencontro) \n\n“vamos passear de barco até Niterói?” \n\n“a gente pode ficar junto do motorista?” \n\n“barco não tem motorista; barco tem capitão” \n\n“e pirata?” \n\n“aí é barco de pirata” \n\n“vamos passear no barco do pirata?” \n\n“o barco do pirata fica muito longe daqui” \n\n“quando você tiver dinheiro a gente compra um barco de pirata?”  \n\n“compro, filho” \n\n“e se eu cair do barco e vier o tubarão?” \n\n“você morde o tubarão” \n\n“e se o tubarão me morder?” \n\n“você morde ele com mais força ainda” \n\n“e se eu ficar com medo do tubarão?” \n\n“aí só pode tomar banho de piscina” \n\n“você compra uma piscina pra mim?” \n\n“compro, filho” \n\n“olha lá o ônibus!” \n\n“por que sempre eu tenho que sentar no teu colo?” \n\n“pra guardar dinheiro pra comprar revista” \n\n“tá” \n\n*** \n\n“o que eu vou comer primeiro? o pão doce ou o chocolate?” \n\n“você que sabe, filho” \n\n“quando é que a gente vai no Tipo de Parque?” \n\n“no Tivoli Park ?” \n\n“é” \n\n“quando eu ganhar um dinheiro a gente vai” \n\n“tá” \n\n'
    },
    {
      title: 'I',
      content: 'texto 3'
    }
  ]
}

const ContosENovelas01: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState<IContent>();

  const handleSetPage = (order: 'prev' | 'next') => {
    if(order === 'prev' && currentPage > 0){
      setCurrentPage(currentPage-1);
    }
    if(order === 'next' && content && currentPage < content?.pages.length){
      setCurrentPage(currentPage+1);
    }
  };

  useEffect(()=>{
    setContent(contosEnovelas01Content);
  },[]);

  return(
    <LoadedContentContainer>
      <ContentTitle>{content?.contentTitle}</ContentTitle>

      <PagesContainer>
        <ContentPage>
          <ContentTitle>{content?.pages[currentPage].title}</ContentTitle>
          <p>{content?.pages[currentPage].content}</p>
        </ContentPage>
      </PagesContainer>


      <PaginationFooter>
        <PaginationArrow type="button" onClick={() => handleSetPage('prev')} >
          <FiArrowLeft size={26}/>
        </PaginationArrow>

        <PaginationCounter>{currentPage}</PaginationCounter>

        <PaginationArrow type="button" onClick={() => handleSetPage('next')}>
          <FiArrowRight size={26}/>
        </PaginationArrow>
      </PaginationFooter>
    </LoadedContentContainer>
  );
}

export default ContosENovelas01