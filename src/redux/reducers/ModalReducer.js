import { SHOW_MODAL, HIDE_MODAL } from "../constants/ModalConstant";

const initialState = {
  isShow: false,
};

export const ModalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SHOW_MODAL:
      state.isShow = true;
      return { ...state };
    case HIDE_MODAL:
      state.isShow = false;
      return { ...state };

    default:
      return {...state};
  }
};
