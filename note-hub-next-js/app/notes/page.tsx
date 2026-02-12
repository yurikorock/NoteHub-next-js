import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

const Notes = async () => {
  const response = await getNotes('',1);

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;




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
