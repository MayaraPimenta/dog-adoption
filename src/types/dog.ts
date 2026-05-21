export interface Shelter {
  name: string;
  address: string;
  phone: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  imageUrl: string;
  description?: string;
  shelter: Shelter;
}

export type SwipeDirection = 'left' | 'right';

export interface SwipeEvent {
  dogId: string;
  direction: SwipeDirection;
}
