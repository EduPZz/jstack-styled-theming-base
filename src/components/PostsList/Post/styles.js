import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.article`
  background: ${ ({ theme }) => theme.curentTheme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: ${ ({ theme }) => theme.commonStyle.borderRadius.postBackgroundColor};

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: 8px;
  }
`;
