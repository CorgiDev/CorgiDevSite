// button.setAttribute('aria-expanded', !expanded);

(function() {
    const headings = document.querySelectorAll('h2');

    Array.prototype.forEach.call(headings, h => {
        let btn = h.querySelector('button');
        btn.onclick = () => {
            let expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expended', !expanded);
            EventTarget.hidden = expanded;
        }
    })
}) ()