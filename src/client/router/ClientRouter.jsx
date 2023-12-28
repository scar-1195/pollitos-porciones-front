import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage } from '../pages';

export const ClientRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
