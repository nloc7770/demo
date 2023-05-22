// import Link from 'next/link';
// import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'Cửa hàng điện thoại Apollo zone';
	return (
		<>
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
				Đia chỉ:  Công viên phầm mềm Quang Trung<br/>
				Hotline : 0979407051<br />
				Email: lienhe@apollozone.com.vn<br />
				THỜI GIAN MỞ CỬA:<br />
				Từ: 7:00-22:00 (Các ngày trong tuần)<br />
			</div>
		</>
	);
}