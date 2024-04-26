import "./styles/style.css";
import SVGInjectInstance from "@iconfu/svg-inject";

Array.from(document.querySelectorAll('[data-svg]')).forEach($wrapper => {
    
    const $img = document.createElement('img');
    $img.setAttribute('src', $wrapper.dataset.svg);

    $wrapper.innerHTML = $img.outerHTML;

    SVGInjectInstance($wrapper.querySelector("img"), { makeIdsUnique: true });
})