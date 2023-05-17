import {useAppSelector} from './redux';
import {useCallback} from 'react';
import currency, {Options} from 'currency.js';

export default function useFormatCurrency() {
	const localeSettings = useAppSelector(state => state.app.localeSettings);

	const formatCurrency = useCallback((amount: number|string) => {
		amount = Number(amount);
		return amount.toLocaleString('vi', {style : 'currency', currency : 'VND'})
	}, [localeSettings]);

	return {formatCurrency};
}