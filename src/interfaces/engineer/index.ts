import { HiringRequestInterface } from 'interfaces/hiring-request';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EngineerInterface {
  id?: string;
  skills: string;
  experience: string;
  availability: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  hiring_request?: HiringRequestInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    hiring_request?: number;
  };
}

export interface EngineerGetQueryInterface extends GetQueryInterface {
  id?: string;
  skills?: string;
  experience?: string;
  availability?: string;
  user_id?: string;
  organization_id?: string;
}
