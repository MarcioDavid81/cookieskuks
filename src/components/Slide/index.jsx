import styles from './Slide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slide () {


    const data = [
        { id: '1', title: 'Slide 1', image: '/cookie-cab6.jpg' },
        { id: '2', title: 'Slide 2', image: '/cookie-cab5.jpg' },
        { id: '3', title: 'Slide 3', image: '/cookie-cab4.jpg' },
        { id: '4', title: 'Slide 4', image: '/cookie-cab3.jpg' },
        { id: '5', title: 'Slide 5', image: '/cookie-cab2.jpg' },
        { id: '6', title: 'Slide 6', image: '/cookie-cab1.jpg' },
    ]

    return (
        <div className={styles.slide}>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.slideItem}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slide;