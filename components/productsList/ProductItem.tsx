import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct, TThumbRatio } from 'boundless-api-client';
import clsx from 'clsx';
import Link from 'next/link';
import { TQuery } from '../../@types/common';
import { useAppDispatch } from '../../hooks/redux';
import { productImgRatio } from '../../lib/imgs';
import { getProductUrl } from '../../lib/urls';
import { addItem2Cart } from '../../redux/actions/cart';
import NoImage from '../NoImage';
import ProductLabels from '../product/Labels';
import ProductListImage from './ProductImage';
import ProductPrice from './ProductPrice';

export default function ProductItem({ product, query, categoryId, className }: IProductItemProps) {
	const params = { ...query };
	if (categoryId && categoryId !== product.default_category?.category_id) {
		Object.assign(params, { category: categoryId });
	}
	const productUrl = getProductUrl(product, params);

	return (
		<li
			className={clsx('products__item', {
				'in-stock': product.in_stock,
				'out-of-stock': !product.in_stock
			}, className)}
			data-id={product.product_id}
			itemScope
			itemType='//schema.org/Product'
		>
			<div className='products__item-wrapper'>
				<ProductImage product={product}
					productUrl={productUrl} />
				<h4 className='products__title'>
					<Link href={productUrl}>
						<a itemProp='url'>
							<span itemProp='name'>{product.title}</span>
						</a>
					</Link>
				</h4>

				<div className={'products__offer-row'}>
					<div className='products__offer'>
						{product.price && <ProductPrice price={product.price} />}
					</div>
					<Product2Cart product={product} />
				</div>
			</div>
			<ProductSchemaOrgMarkup product={product} />
		</li>
	);
}

function Product2Cart({ product }: { product: IProduct }) {
	const dispatch = useAppDispatch();
	const onAddToCart = () => dispatch(addItem2Cart(product.item_id, 1));

	return (
		<div className={clsx('products__to-cart', {
			'products__to-cart_in-stock': product.in_stock,
			'products__to-cart_out-stock': !product.in_stock,
		})}>
			{product.in_stock
				? <button
					type={'button'}
					className='btn btn-to-cart products__to-cart-btn'
					onClick={onAddToCart}
				>
					<FontAwesomeIcon icon={faCartPlus} />
				</button>
				: <span className={'text-muted'}>Hết hàng</span>
			}
		</div>
	);
}

function ProductImage({ product, productUrl }: { product: IProduct, productUrl: string }) {
	const img = product.images!.find(({ is_default }) => is_default);

	return (
		<Link href={productUrl}>
			<a className={'products__image'}>
				{img
					? <ProductListImage image={img} alt={img.alt || product.title} />
					: <NoImage ratio={productImgRatio || TThumbRatio['1-1']} />
				}
				<ProductLabels labels={product.labels!}
					className={'product__labels_small product__labels_column'}

				/>
			</a>
		</Link>
	);
}

function ProductSchemaOrgMarkup({ product }: { product: IProduct }) {
	const schemaAvailability = product.in_stock ? '//schema.org/InStock' : '//schema.org/OutOfStock';

	return (
		<>
			<meta itemProp='productID' content={String(product.product_id)} />
			<meta itemProp='brand' content={product.manufacturer?.title || ''} />
			<meta itemProp='sku' content={product.sku || ''} />
			{product.price &&
				(product.price?.min
					?
					<div itemProp='offers' itemScope itemType='//schema.org/AggregateOffer'>
						<meta itemProp='lowPrice' content={String(product.price.min)} />
						<meta itemProp='highPrice' content={String(product.price.max)} />
						<meta itemProp='priceCurrency' content={product.price.currency_alias?.toUpperCase()} />
						<link itemProp='availability' href={schemaAvailability} />
					</div>
					:
					<div itemProp='offers' itemScope itemType='//schema.org/Offer'>
						<meta itemProp='price' content={String(product.price.value)} />
						<meta itemProp='priceCurrency' content={product.price.currency_alias?.toUpperCase()} />
						<link itemProp='availability' href={schemaAvailability} />
					</div>
				)
			}
		</>
	);
}

interface IProductItemProps {
	product: IProduct;
	query: TQuery;
	categoryId?: number;
	className?: string;
}