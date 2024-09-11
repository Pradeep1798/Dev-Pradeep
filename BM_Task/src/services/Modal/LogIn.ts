export type LoginRequestDetails = {
  phone: string;
  password: string;
};

export type SignUpRequestDetails = {
  phone: string;
  password: string;
  name: string;
};

export type SignUpResponseDetails = {
  data: {
    id: number;
    name: string;
    phone: string;
    profile_picture: null;
    is_active: number;
    password: string;
    deleted_at: null;
    fcmtoken: null;
    created_at: string;
    updated_at: string;
  };
  message: string;
  status: boolean;
};
