import { UserInterface } from 'interfaces/user';
import { EngineerInterface } from 'interfaces/engineer';
import { GetQueryInterface } from 'interfaces';

export interface HiringRequestInterface {
  id?: string;
  status: string;
  user_id: string;
  engineer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  engineer?: EngineerInterface;
  _count?: {};
}

export interface HiringRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  engineer_id?: string;
}
