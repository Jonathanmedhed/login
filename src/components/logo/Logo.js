import React from 'react'
import { useTranslation } from "react-i18next";

const Logo = ({ className, wTitle, wSub }) => {

    const { t } = useTranslation();

    return (
        <div className={`logo ${ className }`}>
            <div className={`logo__circle ${ className }`}></div>
            {wTitle ? 
                <span className='logo__title --mt-1'>
                    <span>
                        {t('global.titleA')}
                    </span>
                    <span>
                        {t('global.titleB')}
                    </span>
                </span> 
            : ''}
            {wSub ? 
                <span className='logo__subtitle'>
                    {t('global.titleSub')}
                </span> 
            : ''}
        </div>
    )
}

export default Logo;