import { Note } from '@/types/note';
import axios from 'axios';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

export interface NotesListResponse {
  notes: Note[];
  totalPages: number;
}

export const getNotes = async (
  query: string,
  page: number,
): Promise<NotesListResponse> => {
  const response = await axios.get<NotesListResponse>('/notes', {
    params: {
      search: query,
      page: page,
      perPage: 12,
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

// Дані з конспекту по Next.js//

// export type Note = {
//   id: string;
//   title: string;
//   content: string;
//   categoryId: string;
//   userId: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type NoteListResponse = {
//   notes: Note[];
//   total: number;
// };
// axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

// const delay = (ms: number) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

// export const getNotes = async () => {
//   await delay(500);
//   const res = await axios.get<NoteListResponse>('/notes');
//   return res.data;
// };

// export const getSingleNote = async (id: string) => {
//   const res = await axios.get<Note>(`/notes/${id}`);
//   return res.data;
// };
