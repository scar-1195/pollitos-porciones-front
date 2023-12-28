import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminRouter } from '../admin/router/AdminRouter';
import { ClientRouter } from '../client/router/ClientRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<AdminRouter />} />
        <Route path='*' element={<ClientRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
