import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/DetailPage.css"

const DetailPage = (props) => {
    return(
        <div className='detail'>
            <div className='text'>
            00000전공을 선택한 사람은 다음과 같은 비율이에요!
            </div>

        <NavLink to ="/collaboration">
            <button className='button'>
                더 자세한 정보를 원한다면?
            </button>
        </NavLink>
        </div>
    )
}

export default DetailPage;