import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.article`
  background: ${ ({ theme }) => theme.curentTheme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${ ({ theme }) => theme.commonStyle.spacing.medium}px;
  border-radius: ${ ({ theme }) => theme.commonStyle.borderRadius};
  h2 {
    margin: 0 0 ${ ({ theme }) => theme.commonStyle.spacing.medium}px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: ${ ({ theme }) => theme.commonStyle.spacing.medium}px;
  }
`;
