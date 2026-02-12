'use client'

// import { getSingleNote } from '@/lib/api';
// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'next/navigation';

// const NoteDetailsClient = () => {
//   const { id } = useParams<{ id: string }>();
//   const {
//     data: note,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['note', id],
//     queryFn: () => getSingleNote(id),
//     refetchOnMount: false,
//   });

//   if (isLoading) return <p>Loading...</p>;

//   if (error || !note) return <p>Some error..</p>;

//   const formattedDate = note.updatedAt
//     ? `Updated at: ${note.updatedAt}`
//     : `Created at: ${note.createdAt}`;
//   return (
//     <div>
//       <h2>{note.title}</h2>
//       <p>{note.content}</p>
//       <p>{formattedDate}</p>
//     </div>
//   );
// };
// export default NoteDetailsClient;


//useParams - хук для клієнтських компонентів, який повертає об'єкт із динамічними параметрами поточного маршруту, 
// підставленими з URL; він не приймає жодних аргументів.

//В useQuery потрібно передати той же queryKey, що і для prefetchQuery, 
// щоб дістати із кешу дані відповідної нотатки.

//Також обовязково вказуємо, що нам не потрібен повторний запит при монтуванні клієнтського компонента 
// (refetchOnMount: false). Це вимикає повторний запит при монтуванні, оскільки дані вже є з prefetchQuery.