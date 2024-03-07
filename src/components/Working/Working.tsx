import Picture from '../Picture/Picture';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './Working.module.scss';

function Working() {
  const {
    'projects-wrapper': projectsWrapper,
    'projects-list': projectsList,
    'projects-item': projectsItem,
    'company-title': companyTitle,
    'project-desctiption': projectDesctiption,
    'img-wrapper': imgWrapper,
    'project-text': projectText,
  } = styles;

  return (
    <div className={projectsWrapper}>
      <div className={projectsList}>
        <ProjectItem className={projectsItem}>
          <h3 className={companyTitle}>
            <a
              href="https://ligaa.agency/portfolio.html"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Лига А
            </a>
          </h3>
          <div className={projectDesctiption}>
            <Picture
              imgName="avito"
              className={imgWrapper}
            />
            <p className={projectText}>
              Проект{' '}
              <a
                href="https://explore.avito.tech/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Пристрой кота
              </a>{' '}
              - это одностраничный сайт для наглядной демонстрации работы Авито. В проекте
              использовалась верстка по БЭМ, анимация GSAP. Моими задачами были: верстка некоторых
              блоков сайта, анимация (меню, первый экран раздела Публикация, модальные окна funfact)
              и некоторые небольшие задачи.
            </p>
          </div>
        </ProjectItem>
        <p className={projectsItem}>
          Остальные проекты Лиги А находятся под NDA. Уровень проектов компании можно оценить на
          странице{' '}
          <a
            href="https://ligaa.agency/portfolio.html"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Проекты
          </a>
        </p>
      </div>
    </div>
  );
}

export default Working;
