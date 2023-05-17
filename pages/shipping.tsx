import MainLayout from '../layouts/Main';
import {IMenuItem} from '../@types/components';
import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';

export default function ShippingPage({mainMenu, footerMenu}: IShippingPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Vận chuyển</h1>
				<div className='text-container'>
					<h1>1. Đơn hàng trong nội thành TP Hồ Chí Minh </h1>
					<div>
						<p> Chi phí vận chuyển:</p>
						<ul>
							<li>Miễn phí giao hàng dưới 5km áp dụng cho đơn hàng trên 1.000.000 VND</li>
							<li>Tính phí giao hàng cho đơn hàng trên 5km và dưới 1.000.000 VND là 5.000 VND/ km (Nếu khách hàng cần gấp )</li>
						</ul>
						<p> Thời gian giao hàng:</p>
						<ul>
							<li>Các đơn hàng đặt hàng trước 17h30 sẽ được giao luôn trong ngày, thời giai giao hàng từ 30 phút đến 2h phút kể từ thời điểm khách hàng đặt hàng.</li>
							<li>Các đơn hàng đặt sau 17h30 sẽ giao vào ngày hôm sau.</li>
						</ul>
						<p>&nbsp;</p>
						<h1><strong>2. Đơn hàng ngoại thành TP Hồ Chí Minh và các tỉnh.</strong></h1>
						<p>Hình thức vận chuyển:</p>
						<ul>
							<li>Giao hàng qua các đơn vị vận chuyển như: GHTK, GHN, Viettel Port tùy theo khu vực khách hàng.</li>
						</ul>
						<p> Chi phí vận chuyển:</p>
						<ul>
							<li>Tùy theo đơn hàng và quy định của đơn vị vận chuyển hàng hóa, khách hàng thanh toán chi phí vận chuyển cho đối tác vận chuyển của NT&nbsp; Store.</li>
						</ul>
						<p> Thời gian giao hàng:</p>
						<ul>
							<li>Từ 2 ngày đến 6 ngày tùy thuộc vào địa điểm nhận của khách .</li>
						</ul>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IShippingPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}