import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons/faShippingFast';
import { ReactNode } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function MarsTopNav() {
	return (
		<nav className={'mars-top-nav'}>
			<div className={'container-xxl mars-top-nav__container'}>
				<div className={'mars-top-nav__contacts'}>
					<Contact href={'tel:+84979407051'}
						label={'Liên hệ: 0979407051'}
						icon={<FontAwesomeIcon icon={faPhoneAlt} />}
					/>
				</div>
				<div className={'mars-top-nav__note'}>
					<p>
						Mở cửa vào lúc 7:00 - 22:00<FontAwesomeIcon icon={faShippingFast} className={'text-theme-color ms-1'} />
					</p>
				</div>
				<ul className={'mars-top-nav__menu list-unstyled'}>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/shipping'}>
							<a className='mars-top-nav__menu-link'>Vận chuyển</a>
						</Link>
					</li>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/about'}>
							<a className='mars-top-nav__menu-link'>Về chúng tôi</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

const Contact = ({ href, label, icon }: { href: string, label: string, icon?: ReactNode }) => {
	return (
		<div className={'mars-top-nav__contact'}>
			{icon &&
				<a className={'mars-top-nav__contact-icon'} href={href}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>
	);
};