import {
  Group,
  Friend,
  User,
  Linkman
} from './reducer';

export enum ActionTypes {
  /** 设置用户信息 */
  SetUser = 'SetUser',
  /** socket 连接成功 */
  Connect = 'Connect',
  /** socket 断开连接 */
  Disconnect = 'Disconnect',
  /** 更新客户端状态 */
  SetStatus = 'SetStatus',
  /** 设置游客信息 */
  SetGuest = 'SetGuest'
}

export interface Action<T = { [key: string]: any }> {
  type: ActionTypes;
  payload: T;
}

export interface SetStatusPayload {
  key: string;
  value: any;
}

export interface SetUserPayload extends User {
  groups: Group[];
  friends: Friend[];
  token: string;
}

export type SetGuestPayload = Linkman;
