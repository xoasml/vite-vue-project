import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
	onNeedRefresh() {
		const refresh = confirm('새로운 업데이트가 있습니다. 새로고침하시겠습니까?');
		if (refresh) {
			updateSW(true);
		}
	},
	onOfflineReady() {
		console.log('앱이 오프라인에서 사용할 준비가 되었습니다.');
	}
});