import { useEffect } from "react";
import './SearchBar.css'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next';
import { languages } from '../../LanguageSelector/LanguageSelector'

// React Icons
import { BsSearch } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";


function SearchBar() {

    const {t, i18n} = useTranslation();
    const { sell } = t("ProductPage");

    useEffect(()=> {
        document.body.dir = i18n.dir();
      }, [i18n,i18n.language])

  return (
    <>
        <div className="search_container">
                <div className="search_bar">
                    <input className="search" placeholder="Search..." type="text" />
                    <BsSearch className="search_light_icon" />
                </div>

                <div className="filter">
                    <LuFilter  className='filter_icon' />
                </div>

                <div className='language_filter dropdown'>
                    <GrLanguage className='dropdown_button'/>
                    <div className='dropdown_content'>
                        {languages.map((language) => (
                            <button key={language.code} onClick={() => changeLanguage(language.code)} >{language.lang}</button>
                        ))}
                    </div>
                </div>

                <div className="wrap">
                    <button className="button">{sell}</button>
                </div>
            </div>
    </>
  )
}

export default SearchBar