import React from "react";
import s from "./Main_Content.module.css";
import Slider_My from "./Slider_My/Slider_My";

const Main_Content = () => {
    return (
        <div className={s.container}>
            <div className={s.welcome_phrase_container}>
                <h1 className={s.welcome_phrase}>Добро пожаловать<br /> в академию!</h1>
            </div>
            <div className={s.person_all_info}>
                <div className={s.person_picture}></div>
                <div className={s.person_description}>
                    <div className={s.description_head}>
                        <div className={s.person_name}>Виктория Попова</div>
                        <div className={s.birth_date}>08.03.2001</div>
                    </div>
                    <div className={s.main_person_info}>
                        <div className={s.city}><span>Город: </span>Томск</div>
                        <div className={s.sex}><span>Пол: </span>женщина</div>
                        <div className={s.icon_sex}></div>
                        <div  className={s.age}><span>Возраст: </span>22</div>
                    </div>
                    <div className={s.about_yourself}><span>О себе: </span>Всем привет! Меня зовут Вика, мне 21 год. Я обучаюсь на web-программиста самостоятельно.<br /> Моя цель - стажироваться на позицию Frontend разработчика. Надеюсь, академия iLink даст мне возможность прокачать свои hard и soft skills, а также поработать с опытными наставниками вместе<br /> с командой таких же как и я начинающих разработчиков.</div>
                    <div className={s.about_yourself_btw}>BTW: </div>
                    <div className={s.pet}><div className={s.pet_icon}></div><span>Домашнее животное: </span>есть</div>
                </div>
            </div>
            <div className={s.reviews_container}>
                <Slider_My />
            </div>
        </div>
    )
}

export default Main_Content;