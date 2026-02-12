'use client'

import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !note) return <p>Something went wrong.</p>;

//   const formattedDate = note.updatedAt
//     ? `Updated at: ${note.updatedAt}`
//     : `Created at: ${note.createdAt}`;
  return (
      <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
};
export default NoteDetailsClient;


//useParams - хук для клієнтських компонентів, який повертає об'єкт із динамічними параметрами поточного маршруту, 
// підставленими з URL; він не приймає жодних аргументів.

//В useQuery потрібно передати той же queryKey, що і для prefetchQuery, 
// щоб дістати із кешу дані відповідної нотатки.

//Також обовязково вказуємо, що нам не потрібен повторний запит при монтуванні клієнтського компонента 
// (refetchOnMount: false). Це вимикає повторний запит при монтуванні, оскільки дані вже є з prefetchQuery.