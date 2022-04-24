import * as S from './styles'

const Main = ({
  title = 'Biocódigos - Terapias Integrativas',
  description = 'Terapia de TODOS - O maior clube de descontos terapêuticos do Brasil'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/terapia-de-todos.png"
      alt="Terapia de TODOS - O maior clube de descontos terapêuticos do Brasil"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/teraphy-banner.jpg"
      alt="imagem ilustrativa de uma pessoa em consulta de terapia"
    />
  </S.Wrapper>
)

export default Main
