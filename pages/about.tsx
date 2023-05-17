import { GetServerSideProps } from 'next';
import { IMenuItem } from '../@types/components';
import MainLayout from '../layouts/Main';
import { apiClient } from '../lib/api';
import { makeAllMenus } from '../lib/menu';

export default function ShippingPage({ mainMenu, footerMenu }: IPageProps) {

	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>About</h1>
				<div className='text-container' style={{ textAlign: "center" }}>
					<p>Thông Tin Kinh Doanh</p>
					<h3>CỬA HÀNG ĐIỆN THOẠI Apollo zone</h3>
					<p>Địa chỉ: 100 Luỹ Bán Bích, P. Tân Thành, Q. Tân Phú. HCM</p>
					<p>Hotline: <a href="tel:84979407051">0979407051</a></p>
					<p><strong>MST/ĐKKD/QĐTL</strong>: 8737607778-001</p>
					<p>Đăng ký lần đầu: Ngày 02 tháng 03 năm 2022</p>
					<p>Điện thoại: 0776416267</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({ menu: 'category' });

	const menus = makeAllMenus({ categoryTree });

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}