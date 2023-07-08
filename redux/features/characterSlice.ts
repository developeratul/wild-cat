import client from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// GraphQL query
const FETCH_CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        image
      }
    }
  }
`;

// Define the character type
interface Character {
  name: string;
  image: string;
}

// Define the info type
interface Info {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

interface FetchCharactersPayload {
  characters: Character[];
  info: Info;
}

// Define the state shape
interface CharacterState {
  characters: Character[];
  info: Info | null;
  loading: boolean;
  error: string | null;
}

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ currentPage }: { currentPage: number }) => {
    const {
      characters: { info, results },
    } = (
      await client.query<any, { page: number }>({
        query: FETCH_CHARACTERS_QUERY,
        variables: { page: currentPage },
      })
    ).data;
    return { characters: results, info };
  }
);

// Define the initial state
const initialState: CharacterState = {
  characters: [],
  info: null,
  loading: true,
  error: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<FetchCharactersPayload>) => {
          const { characters, info } = action.payload;
          state.loading = false;
          state.characters = characters;
          state.info = info;
          return state;
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export const selectCharacter = (state: RootState) => state.character;

export const {} = characterSlice.actions;

export default characterSlice.reducer;
