import { Color } from 'types';

export interface Login {
  result: {
    memberInformation: User;
    jwtInformation: Token;
    tapes: LoginTape[] | [];
  };
  message: number;
  timestamp: string;
}

export interface TapeResponse<T = Tape | User | Cassette[] | Token | Track> {
  result: T;
  message: number;
  timestamp: string;
}

export interface User {
  name: string;
  email: string;
  socialLoginType: SocialLogin;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface Tape {
  id: number;
  colorCode: Color;
  title: string;
  name: string;
  tapeLink: string;
  fileName: null;
  audioLink: null | string;
  createAt: string;
}

interface LoginTape extends Omit<Tape, 'fileName' | 'title'> {
  tapeId: number;
  colorCode: Color;
  name: string;
  tapeLink: string;
  audioLink: null | string;
}

export interface Cassette extends Tape {
  tracks: Track[];
}

export interface Track {
  trackId: number;
  tapeId: number;
  colorCode: Color;
  title: string;
  name: string;
  fileName: string;
  audioLink: string;
  createAt: string;
}

type SocialLogin = 'KAKAO';
