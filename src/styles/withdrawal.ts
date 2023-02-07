import styled from '@emotion/styled';
import { ButtonLayout } from 'components/button/style';

import theme from './theme';

export const WithdrawalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 24px;

  h1,
  h2 {
    margin: 0;
    color: ${theme.colors.white};
    align-items: center;
  }

  h2 {
    font-family: 'Pretendard-Regular';
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }
`;

export const CloseZone = styled.div`
  position: absolute;
  display: flex;
  top: 71px;
  right: 26px;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 36px;

  h1 {
    font-family: 'Ycomputer-Regular';
    font-size: ${theme.fontSize.xl};
    font-weight: 400;
  }
`;

export const SubText = styled.div`
  width: 100%;
  padding-top: 8px;

  span {
    color: ${theme.colors.warning_red};
  }
`;

export const WithdrawalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    padding-bottom: 2px;
  }
`;

export const SubmitZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 135px;
`;

export const WithdrawalButton = styled(ButtonLayout)`
  background-color: ${theme.colors.warning_red};
  color: ${theme.colors.gray_50};

  &:disabled {
    background-color: ${theme.colors.warning_red_disabled};
    color: ${theme.colors.gray_400};
    cursor: default;
  }
`;