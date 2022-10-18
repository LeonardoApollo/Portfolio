$(document).ready(function(){
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    });

    const price = document.querySelector('.price__currentprice'),
    closePrice = document.querySelector('.price__close');

    closePrice.addEventListener('click', () => {
        price.classList.add('disable');
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

	$('form').validate({
		rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
				required: true,
				email: true
				},
			chekbox: {
				required: true,
			}
		},
		messages: {
			name: "Неверное имя",
			email: {
				required: "Введите свою почту",
				email: "Неверный адрес почты"
			},
			checkbox: 'Подтвердите обработку персональных данных',
		}
	});

    $('form').submit(function(e) {
        e.preventDefault();
        
        if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "smart.php",
			data: $(this).serialize()
		})

        form.reset();
    });
});
