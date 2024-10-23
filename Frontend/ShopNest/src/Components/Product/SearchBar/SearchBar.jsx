import { useEffect } from "react";
import './SearchBar.css'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next';
import { languages } from '../../LanguageSelector/LanguageSelector'
import { Link } from "react-router-dom";

// React Icons
import { BsSearch } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";


function SearchBar(props) {

    const { t, i18n } = useTranslation();
    const { sell } = t("ProductPage");

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language])

    return (
        <>
            <div className="search_container">
                <div className="search_bar">
                    <input
                        className="search"
                        onChange={(e) => props.handleSearch && props.handleSearch(e.target.value)}
                        placeholder="Search..." type="text"
                        value={props && props.search}
                    />
                    <BsSearch className="search_light_icon" onClick={() => props.handleClick && props.handleClick()} />
                </div>

                <div className="filter" onClick={() => props.handleFilter && props.handleFilter()} >
                    <LuFilter className='filter_icon' />
                </div>

                <div className='language_filter dropdown'>
                    <GrLanguage className='dropdown_button' />
                    <div className='dropdown_content'>
                        {languages && languages.map((language) => (
                            <button key={language.code} onClick={() => changeLanguage(language.code)} >{language.lang}</button>
                        ))}
                    </div>
                </div>

                <div className="wrap">
                    <Link to='/selling-page'><button className="button">{sell}</button></Link>
                </div>
            </div>
        </>
    )
}

export default SearchBar