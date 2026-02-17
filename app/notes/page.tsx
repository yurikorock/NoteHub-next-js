import css from './Notes.module.css';
import { getNotes } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import AppClient from './Notes.client';

const App = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', { query: '', page: 1 }],
    queryFn: () => getNotes('', 1),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppClient />
      </HydrationBoundary>
    </div>
  );
};

export default App;

// 'use client';

// import NoteList from '@/components/NoteList/NoteList';
// import { getNotes, Note } from '@/lib/api';
// import { useState } from 'react';

// const Notes = () => {
//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleCLick = async () => {
//     const response = await getNotes();
//     if (response?.notes) {
//       setNotes(response.notes);
//     }
//   };
//   return (
//     <section>
//       <h1>Notes List</h1>
//       <button onClick={handleCLick}>Get my notes</button>
//       {notes.length > 0 && <NoteList notes={notes} />}
//     </section>
//   );
// };
// export default Notes;
