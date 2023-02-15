import { IMove } from '../../../../shared/interfaces/move.interface';

export class Move implements IMove {
  id: number;
  name: string;
  description: string;
  url: string;
}
