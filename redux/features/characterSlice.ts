import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '@/graphql/apolloClient';
import { RootState } from '../store';

// GraphQL query
const FETCH_CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
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
}

// Define the state shape
interface CharacterState {
  characters: Character[];
  info: Info | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: CharacterState = {
  characters: [],
  info: null,
  loading: false,
  error: null,
};

