import React, {Component} from "react";
import useState from "react";
import Slider from "react-slick";
import Form from "./../../Form/Form";
import "./Slider_My.css";

const Slider_Contain = () => {

    // const [modalActive, setModalActive] = useState(true);

    return (
        <div className="reviews_header">
            <h2 className="reviews_phrase">Отзывы</h2>
            <button className="reviews_btn"><span className="plus_in_btn">+</span><span className="long_phrase_btn">Добавить отзыв</span></button>
        </div>
    )
}

export default class Slider_My extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dotsClass: 'slick_dots_my',
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 920,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        };


        return (
            <div className="container">
                <Slider_Contain />
                {/*<Form active={modalActive} setActive={setModalActive}/>*/}
                <div className="my_slides_cont">
                    <Slider ref={c => (this.slider = c)} {...settings} className="slider_main_container">
                        <div key={1}>
                            <div className="item_review_block">
                                <div className="review_flex_block">
                                    <div className="person_info_left">
                                        <div className={"person_r_pic" + " " + "pic_1"}></div>
                                        <div className="person_r_name">Буба Бубенцов</div>
                                    </div>
                                    <div className="person_r_data">08.01.2022</div>
                                </div>
                                <div className="text_review">
                                    Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и
                                    помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по
                                    простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь.
                                    Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно,
                                    оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.
                                </div>
                            </div>
                        </div>
                        <div key={2}>
                            <div className="item_review_block">
                                <div className="review_flex_block">
                                    <div className="person_info_left">
                                        <div className={"person_r_pic" + " " + "pic_2"}></div>
                                        <div className="person_r_name">Илья Анташкевич</div>
                                    </div>
                                    <div className="person_r_data">08.01.2022</div>
                                </div>
                                <div className="text_review">Год назад попытал счастье, откликнулся на вакансию, прошел
                                    собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям
                                    классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом.
                                    Для эффективной работы здесь нужно хорошо знать иностранные языки.
                                </div>

                            </div>
                        </div>
                        <div key={3}>
                            <div className="item_review_block">
                                <div className="review_flex_block">
                                    <div className="person_info_left">
                                        <div className={"person_r_pic" + " " + "pic_3"}></div>
                                        <div className="person_r_name">Юрина Маргарита</div>
                                    </div>
                                    <div className="person_r_data">26.12.2021</div>
                                </div>
                                <div className="text_review">Наша компания благодарна фирме ilink за сотрудничество.
                                    Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со
                                    знанием дела, в установленные сроки. За время работы с компанией значительно
                                    увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный
                                    и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание
                                    сайта компании ilink.
                                </div>
                            </div>
                        </div>
                        <div key={4}>
                            <div className="item_review_block">
                                <div className="review_flex_block">
                                    <div className="person_info_left">
                                        <div className={"person_r_pic" + " " + "pic_4"}></div>
                                        <div className="person_r_name">Дмитрий Иванов</div>
                                    </div>
                                    <div className="person_r_data">16.12.2021</div>
                                </div>
                                <div className="text_review">Отвечала за найм и адаптацию сотрудников в компании, за
                                    поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию
                                    пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике.
                                    Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы,
                                    и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные,
                                    амбициозные.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div style={{textAlign: "center"}}>
                    <button className={`${"button"}  ${"button_1"}`} onClick={this.previous}>
                    </button>
                    <button className={`${"button"}  ${"button_2"}`} onClick={this.next}>
                    </button>
                </div>
            </div>
        );
    }
}

