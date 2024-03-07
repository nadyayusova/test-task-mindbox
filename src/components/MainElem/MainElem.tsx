import { useState } from 'react';
import TabButton from '../Buttons/TabButton/TabButton';
import Resume from '../Resume/Resume';
import Working from '../Working/Working';
import Personal from '../Personal/Personal';
import styles from './MainElem.module.scss';

const TabIds: string[] = ['resume', 'working', 'personal'];
const TabCaptions: string[] = ['Резюме', 'Рабочие проекты', 'Личные проекты'];
const TabContent = [<Resume />, <Working />, <Personal />];

function Main() {
  const [tab, setPart] = useState<string>(TabIds[0]);

  function tabClick(tab: string): void {
    setPart(tab);
  }

  const { main, 'tabs-wrapper': tabsWrapper } = styles;

  return (
    <main className={main}>
      <div className="container">
        <h2 className="visually-hidden">Портфолио фронтенд разработчика</h2>

        <div className={tabsWrapper}>
          {TabIds.map((item, index) => (
            <TabButton
              key={item}
              isActive={tab === item}
              onClick={() => tabClick(item)}
            >
              {TabCaptions[index]}
            </TabButton>
          ))}
        </div>

        {TabContent[TabIds.indexOf(tab)]}
      </div>
    </main>
  );
}

export default Main;
