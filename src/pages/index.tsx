import KaKaoButton from 'components/button/kakao';
import { ButtonLayout } from 'components/button/style';
import SpinnerIcon from 'components/spinner';
import TapeSVG from 'components/tape/tape';
import useLoading from 'hooks/useLoading';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container, Zone } from 'styles';
import mainInstance from 'utils/api/main';
import { getAuthToken } from 'utils/storage/authCookie';

export default function Home() {
  const auth = getAuthToken('accessToken');
  const router = useRouter();

  const { isLoading: isKaKaoLoading, setIsLoading: setIsKaKaoLoading } =
    useLoading();
  const { isLoading: isCommonLoading, setIsLoading: setIsCommonLoading } =
    useLoading();

  useEffect(() => {
    if (auth) {
      mainInstance.getUserInfo().then((data) => {
        data?.result.tapes.length === 0
          ? router.push('/create-tape')
          : router.push('/create-tape-completed');
      });
    }
  }, []);

  const LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/kakao/bridge`;
  return (
    <Container>
      <Zone css={{ gridGap: '32px' }}>
        <div>
          <h1>2023 Voice Tape</h1>
          <h2>테이프에 담은 내 마음</h2>
        </div>
        <TapeSVG
          title="2023 한정판 테이프"
          date="23.01.01"
          sec="144"
          color="cassette_orange"
        />
        <p>
          평소 전하지 못했던 마음을
          <br /> 목소리로 담아보세요 ♡
        </p>
      </Zone>
      <Zone css={{ gap: '16px', paddingTop: ' 106px' }}>
        <KaKaoButton
          url={LOGIN_URL}
          onClick={() => setIsKaKaoLoading(true)}
          isLoading={isKaKaoLoading}
        />

        <ButtonLayout
          aria-label="로그인하기"
          variant="main"
          onClick={() => {
            setIsCommonLoading(true);
            router.push(LOGIN_URL);
          }}
          isLoading={isCommonLoading}
          disabled={isCommonLoading}
        >
          {isCommonLoading ? <SpinnerIcon /> : <span>내 테이프 만들기</span>}
        </ButtonLayout>
      </Zone>
    </Container>
  );
}
