import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { footer } = styles;

  return (
    <footer className={footer}>
      <div className="container">
        <a
          href="https://nadyayusova.github.io/react-typescript-portfolio/assets/yusova-nadya-resume.pdf"
          download
        >
          Скачать резюме
        </a>
      </div>
    </footer>
  );
};

export default Footer;
