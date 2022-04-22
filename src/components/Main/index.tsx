import * as S from './styles'

const Main = ({
  title = 'Bio-Codigos - Terapias Integrativas',
  description = 'Terapia de TODOS - O maior clube de descontos terapêuticos do Brasil'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/terapia-de-todos.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/teraphy-banner.jpg"
      alt="imagem de um desenvolvedor em frente a uma tela com códigos"
    />
  </S.Wrapper>
)

export default Main
