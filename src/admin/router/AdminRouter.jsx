import { Navigate, Route, Routes } from 'react-router-dom';
import { ChickenPage, CouponsPage, PortionsPage } from '../pages';

export const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/chicken' element={<ChickenPage />} />
        <Route path='/portions' element={<PortionsPage />} />
        <Route path='/coupons' element={<CouponsPage />} />
        <Route path='*' element={<Navigate to='/admin/chicken' />} />
      </Routes>
    </div>
  );
};
