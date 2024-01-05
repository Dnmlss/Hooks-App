import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { AboutPage, HomePage, LoginPage } from './index';
import { NavBar } from './NavBar';

export const MainApp = () => {
	return (
		<UserProvider>
			{/* <h1>MainApp</h1> */}
			<NavBar />
			<hr />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='about' element={<AboutPage />} />

				{/* <Route path='/*' element={<LoginPage />} /> */}

				<Route path='/*' element={<Navigate to={'about'} />} />
			</Routes>
		</UserProvider>
	);
};
