import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CalendlyButton from './CalendlyButton';

export default function Navbar({ className }) {
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const basics = i18n.getResourceBundle(language, 'basics');
  return (
    <nav className={className}>
      <div id='nav-container' className='flex justify-between items-center'>
        <div
          className='flex justify-center items-center gap-5'
          id='left-nav-container'
        >
          <h1>Héctor Guerra</h1>
          {/* <h1 className='hero'>N3URALAB</h1> */}
        </div>
        <div
          className='flex justify-center items-center gap-4'
          id='right-nav-container'
        >
          {/* <Link to='/'>Mi Historia</Link>
          <Link to='/'>Mi Visión</Link>
          <Link to='/'>Mis Proyectos</Link> */}
          <CalendlyButton className='nav-buttons'>
            Asesoría Gratuita
          </CalendlyButton>
          <a
            href={basics.cv_url}
            rel='noopener noreferrer'
            target='_blank'
            className='nav-buttons white-hover'
            id='cv-button'
          >
            Minimal CV
          </a>
        </div>
      </div>
    </nav>
  );
}
