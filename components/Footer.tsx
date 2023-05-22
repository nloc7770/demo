import FooterMenu from './footer/FooterMenu';
import SocialButtons from './footer/SocialButtons';
import FooterContacts from './footer/Contacts';
import FooterAbout from './footer/About';
import { IMenuItem } from '../@types/components';

export default function Footer({ menuList, companyTitle }: { menuList: IMenuItem[], companyTitle?: string }) {
	return (
		<footer className='page-footer'>
			<div className='container'>
				<div className='row'>
					<div className='page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-1 order-md-3 order-1'>
						<FooterAbout companyTitle={companyTitle} />
					</div>
					<div className='page-footer__item col-sm-12 col-md-4 col-lg-3 order-lg-1 order-md-2 order-2'>
						<FooterMenu menuList={menuList} />
					</div>
					<div className='page-footer__item col-sm-12 col-md-8 col-lg-3 order-lg-1 order-md-3 order-3'>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2231299181585!2d106.62745193878072!3d10.853622931554973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2sQuang%20Trung%20Software%20City!5e0!3m2!1sen!2s!4v1684767063023!5m2!1sen!2s" width="" height="" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div className='page-footer__item col-sm-12 col-md-4 col-lg-3 order-lg-1 order-md-3 order-4'>
						<SocialButtons />
					</div>
				</div>
			</div>
		</footer>
	);
}
