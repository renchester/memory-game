import githubIcon from '../assets/img/github-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/renchester"
        target="_blank"
        className="footer__link"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          alt="Github icon"
          width="25"
          className="footer__img"
        />
        <p className="footer__desc">Developed by Renchester Ramos</p>
      </a>
    </footer>
  );
}

export default Footer;
