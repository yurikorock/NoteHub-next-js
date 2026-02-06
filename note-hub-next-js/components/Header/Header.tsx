import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
        <h2>Note HUB</h2>
      <nav>
        <ul className={css.navigation}>
          <li>Home</li>
          <li>Notes</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
