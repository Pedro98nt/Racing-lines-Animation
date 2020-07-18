const line_cont_el = document.querySelector('.line_container');
	function create_line () {
		const line_el = document.createElement('div');
		line_el.classList.add('line');
		const cline_el = document.createElement('div');
		cline_el.classList.add('child_line');
		line_el.appendChild(cline_el);
		return line_el;
	}

	for (var i = 0; i < 25; i++) {
		line_cont_el.appendChild(create_line());
	}

const button_el = document.querySelector('button');
button_el.addEventListener('click',()=>{
	const cline_els = document.querySelectorAll('.child_line');
	cline_els.forEach((cline_el)=>{
		setTimeout(()=>{cline_el.style.height = "100%";
						setTimeout(()=>{
							cline_el.style.height = "0%";
						}, 3000);
	},Math.random()*500);
	})
});