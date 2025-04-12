export type Book = {
    _id: string;
    title: string;
    author: string;
    genre?: string;
    city: string;
    status: 'Available' | 'Rented';
    owner: {
      email: string;
      mobile: string;
    };
};

export type EditModalProps = {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedBook: Book) => void;
}

export type LoginFormData = {
    email: string;
    password: string;
};

export type SignupFormData = {
    name: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
}

export type User = {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  role: 'Owner' | 'Seeker';
};