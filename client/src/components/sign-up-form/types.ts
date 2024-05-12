export interface RegisterUserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterUserRequestBody {
  email: string;
  password: string;
  fullName: string;
}
