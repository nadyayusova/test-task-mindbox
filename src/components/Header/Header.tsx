import CopyButton from '../Buttons/CopyButton/CopyButton';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const {
    header,
    wrapper,
    'application-title': applicationTitle,
    'applicant-name': applicantName,
    contact,
    'contact-link': contactLink,
  } = styles;

  return (
    <header className={header}>
      <div className="container">
        <div className={wrapper}>
          <h1 className={applicationTitle}>todos</h1>
          <div>
            <p className={applicantName}>Юсова Надежда</p>
            <div className={contact}>
              <CopyButton copyText="https://t.me/nadyayusova" />
              <a
                className={contactLink}
                href="https://t.me/nadyayusova"
                rel="nofollow noopener noreferrer"
                target="_blank"
                title="Написать в Телеграм"
              >
                https://t.me/nadyayusova
              </a>
            </div>
            <div className={contact}>
              <CopyButton copyText="yusova.nadya.prof@gmail.com" />
              <a
                className={contactLink}
                href="mailto:yusova.nadya.prof@gmail.com"
                title="Написать письмо"
              >
                yusova.nadya.prof@gmail.com
              </a>
            </div>
            <div className={contact}>
              <CopyButton copyText="https://github.com/nadyayusova" />
              <a
                className={contactLink}
                href="https://github.com/nadyayusova"
                title="Перейти на GitHub"
              >
                GitHub-репозиторий
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
