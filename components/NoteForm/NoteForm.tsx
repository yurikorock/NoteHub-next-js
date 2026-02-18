import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './NoteForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from '@/lib/api';
import toast from 'react-hot-toast';
import { NotePost } from '@/types/note';
import type { FormikHelpers } from 'formik';

interface NoteFormProps {
  onClose: () => void;
}
const initialFormValues: NotePost = {
  title: '',
  content: '',
  tag: 'Todo',
};

export default function NoteForm({ onClose }: NoteFormProps) {
  const queryClient = useQueryClient();

  const { mutate: postMutation, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      onClose();
    },
    onError() {
      toast.error('Error creating note!');
    },
  });

  const handleSubmit = async (
    values: NotePost,
    formikHelpers: FormikHelpers<NotePost>,
  ) => {
    postMutation(values);
    formikHelpers.resetForm();
  };
  return (
    <Formik<NotePost> initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <Field id="title" type="text" name="title" className={css.input} />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <Field as="select" id="tag" name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shoping">Shoping</option>
          </Field>
          <ErrorMessage name="tag" component="span" className={css.error} />
        </div>
        <div className={css.actions}>
          <button type="button" className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className={css.submitButton}
            disabled={isPending}
          >
            Create note
          </button>
        </div>
      </Form>
    </Formik>
  );
}
