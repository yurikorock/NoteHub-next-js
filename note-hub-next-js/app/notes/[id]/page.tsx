// import { getSingleNote } from '@/lib/api';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};
export default NoteDetails;

//prefetchQuery - функція, яка завчасно завантажить нам ці нотатки та збереже їх у кеш на сервері.
// Завдяки цьому при виклику useQuery у клієнтському компоненті, дані вже будуть доступні -
//  без повторного запиту.

//queryKey - ключ, за яким дані будуть збережені у кеш
//queryFn - функція HTTP-запиту

//Для того, щоб використати ці дані в клієнтському компоненті,
// необхідно використати HydrationBoundary із React Query.

//HydrationBoundary - компонент, передає кеш клієнту
//dehydrate(queryClient) - перетворює кеш у серіалізований обʼєкт
