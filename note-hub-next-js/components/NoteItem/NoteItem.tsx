import { Note } from '@/lib/api';
import Link from 'next/link';

type Prop = {
  item: Note;
};

const NoteItem = ({ item }: Prop) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default NoteItem;
