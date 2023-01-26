import Button from 'components/button';
import Input from 'components/input';
import Tape from 'components/tape';
import Title from 'components/title';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { useUserStore } from 'store';
import { Box, Info, InputBox } from 'styles/create-tape';

const MAX_LENGTH = {
  NICKNAME: 5,
  TITLE: 16,
};
const CreateTape = () => {
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const { setUserData } = useUserStore();

  const handleChangeNickname = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNickname(target.value);
  };

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  return (
    <Box>
      <Box margin="0 0 24px 0">
        <Title name="닉네임" />
      </Box>
      <Box margin="0 0 44px 0">
        <Tape
          title="테이프의 제목이 여기에 적혀요!"
          date="21.01.01"
          sec="144"
        />
      </Box>
      <InputBox>
        <Input
          value={nickname}
          onChange={handleChangeNickname}
          label="카세트 주인장의 닉네임을 적어주세요."
          highlightWords={['닉네임']}
          placeholder="닉네임을 적어주세요."
          maxLength={MAX_LENGTH.NICKNAME}
        />
      </InputBox>

      <InputBox>
        <Input
          value={title}
          onChange={handleChangeTitle}
          label="테이프의 제목을 적어주세요."
          highlightWords={['테이프의 제목']}
          placeholder="테이프의 제목을 적어주세요."
          maxLength={MAX_LENGTH.TITLE}
        />
        <Info>
          친구들에게 어떤 얘기를 듣고싶나요?
          <br />
          ex&#41; 2023년 나의 새로운 도전을 응원해줘!
        </Info>
      </InputBox>
      <Link href="/decorate-tape">
        <Button
          onClick={() => {
            setUserData(nickname, title);
          }}
          variant="main"
        >
          작성 완료
        </Button>
      </Link>
    </Box>
  );
};

export default CreateTape;
