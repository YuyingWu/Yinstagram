class IO {
	constructor() {
		this.defaultImg = '/static/img/loading.svg';
		this.ratio = 0.25;

		// 默认调用 init
		this.init();
	}
	createIO() {
		this.io = new IntersectionObserver(
			(entries) => {
                entries.forEach((entry) => {
                	if(entry.intersectionRatio > this.ratio){
                		const target = entry.target;
	                	target.src = target.getAttribute('data-src');
	                	this.io.unobserve(target);
                	}
                });
            },
            {
            	// 可见度为多少时，触发callback
            	threshold: [this.ratio]
            }
        );
	}
	init() {
		this.createIO();

		document.querySelectorAll('[data-src]').forEach((item, index) => {
			item.src = this.defaultImg;
			this.io.observe(item);
		});
	}
}

export default IO;