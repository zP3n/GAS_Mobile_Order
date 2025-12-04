let cs_btn = document.getElementById('creSto');
let so_btn = document.getElementById("ser-odr");
let pg = document.getElementById("page");
cs_btn.addEventListener('click', function() {
	pg.innerHTML = "";
	pg.insertAdjacentHTML('afterbegin',
		'<div class="menu" id="m2-ca"><input type="email" name="email" placeholder="Email"><input type="password" name="password" placeholder="Password"><input type="password" placeholder="Password(check)"><button class="m2-btn">Create Account</button></div>'
	);
});
so_btn.addEventListener('click', function() {
	pg.innerHTML = "";
	pg.insertAdjacentHTML('afterbegin',
		'<div class="menu" id="m2-login"><input type="email" name="email" placeholder="Email"><input type="password" name="password" placeholder="Password"><button class="m2-btn">Login</button></div>'
	);
});
