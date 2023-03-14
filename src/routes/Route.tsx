import { Routes, Route } from 'react-router-dom';

import LayoutDefault from '@layout/layoutDefault/LayoutDefault';
import Home from '@pages/Home';

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}
