import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  itemes: [],
  item: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
