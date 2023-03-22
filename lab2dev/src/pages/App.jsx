import image from "../assets/IMAGE.png"
import undraw from "../assets/undraw.png"
import sap from "../assets/SAP.png"
import { globalStyles } from "../styles/global"
import {Cabecalho,Lista,Menu,Divisa1, Titulo,Paragrafo, Botao,Hometext,Container,Client} from "./app"


function App() {
  globalStyles()
  return (
  <Container>
  <Cabecalho>
    <div>
    <img src= {image} alt="" />
    </div>
    <Lista>
      <Menu href="">Home</Menu>
      <Menu href="">Quem somos</Menu>
      <Menu href="">O que fazemos </Menu>
      <Menu href="">BTP</Menu>
      <Menu href="">AMS</Menu>
      <Menu href="">Blog</Menu>
      <Menu href="">ENG/SPA</Menu>
    </Lista>
  </Cabecalho>

    <Divisa1>
<Hometext>
    <Titulo>INOVAÇÃO E TECNOLOGIA ATRAVÉS DO BTP</Titulo>

    <Paragrafo>Inovação e Tecnologia através do sap btp
      A Lab2Dev é a primeira startup brasileira focada em inovação por meio do SAP BTP (Business Technology Platform). 
      Através de soluções inteligentes, apoiamos a sua empresa na jornada da transformação digital.</Paragrafo>

    <Botao>Saiba mais</Botao>
</Hometext>    

<img src={undraw} alt="" />
    </Divisa1>
 
 <Divisa1>
  <img src={sap}  alt="" />
  <div>
    <Titulo>SOMOS PARCEIROS GOLD SAP</Titulo>
    <Paragrafo>Para se tornar um parceiro Gold SAP, a empresa parceira precisa atender a certos requisitos estabelecidos pela SAP, como demonstrar um alto nível de competência técnica e de negócios, ter um bom histórico de satisfação do cliente, manter uma equipe qualificada e engajada em treinamentos e certificações da SAP, além de atingir metas de vendas e receita.</Paragrafo>

  <Botao>Saiba mais</Botao>
  </div>
 </Divisa1>

 <Client>
  <Titulo>NOSSOS CLIENTES</Titulo>
  <Paragrafo>Atendemos no Brasil, América Latina e na Ásia</Paragrafo>
 </Client>

  </Container>


  )
}

export default App
