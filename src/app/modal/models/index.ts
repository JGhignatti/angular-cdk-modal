export interface ModalState {
  open: boolean;
  position: ModalPosition;
}

export enum ModalPosition {
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

export enum ModalType {
  HOME_1 = 'HOME_1',
  HOME_2 = 'HOME_2',
  SECONDARY = 'SECONDARY',
}
