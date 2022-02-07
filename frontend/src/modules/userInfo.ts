const SET_USERINFO = 'SET_USERINFO' as const;

export const userInfoHandler = (id: number, name: string) => ({
  type: SET_USERINFO,
  payload: { id, name }
})

type UserInfoAction =
  | ReturnType<typeof userInfoHandler>;

type UserInfoState = {
  id: number;
  name: string;
}

const initialState: UserInfoState = {
  id: 0,
  name: 'none'
}

function userInfo(
  state: UserInfoState = initialState,
  action: UserInfoAction
): UserInfoState {
  switch (action.type) {
    case SET_USERINFO:
      return {id: action.payload.id, name: action.payload.name}
    default:
      return state;
  }
}

export default userInfo;