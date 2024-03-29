import Kakao from '@icon/kakao.svg';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

import SpinnerIcon from '../spinner';
import { ButtonProps } from '.';
import { KaKaoButtonLayout } from './style';

interface KaKaoButtonProps extends Pick<ButtonProps, 'isLoading'> {
  isLoading: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  url: string;
}

const KaKaoButton = ({ isLoading, url, onClick }: KaKaoButtonProps) => {
  return (
    <>
      <Link href={url}>
        <KaKaoButtonLayout
          onClick={onClick}
          isLoading={isLoading}
          role="button"
        >
          <>
            {isLoading ? (
              <SpinnerIcon />
            ) : (
              <div>
                <Kakao />
                <span>카카오 로그인</span>
              </div>
            )}
          </>
        </KaKaoButtonLayout>
      </Link>
    </>
  );
};

export default KaKaoButton;
