import {useState} from 'react';
import {FilmPageTab} from '../../consts';
import Reviews from './reviews/reviews';
import Details from './details/details';
import Overview from './overview/overview';

function Tabs() {
  const [currentTab, setCurrentTab] = useState<FilmPageTab>(FilmPageTab.Overview);

  const setTab = (tab: FilmPageTab) => {
    if (currentTab === tab)
    {return;}
    setCurrentTab(tab);
  };

  const getCurrentTab = (tab: string) => {
    switch (tab) {
      case FilmPageTab.Reviews:
        return <Reviews/>;
      case FilmPageTab.Details:
        return <Details/>;
      case FilmPageTab.Overview:
        return <Overview/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === FilmPageTab.Overview && 'film-nav__item--active'}`}>
            <button onClick={() => setTab(FilmPageTab.Overview)} className='film-nav__link'>Overview</button>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTab.Details && 'film-nav__item--active'}`}>
            <button onClick={() => setTab(FilmPageTab.Details)} className={'film-nav__link'}>Details</button>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTab.Reviews && 'film-nav__item--active'}`}>
            <button onClick={() => setTab(FilmPageTab.Reviews)} className='film-nav__link'>Reviews</button>
          </li>
        </ul>
      </nav>
      {getCurrentTab(currentTab)}
    </div>
  );
}

export default Tabs;
