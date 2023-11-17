import type { Request } from 'express';
import { User } from './users/entities/user.entity';

export type dbConfigs = {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
};

export enum ResourceLockStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum ResourceEnumPrefix {
  BANKTRANSFER = 'bankTransfer',
}

export interface BaniVirtualAccountResponse {
  message: string;
  status: boolean;
  status_code: number;
  payment_reference: string;
  holder_account_number: string;
  amount: string;
  payment_ext_reference: string;
  account_type: string;
  account_name: string;
  custom_data: any | null;
}

export interface BaniEnquiryAccountResponse {
  message: string;
  status: boolean;
  status_code: number;
  data: {
    account_trade_name: string;
    fiat_wallet_details: {
      available_balance: string;
      currency: string;
      modified_date: string;
      pub_date: string;
      total_balance: string;
      wallet_account_ref: string;
      wallet_alias: string;
    }[];
  };
}

declare global {
  interface AuthRequest extends Request {
    user: User;
  }
}
