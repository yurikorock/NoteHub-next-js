import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHUB. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: Shaplavskiy Yurii</p>
      <p>
        Contact us:
        <a href="mailto:yurashaplavsky@gmail.com">yurashaplavsky@gmail.com</a>
      </p>
    </div>
  </div>
</footer>

  );
}
