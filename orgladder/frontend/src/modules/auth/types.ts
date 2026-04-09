type LoginInput = {
  username: string;
  password: string;
};

type SignupInput = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

type SignupResponse = {
  status: string;
  message: string;
  response: {
    username: string;
    email: string;
  };
  timestamp: string;
};

type LoginResponse = {
  status: string;
  message: string;
  data: {
    token: string;
    tokenType: string;
    expiresIn: number;
    user: {
      username: string;
      userId: string;
      roles: [string];
    };
  };
  timestamp: string;
};

export type { LoginInput, LoginResponse, SignupInput, SignupResponse };
