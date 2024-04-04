import {Swiper,SwiperSlide} from 'swiper/swiper-react.mjs';
import 'swiper/swiper.scss';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import './Slider.css'
import 'swiper/modules/navigation.scss';
import 'swiper/modules/pagination.scss';
import 'swiper/modules/scrollbar.scss';

export default function Slider(){
    return(
        <>
        <Swiper  className='slider'
            modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay:4000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper)=>console.log(swiper)}
        >
            <SwiperSlide className='swiper-slide'>
                <img src='https://images.pexels.com/photos/20578401/pexels-photo-20578401/free-photo-of-a-yellow-building-with-windows-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='images'/>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src='https://images.pexels.com/photos/1637112/pexels-photo-1637112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'className='images'/>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src="https://images.pexels.com/photos/4147193/pexels-photo-4147193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='images'/>
            </SwiperSlide>
        </Swiper>
        </>
    );
}
