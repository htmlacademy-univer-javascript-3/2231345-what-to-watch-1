import {Film} from '../../types/film';
import {useState} from 'react';
import {FilmPageTabs} from '../../consts';
import Reviews from './reviews/reviews';
import Details from './details/details';
import Overview from './overview/overview';

type TabsProps = {
  film: Film
}

function Tabs({film}: TabsProps) {
  const [currentTab, setCurrentTab] = useState<string>(FilmPageTabs.Overview);

  const setTab = (tab: string) => {
    if (currentTab === tab)
    {return;}
    setCurrentTab(tab);
  };

  const getCurrentTab = (tab: string) => {
    switch (tab) {
      case FilmPageTabs.Reviews:
        return <Reviews reviews={[]}/>;
      case FilmPageTabs.Details:
        return <Details film={film}/>;
      case FilmPageTabs.Overview:
        return <Overview film={film}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === FilmPageTabs.Overview && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTabs.Overview)} className='film-nav__link'>Overview</a>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTabs.Details && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTabs.Details)} className={'film-nav__link'}>Details</a>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTabs.Reviews && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTabs.Reviews)} className='film-nav__link'>Reviews</a>
          </li>
        </ul>
      </nav>
      {getCurrentTab(currentTab)}
    </div>
  );
}

export default Tabs;
