export const defs = `<defs>
<polygon id="path-1" points="26.7317073 14 181.268293 14 192 24.7317073 192 179.268293 181.268293 190 26.7317073 190 16 179.268293 16 24.7317073"></polygon>
<filter x="-14.2%" y="-13.1%" width="128.4%" height="128.4%" filterUnits="objectBoundingBox" id="filter-2">
    <feMorphology radius="1.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
    <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
    <feGaussianBlur stdDeviation="6.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
</filter>
</defs>`;
export const path = `<g id="Artboard-Copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g id="cpu-copy">
    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
    <use fill="#212733" fill-rule="evenodd" xlink:href="#path-1"></use>
</g>
</g>`;
export const cpu = `<svg width="208px" height="208px" viewBox="0 0 208 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Artboard Copy 2</title>
<defs>
    <polygon id="path-1" points="26.7317073 14 181.268293 14 192 24.7317073 192 179.268293 181.268293 190 26.7317073 190 16 179.268293 16 24.7317073"></polygon>
    <filter x="-14.2%" y="-13.1%" width="128.4%" height="128.4%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="1.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="6.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
    </filter>
</defs>
<g id="Artboard-Copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="cpu-copy">
        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
        <use fill="#212733" fill-rule="evenodd" xlink:href="#path-1"></use>
    </g>
</g>
</svg>`;
