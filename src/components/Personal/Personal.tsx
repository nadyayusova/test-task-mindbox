import Picture from '../Picture/Picture';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './Personal.module.scss';

function Personal() {
  const {
    'projects-wrapper': projectsWrapper,
    'projects-list': projectsList,
    'projects-item': projectsItem,
    'project-title': projectTitle,
    'project-desctiption': projectDesctiption,
    'img-wrapper': imgWrapper,
    'project-text': projectText,
  } = styles;

  return (
    <div className={projectsWrapper}>
      <ul className={projectsList}>
        <ProjectItem
          as="li"
          className={projectsItem}
        >
          <h3 className={projectTitle}>Тестовое задание</h3>
          <div className={projectDesctiption}>
            <Picture
              className={imgWrapper}
              imgName="vrnas"
            />
            <p className={projectText}>
              <a
                href="https://nadyayusova.github.io/vrnas-no-src/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Тестовое задание в одну из компаний.
              </a>{' '}
              Три страницы, адаптивная верстка по БЭМ, GSAP анимация, PixelPerfect.{' '}
              <a
                href="https://github.com/nadyayusova/vrnas-no-src"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ссылка на репозиторий.
              </a>
            </p>
          </div>
        </ProjectItem>
        <ProjectItem
          as="li"
          className={projectsItem}
        >
          <h3 className={projectTitle}>Тестовое задание</h3>
          <div className={projectDesctiption}>
            <Picture
              className={imgWrapper}
              imgName="rick"
            />
            <p className={projectText}>
              <a
                href="https://nadyayusova.github.io/test-task-elfsight/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Тестовое задание в одну из компаний.
              </a>{' '}
              Используя Rick and Morty API, необходимо реализовать веб-приложение на React.
              Пользователь может удобно просматривать всех персонажей и информацию о них. Можно
              фильтровать персонажей по имени, статусу, виду, типу и полу. Пользователь может
              открыть всплывающее окно (popup) с полной информацией о персонаже. Для стилизации
              компонентов необходимо использовать библиотеку Styled Components. Не использовано
              сторонних библиотек с готовыми компонентами. Требований к дизайну нет.{' '}
              <a
                href="https://github.com/nadyayusova/test-task-elfsight"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ссылка на репозиторий.
              </a>
            </p>
          </div>
        </ProjectItem>
        <ProjectItem
          as="li"
          className={projectsItem}
        >
          <h3 className={projectTitle}>Учебный проект</h3>
          <div className={projectDesctiption}>
            <Picture
              className={imgWrapper}
              imgName="shelter"
            />
            <p className={projectText}>
              <a
                href="https://nadyayusova.github.io/shelter-JSFE2023Q1/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Учебный проект Rolling Scoprs School.
              </a>{' '}
              Три страницы, адаптивная верстка, PixelPerfect, JavaScript для меню и пагинации.{' '}
              <a
                href="https://github.com/nadyayusova/shelter-JSFE2023Q1"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ссылка на репозиторий.
              </a>
            </p>
          </div>
        </ProjectItem>
        <ProjectItem
          as="li"
          className={projectsItem}
        >
          <h3 className={projectTitle}>Учебный проект</h3>
          <div className={projectDesctiption}>
            <Picture
              className={imgWrapper}
              imgName="cat"
            />
            <p className={projectText}>
              <a
                href="https://nadyayusova.github.io/1336871-cat-energy-24/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Учебный проект HTML Academy "Cat Energy".
              </a>{' '}
              Три страницы, адаптивная верстка по БЭМ, PixelPerfect.{' '}
              <a
                href="https://github.com/nadyayusova/1336871-cat-energy-24"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ссылка на репозиторий.
              </a>
            </p>
          </div>
        </ProjectItem>
        <ProjectItem
          as="li"
          className={projectsItem}
        >
          <h3 className={projectTitle}>Hangman</h3>
          <div className={projectDesctiption}>
            <Picture
              className={imgWrapper}
              imgName="hangman"
            />
            <p className={projectText}>
              <a
                href="https://nadyayusova.github.io/hangman-react/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Игра Hangman.
              </a>{' '}
              Самостоятельное изучение React и TypeScript.{' '}
              <a
                href="https://github.com/nadyayusova/hangman-react"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ссылка на репозиторий.
              </a>
            </p>
          </div>
        </ProjectItem>
      </ul>
    </div>
  );
}

export default Personal;
