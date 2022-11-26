import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchQuestionAction = createAsyncThunk<Questions, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Questions>(APIRoute.Questions);
    return data;
  },
);
