export type InitialStateType = {
  mobileNav: boolean;
};

export const initialState = {
  mobileNav: false,
};

function init(initialState: any) {
  return { state: initialState };
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ToggleMobileNav':
      return { ...state, mobileNav: !state.mobileNav };
    case 'Reset':
      return init(action.payload);
    default:
      throw new Error();
  }
};
